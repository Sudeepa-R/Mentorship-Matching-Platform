import React from 'react'
import { SignIn, useUser } from "@clerk/clerk-react";

const Login = () => {
    const { user } = useUser()
    if (!user) {
        return <div style={{display:"flex", justifyContent:"center",alignItems:"center" , height:"100vh"}}>
            <SignIn forceRedirectUrl='/dashboard' routing='path' path='/login' />
        </div>
    }
    return <div>Welcome!</div>
}

export default Login