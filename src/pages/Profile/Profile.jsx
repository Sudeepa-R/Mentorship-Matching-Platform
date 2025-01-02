import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  Chip,
  Divider,
  Button,
} from '@mui/material';
import AuthContext from '../../context/auth/AuthContext';
import CustomLoaderWithText from '../../constants/loader/CustomLoader';
import ThemeContext from '../../context/theme/ThemeContext';
import ThemeComponent from '../../components/Theme/Theme';

const Profile = () => {
  const { userName } = useParams();
  const { user, getUser, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (userName) {
        const userdata = await getUser(userName);
        if (!user) {
          setUser(userdata);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [userName, getUser]);

  if (loading) {
    return <CustomLoaderWithText size={"large"}/>;
  }
  if (!user) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: isDark ? '#333' : '#fff', padding: '20px' }}>
        <Typography variant="h5" color="error" sx={{ color: isDark ? '#e52828e0' : '#e52828e0', textAlign: 'center', fontWeight: 'bold' }}>User data is not available.</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '10px', color: isDark ? '#fff' : '#000' }}>We apologize for the inconvenience. Please try again later.</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)} sx={{ marginTop: '20px', padding: '10px 20px', borderRadius: '4px', textTransform: 'none', fontSize: '16px', fontWeight: 'bold', backgroundColor: isDark ? '#007bff' : '#0056b3', '&:hover': { backgroundColor: isDark ? '#0056b3' : '#007bff' } }}>Return Home</Button>
      </Box>
    );
  }

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Box sx={{ width: '100vw', height: '100vh', p: 1, background: isDark ? 'linear-gradient(to right, #2B2B2B, #3B3B3B)' : 'linear-gradient(to right, #f0f4f8, #e0e7ef)' }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: isDark ? '#1A1A1A' : '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 2, position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
          <ThemeComponent />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              border: '4px solid #fff',
              boxShadow: 3,
              bgcolor: user?.profilePic ? 'transparent' : 'orange',
              color: user?.profilePic ? 'inherit' : 'white',
            }}
            alt="Profile Picture"
            src={user?.profilePic || `https://api.multiavatar.com/${user?.firstName}.svg`}
          >
            {!user?.profilePic || `https://api.multiavatar.com/${user?.firstName}.svg`}
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
              {fullName}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
              {user?.jobTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" color="textSecondary" sx={{ color: isDark ? '#fff' : '#000' }}>
                {user?.location}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: isDark ? '#fff' : '#000' }}>
                {user?.phoneNumber}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
          Bio
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ color: isDark ? '#fff' : '#000' }}>
            {user?.bio || 'Bio Not Available'}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
            Experience
          </Typography>
          <Grid container spacing={2}>
            {user?.experience?.length > 0 ? user?.experience?.map((exp) => (
              <Grid item xs={12} key={exp.id}>
                <Paper variant="outlined" sx={{ p: 2, backgroundColor: isDark ? '#2B2B2B' : '#f9f9f9', borderRadius: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="h6" sx={{ color: isDark ? '#fff' : '#000' }}>{exp.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ color: isDark ? '#fff' : '#000' }}>
                    {exp.date}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: isDark ? '#fff' : '#000' }}>
                    {exp.description}
                  </Typography>
                </Paper>
              </Grid>
            )) : <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center' , px:5 , py:2 , color:"#e52828e0" }}>Experience Not Available</Typography>}
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
            Education
          </Typography>
          <Grid container spacing={2}>
            {user?.education?.length > 0 ? user?.education?.map((edu) => (
              <Grid item xs={12} key={edu.id}>
                <Paper variant="outlined" sx={{ p: 2, backgroundColor: isDark ? '#2B2B2B' : '#f9f9f9', borderRadius: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="h6" sx={{ color: isDark ? '#fff' : '#000' }}>{edu.degree}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ color: isDark ? '#fff' : '#000' }}>
                    {edu.institution} • {edu.date}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: isDark ? '#fff' : '#000' }}>
                    {edu.description}
                  </Typography>
                </Paper>
              </Grid>
            )) : <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center' , px:5 , py:2 , color:"#e52828e0" }}>Education Not Available</Typography>}
          </Grid>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {user?.skills?.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 1, color: isDark ? '#fff' : '#000' }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{mt:4}}>
          <Typography variant="h5" gutterBottom sx={{ color: isDark ? '#fff' : '#000' }}>
            Interests
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {user?.interests?.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 1, color: isDark ? '#fff' : '#000' }}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;