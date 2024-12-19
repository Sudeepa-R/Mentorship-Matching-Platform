import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Chip,
  Divider,
} from '@mui/material';

const Profile = ({ users }) => {
  const { userId } = useParams();
  const user = users[userId];

  if (!user || !user.name) {
    return <Typography variant="h6" color="error">User data is not available.</Typography>;
  }

  return (
    <Box sx={{ width: '100%', p: 2, background: 'linear-gradient(to right, #f0f4f8, #e0e7ef)', borderRadius: 2 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              border: '4px solid #fff',
              boxShadow: 3,
              bgcolor: user.profilePic ? 'transparent' : 'orange',
              color: user.profilePic ? 'inherit' : 'white',
            }}
            alt="Profile Picture"
            src={user.profilePic || undefined}
          >
            {!user.profilePic && user.name.charAt(0)}
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {user.jobTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" color="textSecondary">
                {user.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Passionate software developer with 5+ years of experience in building web applications.
            Focused on creating efficient, scalable, and user-friendly solutions using modern
            technologies. Strong advocate for clean code and best practices.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Experience
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="h6">Senior Developer at Tech Corp</Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  2020 - Present
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Led development of multiple full-stack applications, mentored junior developers,
                  and implemented best practices across teams.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Education
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h6">BS in Computer Science</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              University of Technology • 2015 - 2019
            </Typography>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {user.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;