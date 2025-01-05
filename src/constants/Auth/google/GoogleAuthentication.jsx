import React from 'react'
import {
    GoogleCircleFilled
} from "@ant-design/icons";
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from '../../../api/API';
import { useNavigate } from 'react-router-dom';
import { showMessage } from '../../Toaster/toaster';
import "../../LoginPage/Logingpage.scss";

const GoogleAuthentication = ({ setLoading }) => {
    const navigate = useNavigate()

    const responseGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
                setLoading(true)
                const result = await googleAuth(authResult['code'])
                setLoading(false)
                const { email, name, image } = result.user
                const token = result.token

                localStorage.setItem('token', token)
                showMessage('success', 'Logedin Successfully.')
                navigate('/dashboard')
            }

        } catch (error) {
            console.log("error while login with Google", error)
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

export default GoogleAuthentication