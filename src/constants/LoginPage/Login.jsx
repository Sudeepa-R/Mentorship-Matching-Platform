import React from 'react'
import { SignIn, useUser } from "@clerk/clerk-react";
import "./Logingpage.scss";

const Login = () => {
    const { user } = useUser()

    if(user){
        return ''
    }

    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#1a1b1ca8" }}>
        <SignIn forceRedirectUrl='/dashboard' routing='path' path='/login' />
    </div>
}

export default Login