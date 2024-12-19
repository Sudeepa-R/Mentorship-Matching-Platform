import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          width: '100%',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#537786' }}>
          Welcome to the Mentorship Matching Platform
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: '#537786' }}>
          Connect with mentors to unlock your potential.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: '#333' }}>
          Our platform offers a variety of resources to help you grow, including one-on-one mentoring sessions, group workshops, and access to exclusive content.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: '#333' }}>
          Whether you're looking to enhance your skills, explore new career paths, or gain insights from experienced professionals, we are here to support you every step of the way.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white', marginTop: 3 }} size="large">
          <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
            Get Started
          </Link>
        </Button>
      </Box>
      <Footer/>
    </>
  );
}

export default Home;
