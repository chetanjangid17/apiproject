import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import DataTable from './component/DataTable';
import Navbar from './component/Navbar';
import Home from './component/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container style={{ marginTop: '20px', padding: '10px', maxWidth: '90%' }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<DataTable />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
