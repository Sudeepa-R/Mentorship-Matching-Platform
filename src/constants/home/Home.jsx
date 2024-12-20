import React, { useRef,useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./home.scss";
import {get} from '../../api/API'

function Home() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const findMentorRef = useRef(null);
  const mentorshipStoriesRef = useRef(null);
  const membershipPlansRef = useRef(null);
  const contactUsRef = useRef(null);

  // Scroll to specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // This runs once before the component mounts
    backendTest()
    console.log('Component is about to mount');

    // Optionally clean up if needed
   
}, []); 
  const sectionRefs = {
    home: homeRef,
    findMentor: findMentorRef,
    mentorshipStories: mentorshipStoriesRef,
    membershipPlans: membershipPlansRef,
    contactUs: contactUsRef,
  };

  const backendTest = async () => {
    const test = await get('/users/1');
    console.log(test);  
};

  return (
    <>
      <Navbar
        onScrollToSection={(section) => scrollToSection(sectionRefs[section])}
      />

      {/*----- Home Section ------*/}
      <Box ref={homeRef} id="home" className="homeContainer">
        <Typography variant="h2" gutterBottom className="title">
          Welcome to the Mentorship Matching Platform
        </Typography>
        <Typography variant="h5" gutterBottom className="title subTitle">
          <strong>Connect with mentors to unlock your potential.</strong>
        </Typography>
        {/* <Typography variant="body1" className="description">
          <strong>
            Our platform offers a variety of resources to help you grow,
            including one-on-one mentoring sessions, group workshops, and access
            to exclusive content.
          </strong>
        </Typography> */}
        {/* <Typography variant="body1" className="description">
          <strong>
            Whether you're looking to enhance your skills, explore new career
            paths, or gain insights from experienced professionals, we are here
            to support you every step of the way.
          </strong>
        </Typography> */}
        <Button variant="contained" className="startButton" size="large">
          <Link to="/register">Get Started</Link>
        </Button>
      </Box>

      {/*------------ find-mentor section------------- */}
      <Box ref={findMentorRef} id="findMentor" className="section-1 ">
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

      {/*------ mentorship-storiess ----------*/}
      <Box
        ref={mentorshipStoriesRef}
        id="mentorshipStories"
        className="section-2"
      >
        <Typography variant="h3" className="sectionTitle-2">
          Mentorship Stories
        </Typography>
        <Typography variant="body1" className="sectionContent-2">
          Learn more about how our platform can help you connect with mentors
          and unlock new opportunities.
        </Typography>

        {/*----------- ContactUs-------------- */}
        <Box
        ref={contactUsRef}
        id="contactUs"
        className="section-3"
        to='/contactUs'
       
      ></Box>
        <Box className="cardContainer">
          {[
            {
              image:
                "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
              title: "Story 1",
              content:
                "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
            },
            {
              image:
                "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
              title: "Story 2",
              content:
                "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
            },
            {
              image:
                "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
              title: "Story 3",
              content:
                "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
            },
          ].map((card, index) => (
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
                  backgroundColor: "#537786",
                  color: "#fff",
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
     

      
      <Box ref={membershipPlansRef} id="membershipPlans" className="section-3">
        <Typography variant="h3" className="sectionTitle-3">
          Membership Plans
        </Typography>
       
        <Box className="cardContainer-3">
    {[
      { title: 'Unlimited', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Credits $12/months' },
      { title: 'Pro', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Credits $12/months' },
      { title: 'Free', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Free' },
    ].map((card2, index) => (
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
            backgroundColor: '#fff',
            color: '#537786',
            textTransform: 'capitalize',
            border: '',
            borderRadius: '0',  // Removes the border radius
          }}
          
          onClick={() => navigate("/login")}
        >
          Purchase
        </Button>
      </Box>
    ))}
  </Box>
      </Box>

<Footer />

    </>
  );
}

export default Home;
