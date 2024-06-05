import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Hidden, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  // State to manage the drawer open/close state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to handle drawer toggle
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Drawer content
  const drawer = (
    <div>
      <List>
        {/* Links in the drawer */}
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/list" onClick={handleDrawerToggle}>
          <ListItemText primary="List" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {/* App bar */}
      <AppBar position="static">
        {/* Toolbar */}
        <Toolbar sx={{backgroundColor:'DarkGrey'}}>
          {/* App title */}
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            My Weather App
          </Typography>
          
          {/* Menu icon (visible on smaller screens) */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { xs: "flex", md: "none" }}}>
            <MenuIcon />
          </IconButton>
          
          {/* Navigation links (visible on larger screens) */}
          <Grid sx={{ display: { xs: "none", md: "flex" }}}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/list">List</Button>
          </Grid>
         
        </Toolbar>
      </AppBar>
      
      {/* Drawer (visible on smaller screens) */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
