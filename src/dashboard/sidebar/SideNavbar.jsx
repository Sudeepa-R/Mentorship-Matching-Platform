import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Avatar, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.scss';

function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const handleMouseEnter = () => {
    setSidebar(true);
  };

  const handleMouseLeave = () => {
    setSidebar(false);
  };

  const handleLogout = () => {
   
    console.log('Logging out...');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" onMouseEnter={handleMouseEnter}>
            <MenuIcon sx={{ color: '#537786' }} />
          </IconButton>

          {/* Profile Section in the center */}
          <Box className="profile-container">
            <Avatar className="avatar" sx={{backgroundColor:'#537786',color:'#fff'}}>A</Avatar> 
            <Box className="profile-info">
              <Typography className="profile-name">
                John Doe
              </Typography>
              
            </Box>
            <Button className="logout-button" variant="outlined" onClick={handleLogout} sx={{textTransform:'none'}}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={sidebar} onClose={() => setSidebar(false)}>
        <Box className="drawer-box" role="presentation" onMouseLeave={handleMouseLeave}>
          <List>
            {SidebarData.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path}  sx={{
                    '&:hover': {
                      backgroundColor: '#dadada',
                    }}}>
                  <ListItemIcon className="list-item-icon">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} className="list-item-text" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default SideNavbar;
