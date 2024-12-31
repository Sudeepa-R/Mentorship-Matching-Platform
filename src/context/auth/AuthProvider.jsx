import React, { useState } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const baseURL = 'https://prod-mmp.vercel.app'

    const Login = async (data) => {
        try {
            const response = await axios.post(`${baseURL}/api/auth/login`, {
                email: data.emailOrUsername,
                userName: data.emailOrUsername,
                password: data.password
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(response.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.message);
        }
    }

    const getUser = async (userName) => {
        if (user && user.userName === userName) {
            return;
        }
        try {
            const response = await axios.get(`${baseURL}/api/auth/user/${userName}`);
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