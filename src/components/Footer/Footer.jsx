import React, { useContext } from "react";
import "./Footer.scss";
import ThemeContext from "../../context/theme/ThemeContext";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="footer" id="contactUs" style={{
      backgroundColor: isDark ? "#333" : "#fff",
      color: isDark ? "#fff" : "#000",
    }}>
      <div className="app_name">
        <h1>MentorMatch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          ipsa voluptates eveniet qui.
        </p>
      </div>
      <div className="About_us">
        <h3>About us</h3>
        <ul>
          <li>Story</li>
          <li>Clients</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="Services">
        <h3>Services</h3>
        <ul>
          <li>Development</li>
          <li>Design</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div className="Contact_us">
        <h3>Contact us</h3>
        <p>Email: Info@example.com</p>
        <p>Phone: +91 7386789947</p>
        <p>Address: Your address 123</p>
      </div>
      <hr />
      <div className="footer_bottom" style={{
      backgroundColor: isDark ? "#333" : "#fff",
      color: isDark ? "#fff" : "#000",
    }}>
        <p>
          <span>&copy; 2024</span> Your Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
