import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './constants/LoginPage/loginPage'
import Login from './constants/LoginPage/Example'
import ForgotPass from './constants/LoginPage/ForgotPass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
      {/* <ForgotPass/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
