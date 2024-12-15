import './App.css'
import Home from './constants/home/Home'
import LoginPage from './constants/LoginPage/loginPage'
import NotFound from './constants/not-found/not-found' // Importing NotFound component
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>

      {/* <ForgotPass/> */}
      {/* <Login/> */}
    </BrowserRouter>

  )
}

export default App
