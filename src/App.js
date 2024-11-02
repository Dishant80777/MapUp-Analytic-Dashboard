// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TotalEVPopulation from './components/TotalEVPopulation';
import EVPopulationByBrand from './components/EVPopulationByBrand';
import TrendsOverTime from './components/TrendsOverTime';
import GeographicalDistribution from './components/GeographicalDistribution';
import { Box } from '@mui/material';

const App = () => (
  <Router>
    <Header />
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ padding: 3, flex: 1 }}>
        <Routes>
          <Route path="/total" element={<TotalEVPopulation />} />
          <Route path="/by-brand" element={<EVPopulationByBrand />} />
          <Route path="/trends" element={<TrendsOverTime />} />
          <Route path="/geo-distribution" element={<GeographicalDistribution />} />
        </Routes>
      </Box>
    </Box>
  </Router>
);

export default App;
