import React, { useRef, useEffect, useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./home.scss";
import ThemeContext from "../../context/theme/ThemeContext";
import { plans, stories } from "../../data";
import Celebration from "../../components/Celebration";

function Home() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const findMentorRef = useRef(null);
  const mentorshipStoriesRef = useRef(null);
  const membershipPlansRef = useRef(null);
  const contactUsRef = useRef(null);

  const { isDark } = useContext(ThemeContext);

  // Scroll to specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const sectionRefs = {
    home: homeRef,
    findMentor: findMentorRef,
    mentorshipStories: mentorshipStoriesRef,
    membershipPlans: membershipPlansRef,
    contactUs: contactUsRef,
  };

  return (
    <>
    <Celebration/>
      <Navbar
        onScrollToSection={(section) => scrollToSection(sectionRefs[section])}
      />

      {/*----- Home Section ------*/}
      <Box ref={homeRef} id="home" className="homeContainer" style={isDark ? { backgroundColor: '#333', color: '#fff' } : {}}>
        <Typography variant="h2" gutterBottom className="title">
          Welcome to the Mentorship Matching Platform
        </Typography>
        <Typography variant="h5" gutterBottom className="title subTitle">
          <strong>Connect with mentors to unlock your potential.</strong>
        </Typography>
        <Button variant="contained" className="startButton" size="large">
          <Link to="/register">Get Started</Link>
        </Button>
      </Box>

      {/*------------ find-mentor section------------- */}
      <Box ref={findMentorRef} id="findMentor" className="section-1 " style={isDark ? { backgroundColor: '#444', color: '#fff' } : {}}>
        <Box className="sectionContentWrapper-1">
          <Box className="content-1">
            <Typography variant="h3" className="sectionTitle-1">
              Find a Mentor
            </Typography>
            <Typography variant="body1" className="sectionContent">
              Learn more about how our platform can help you connect with
              mentors and unlock new opportunities.
            </Typography>
          </Box>
          <Box className="imageWrapper">
            <img
              src="https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900"
              alt="Find a Mentor"
              className="mentorImage"
            />
          </Box>
        </Box>
      </Box>

      {/*------ mentorship-stories ----------*/}
      <Box
        ref={mentorshipStoriesRef}
        id="mentorshipStories"
        className="section-2"
        style={isDark ? { backgroundColor: '#444', color: '#fff' } : {}}
      >
        <Typography variant="h3" className="sectionTitle-2">
          Mentorship Stories
        </Typography>
        <Typography variant="body1" className="sectionContent-2">
          Learn more about how our platform can help you connect with mentors
          and unlock new opportunities.
        </Typography>


        <Box className="cardContainer">
          {stories.map((card, index) => (
            <Box key={index} className="card">
              <img src={card.image} alt={card.title} className="cardImage" />
              <Typography variant="h6" className="cardTitle">
                {card.title}
              </Typography>
              <Typography variant="body2" className="cardContent">
                {card.content}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="cardButton"
                style={{
                  margin: "1rem auto",
                  display: "block",
                  backgroundColor: isDark ? '#537786' : '#537786',
                  color: isDark ? '#fff' : '#fff',
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/login")}
              >
                Learn More
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/*---- Membership Plans Section---------- */}

      <Box ref={membershipPlansRef} id="membershipPlans" className="section-3" style={isDark ? { backgroundColor: '#444', color: '#fff' } : {}}>
        <Typography variant="h3" className="sectionTitle-3">
          Membership Plans
        </Typography>

        <Box className="cardContainer-3">
          {plans.map((card2, index) => (
            <Box key={index} className="card2" sx={{ textAlign: 'left', padding: '16px', margin: '16px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h5" className="cardTitle2" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                {card2.title}
              </Typography>
              <Typography variant="body1" className="cardContent2" sx={{ marginBottom: '8px' }}>
                {card2.content}
              </Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
                {card2.subHeading}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="cardButton2"
                sx={{
                  margin: '1rem auto',
                  display: 'block',
                  backgroundColor: isDark ? '#fff' : '#fff',
                  color: isDark ? '#537786' : '#537786',
                  textTransform: 'capitalize',
                  border: '',
                  borderRadius: '0',
                }}

                onClick={() => navigate("/login")}
              >
                Purchase
              </Button>
            </Box>
          ))}
        </Box>
      </Box>



       {/*----------- ContactUs-------------- */}
       
       <Box
  ref={contactUsRef}
  id="contactUs"
  className="section-4 full-page"
  to="/contactUs"
>
  <Box>
    <Typography variant="h3" className="sectionTitle-4">
      Contact Us
    </Typography>
  </Box>
  <Box>
    <Footer />
  </Box>
</Box>


    


    </>
  );
}

export default Home;
