<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// Removed ThemeProvider import due to unresolved import error
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
=======
>>>>>>> be8bcddf2e6a08e445d8894e8cfad51e26efb244
