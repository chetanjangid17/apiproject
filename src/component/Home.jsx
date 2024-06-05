import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import cloudyImage from '../assets/cloudy.png'; // Import cloudy image
import rainyImage from '../assets/rainy.jpg'; // Import rainy image

const Home = () => {
  const [weather, setWeather] = useState('sunny'); // Default weather condition is sunny

  useEffect(() => {
    // Fetch weather data or use your preferred method to determine current weather condition
    // For demonstration, setting weather condition randomly
    const weatherConditions = ['sunny', 'cloudy', 'rainy'];
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    setWeather(weatherConditions[randomIndex]);
  }, []);

  // Function to select appropriate image based on weather condition
  const getWeatherImage = () => {
    switch (weather) {
       case 'cloudy':
        return cloudyImage;
      case 'rainy':
        return rainyImage;
      default:
        return rainyImage;
    }
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My Weather App
      </Typography>
      <Typography variant="body1">
        Use the navigation bar to explore the list of Weather.
      </Typography>
      <img src={getWeatherImage()} alt="Weather" style={{marginTop: '20px', maxWidth: '100%', height: 'auto' }} />
    </Container>
  );
};

export default Home;
