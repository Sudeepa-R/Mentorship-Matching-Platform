import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LoginPage from "./LoginPage/loginPage";
import NotFound from "./not-found/not-found";
import Profile from "../pages/Profile/Profile";
import Sidebar from "../dashboard/sidebar/SideNavbar";

const RouterProvider = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
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
