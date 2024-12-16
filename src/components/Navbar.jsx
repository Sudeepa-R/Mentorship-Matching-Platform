import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Find a Mentor', href: '/find-mentor' },
  { name: 'Mentorship Stories', href: '/mentorship-stories' },
  { name: 'Membership Plans', href: '/membership-plans' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem' }} aria-label="Global">
        {/* Logo */}
        <div style={{ display: 'flex' }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#537786' }}>
              MentorMatch
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '3rem' }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={{ fontWeight: '600', color: '#537786', fontSize: '1rem', textDecoration: 'none' }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button
            variant="text"
            style={{ color: '#000', textTransform: 'capitalize' }}
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#537786', color: '#fff', textTransform: 'capitalize' }}
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
