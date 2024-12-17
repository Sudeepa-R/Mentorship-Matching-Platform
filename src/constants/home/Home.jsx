import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import  './home.scss'

function Home() {

  const homeRef = useRef(null);
  const findMentorRef = useRef(null);
  const mentorshipStoriesRef = useRef(null);
  const membershipPlansRef = useRef(null);
  

  // Scroll to specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionRefs = {
    home: homeRef,
    findMentor: findMentorRef,
    mentorshipStories: mentorshipStoriesRef,
    membershipPlans: membershipPlansRef,
  };
  return (
    <>
      <Navbar onScrollToSection={(section) => scrollToSection(sectionRefs[section])} />
     
      {/*----- Home Section ------*/}
      <Box ref={homeRef} id="home"
         className="homeContainer"
      >
        <Typography variant="h2" gutterBottom  className="title">
          Welcome to the Mentorship Matching Platform
        </Typography>
        <Typography variant="h5" gutterBottom className="title">
          Connect with mentors to unlock your potential.
        </Typography>
        <Typography variant="body1"  className="description">
          Our platform offers a variety of resources to help you grow, including one-on-one mentoring sessions, group workshops, and access to exclusive content.
        </Typography>
        <Typography variant="body1"  className="description">
          Whether you're looking to enhance your skills, explore new career paths, or gain insights from experienced professionals, we are here to support you every step of the way.
        </Typography>
        <Button variant="contained"   className="startButton" size="large">
          <Link to="/register" >
            Get Started
          </Link>
        </Button>
      </Box>


{/*------------ find-mentor section------------- */}
      <Box ref={findMentorRef} id="findMentor" className="section">
        <Typography variant="h3" className="sectionTitle">
          Find a Mentor
        </Typography>
        <Typography variant="body1" className="sectionContent">
          Learn more about how our platform can help you connect with mentors and unlock new opportunities.
        </Typography>
      </Box>


{/*------ mentorship-storiess ----------*/}
      <Box ref={mentorshipStoriesRef} id="mentorshipStories" className="section">
        <Typography variant="h3" className="sectionTitle">
        Mentorship Stories
        </Typography>
        <Typography variant="body1" className="sectionContent">
          Learn more about how our platform can help you connect with mentors and unlock new opportunities.
        </Typography>
      </Box>

  
   {/*---- Membership Plans Section---------- */}
      <Box ref={membershipPlansRef} id="membershipPlans" className="section">
        <Typography variant="h3" className="sectionTitle">
        Membership Plans
        </Typography>
        <Typography variant="body1" className="sectionContent">
          Learn more about how our platform can help you connect with mentors and unlock new opportunities.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
