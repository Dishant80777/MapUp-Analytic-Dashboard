// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const CustomListItemText = styled(ListItemText)({
  color: '#F0F0F0', // Set the text color here
});

const Sidebar = () => (
  <Box sx={{ width: 200, bgcolor: 'primary.main', height: '100vh', color: 'white' }}>
    <List>
      <ListItem button component={Link} to="/by-brand">
        <CustomListItemText primary="EV Population by Brand" />
      </ListItem>
      <ListItem button component={Link} to="/trends">
        <CustomListItemText primary="Trends Over Time" />
      </ListItem>
      <ListItem button component={Link} to="/geo-distribution">
        <CustomListItemText primary="Geographical Distribution" />
      </ListItem>
      <ListItem button component={Link} to="/total">
        <CustomListItemText primary="Total EV Population" />
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;
