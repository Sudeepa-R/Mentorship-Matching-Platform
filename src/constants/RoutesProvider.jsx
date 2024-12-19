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

export default RouterProvider