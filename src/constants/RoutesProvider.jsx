import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LoginPage from "./LoginPage/loginPage";
import NotFound from "./not-found/not-found";
import Profile from "../pages/Profile/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Sidebar from "../dashboard/sidebar/SideNavbar";


const GoogleAuthLogin = () =>{
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <LoginPage />
    </GoogleOAuthProvider>
  )
}
const RouterProvider = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<GoogleAuthLogin />} />
      <Route
        path="/profile/:userName"
        element={<Profile/>}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/home" element={<Sidebar/>} />
    </Routes>
  );
};

export default RouterProvider;
