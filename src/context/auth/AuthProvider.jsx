import React, { useState } from 'react'
import AuthContext from './AuthContext';
import { get, post } from '../../api/API';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const Login = async (data) => {
        return await post(`/api/auth/login`, data);
    }

    const getUser = async (data) => {
       return await get(`/api/auth/user/${data}`)
    };

    return (
        <AuthContext.Provider value={{ user, Login , getUser , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider