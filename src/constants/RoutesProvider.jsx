<<<<<<< HEAD
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import LoginPage from './LoginPage/loginPage';
import NotFound from './not-found/not-found';
import Profile from '../pages/Profile/Profile';
import { sampleUsers } from '../data';
import Login from './LoginPage/Login';
import Register from './Register/Register';

const RouterProvider = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile/:userId' element={<Profile users={sampleUsers} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
  }
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import LoginPage from "./LoginPage/loginPage";
import NotFound from "./not-found/not-found";
import Profile from "../pages/Profile/Profile";
import { sampleUsers } from "../data";

const RouterProvider = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/profile/:userId"
        element={<Profile users={sampleUsers} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
>>>>>>> 88da41470e182011382822378a29a7df5a1ea707

export default RouterProvider;
