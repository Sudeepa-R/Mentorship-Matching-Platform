import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ServerError() {
  const navigate = useNavigate();

  const handleRetry = () => {
    // Implement your retry logic here
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        500 - Server Error
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Oops! Something went wrong. Please try again later.
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ marginRight: 2 }}
        >
          Go to Home
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleRetry}>
          Retry
        </Button>
      </Box>
    </Box>
  );
}

export default ServerError;
