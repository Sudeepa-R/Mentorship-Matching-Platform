import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import LoginPage from './LoginPage/loginPage';
import NotFound from './not-found/not-found';

const RouterProvider = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
  }

export default RouterProvider