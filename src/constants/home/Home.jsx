import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Welcome to the Mentorship Matching Platform</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>Join us to connect with mentors and mentees!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ padding: '15px 30px', fontSize: '1em', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }} onClick={handleLogin}>Login</button>
        <button style={{ padding: '15px 30px', fontSize: '1em', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }} onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Home;