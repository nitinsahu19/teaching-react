import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Movies from './components/Movies'
import { Routes, Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [isLogin, setIslogin] = useState(false)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login isLogin={isLogin} setIslogin={setIslogin} />} /> 
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path='/watchlist' element={<ProtectedRoute><WatchList /></ProtectedRoute>} />
      </Routes>
      {/* <Movies /> */}
      
    </>
  )
}

export default App
