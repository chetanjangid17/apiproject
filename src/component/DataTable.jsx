import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';

const API_KEY = '5b1b9d9a5ad038b5865238f84306c0a6'; 
const CITY_IDS = ['5128581', '2643743', '2968815', '524901', '1850147', '1853908', '1835848', '3435910', '3688689', '3451190'];  // 10 example city IDs

const DataTable = () => {
  // State for storing the fetched data and the search term
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the OpenWeatherMap API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch weather data for each city using Promise.all
        const promises = CITY_IDS.map(id =>
          axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
        );
        const responses = await Promise.all(promises);
        // Store the fetched data in state
        setData(responses.map(response => response.data));
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };

    fetchData();
  }, []);

  // Handle changes in the search input field
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the data based on the search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.weather[0].description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Title */}
      <Typography variant="h4" gutterBottom>Weather Information</Typography>
      {/* Search input field */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ width:"100%",}} // Set the width to 100%
      />
      {/* Table container */}
      <TableContainer component={Paper}>
        {/* Table */}
        <Table>
          {/* Table header */}
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell>Temperature (°C)</TableCell>
              <TableCell>Weather</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {/* Map through the filtered data and render table rows */}
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.main.temp}</TableCell>
                <TableCell>{item.weather[0].main}</TableCell>
                <TableCell>{item.weather[0].description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DataTable;
