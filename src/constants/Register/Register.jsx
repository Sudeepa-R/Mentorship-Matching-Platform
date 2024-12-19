import React from 'react'
import { SignUp, useUser } from "@clerk/clerk-react";

const Register = () => {
    const { user } = useUser()
    if (!user) {
        return <div style={{display:"flex", justifyContent:"center",alignItems:"center" , height:"100vh"}}>
            <SignUp forceRedirectUrl='/dashboard' routing='path' path='/register' />
        </div>
    }
    return <div>Welcome!</div>
}

export default Register