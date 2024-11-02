// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{
        borderBottom: '2px solid #ccc', // Add bottom border here
      }}>
      <Typography variant="h6">Electric Vehicle Dashboard</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
