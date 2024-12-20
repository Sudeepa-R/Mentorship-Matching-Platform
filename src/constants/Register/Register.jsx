import React from 'react'
import { SignUp, useUser } from "@clerk/clerk-react";
import "../LoginPage/Logingpage.scss";

const Register = () => {
    const { user } = useUser()
    if (user) {
        return ''
    }

    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#1a1b1ca8" }}>
        <SignUp forceRedirectUrl='/dashboard' routing='path' path='/register' />
    </div>

}

export default Register