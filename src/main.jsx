import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkWithRouter } from "./components/ClerkWithRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ClerkWithRouter />
    </Router>
  </StrictMode>
);
