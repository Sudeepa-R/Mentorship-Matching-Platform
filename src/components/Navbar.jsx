import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./navbar.scss";

const navigation = [
  { name: "Home", section: "home" },
  { name: "Find a Mentor", section: "findMentor" },
  { name: "Mentorship Stories", section: "mentorshipStories" },
  { name: "Membership Plans", section: "membershipPlans" },
];

const Navbar = ({ onScrollToSection }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is beyond 100vh
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

  // Listen to scroll events to update active section
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2rem",
        }}
        aria-label="Global"
      >
        {/* Logo */}
        <div style={{ display: "flex" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#537786",
              }}
            >
              MentorMatch
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "3rem" }}>
          {navigation.map((item) =>
            item.section ? (
              <span
                key={item.name}
                onClick={() => onScrollToSection(item.section)}
                className={`nav-link ${
                  item.section === activeSection ? "active" : ""
                }`}
              >
                {item.name}
              </span>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  fontWeight: "600",
                  color: "#537786",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button
            variant="text"
            style={{ color: "#000", textTransform: "capitalize" }}
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
