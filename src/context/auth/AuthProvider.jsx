import React, { useState } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';
import { showMessage } from '../../constants/Toaster/toaster';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const baseURL = 'http://localhost:3000'

    const Login = async (data) => {
        try {
            const response = await axios.post(`${baseURL}/api/auth/login`, {
                email: data.email,
                password: data.password
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(response.message || "Login failed");
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                showMessage("error", "API endpoint not found. Please check the server configuration.");
            } else {
                showMessage("error", "Invalid username or password!");
            }
            console.error("Login error:", error.message);
        }
    }

    const getUser = async (id) => {
        if (user && user._id === id) {
            return;
        }
        try {
            const response = await axios.get(`${baseURL}/api/auth/user/${id}`);
            if (response.status === 200) {
                return response.data
            }
        } catch (error) {
            console.error("Get user error:", error.message);
        }
    };
    return (
        <AuthContext.Provider value={{ user, Login , getUser , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider