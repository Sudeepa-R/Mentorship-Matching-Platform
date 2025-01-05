import React, { useContext } from 'react'
import {
    GoogleCircleFilled
} from "@ant-design/icons";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { showMessage } from '../Toaster/toaster';
import "./Logingpage.scss";
import { googleAuth } from '../../api/API';
import AuthContext from '../../context/auth/AuthContext';

const GoogleLogin = ({ setLoading }) => {
    const navigate = useNavigate()

    const {setUser} = useContext(AuthContext)

    const responseGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
                setLoading(true)
                localStorage.removeItem('token'); 
                const result = await googleAuth(authResult['code'])
                const { email, name, image } = result.user
                setUser(result.user)
                const token = result.token

                localStorage.setItem('token', token)
                showMessage('success', 'Logedin Successfully.')
                navigate('/dashboard')
            }

        } catch (error) {
            console.log("error while login with Google", error)
        } finally {
            setLoading(false)
        }

    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code"
    })

    return (
        <GoogleCircleFilled className="socialApps google" onClick={googleLogin} />
    )
}

export default GoogleLogin