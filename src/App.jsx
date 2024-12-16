import './App.css'
import Home from './constants/home/Home'
import LoginPage from './constants/LoginPage/loginPage'
import NotFound from './constants/not-found/not-found'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

  )
}

export default App
