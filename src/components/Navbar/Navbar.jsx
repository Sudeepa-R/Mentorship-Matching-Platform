import { Link, useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import "./navbar.scss";
import ThemeContext from "../../context/theme/ThemeContext";
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';

const navigation = [
  { name: "Home", section: "home" },
  { name: "Find a Mentor", section: "findMentor" },
  { name: "Mentorship Stories", section: "mentorshipStories" },
  { name: "Membership Plans", section: "membershipPlans" },
  { name: "Contact Us", section: "contactUs" },
];

const Navbar = ({ onScrollToSection }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, [setIsDark]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = [
      "home",
      "findMentor",
      "mentorshipStories",
      "membershipPlans",
      "contactUs",
    ];
    const sectionPositions = sections.map((section) => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY;

    for (let i = 0; i < sectionPositions.length; i++) {
      if (scrollPosition >= sectionPositions[i] - 50) {
        setActiveSection(sections[i]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };


  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <nav
        className={`navbar`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2rem",
        }}
        aria-label="Global"
      >
        <div style={{ display: "flex" }}>
          <Link to="/" style={{ textDecoration: "none", color: isDark ? "#fff" : "#537786" }}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              MentorMatch
            </span>
          </Link>
        </div>

        <div style={{ display: "flex", gap: "3rem" }}>
          {navigation.map((item) =>
            item.section ? (
              <span
                key={item.name}
                onClick={() => onScrollToSection(item.section)}
                className={`nav-link ${item.section === activeSection ? "active" : ""
                  }`}
                style={{ color: isDark ? "#fff" : "#537786" }}
              >
                {item.name}
              </span>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  fontWeight: "600",
                  color: isDark ? "#fff" : "#537786",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <IconButton onClick={toggleTheme}>
            {isDark ? <WbSunnySharpIcon style={{ color: '#fff' }} /> : <DarkModeSharpIcon style={{ color: '#000' }} />}
          </IconButton>
          <Button
            variant="text"
            style={{ color: isDark ? "#fff" : "#000", textTransform: "capitalize" }}
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#537786",
              color: "#fff",
              textTransform: "capitalize",
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
