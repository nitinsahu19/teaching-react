import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Movies from './components/Movies'
import { Routes, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'

function App() {
  const [isLogin, setIslogin] = useState(false)

  return (
    <>
      
      {/* <Navbar /> */}
      {/* <Router>
        <Routes to='/' element={<Login />} /> 
        <Routes to='/home' element={<Home />} />
        <Routes to='/watchlist' element={<WatchList />} />
      </Router> */}
      {/* <Movies /> */}
      <Login isLogin={isLogin} setIslogin={setIslogin} />
    </>
  )
}

export default App
