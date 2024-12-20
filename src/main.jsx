<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClerkWithRouter } from './components/ClerkWithRouter.jsx'


createRoot(document.getElementById('root')).render(
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// Removed ThemeProvider import due to unresolved import error
createRoot(document.getElementById("root")).render(
>>>>>>> 88da41470e182011382822378a29a7df5a1ea707
  <StrictMode>
    <Router>
      <ClerkWithRouter />
    </Router>
  </StrictMode>
);
