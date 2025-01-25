import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LoginPage from "./LoginPage/loginPage";
import NotFound from "./not-found/not-found";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppLayout from '../dashboard/AppLayout/Layout'
import AppMenuItems from "../pages/AppMenuManagement";
import UserListData from "../pages/UsersList";
import ProfilePage from "../pages/Profile/Profile";



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
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/profile/:userName"
        element={<ProfilePage/>}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/home" element={<AppLayout/>} />
      <Route path="/AppMenuManagement" element={<AppMenuItems/>} />
      <Route path="/UserLists" element={<UserListData/>} />
    </Routes>
  );
};

export default RouterProvider;
