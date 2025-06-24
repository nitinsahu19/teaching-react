import { useEffect, useState } from 'react'
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
import Toastify from './components/Toastify'
// import Todo from './components/Todo'

function App() {
  const [isLogin, setIslogin] = useState(false)




  return (
    <>
      <Routes>
        <Route path='/login' element={<Login isLogin={isLogin} setIslogin={setIslogin} />} /> 
        <Route path='/' element={ <Movies />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/watchlist' element={<ProtectedRoute><WatchList  /></ProtectedRoute>} />
        {/* <Route path='/todo' element={<ProtectedRoute><Todo  /></ProtectedRoute>} /> */}
      </Routes>
      
      {/* <Movies /> */}
      {/* <Toastify /> */}
    </>
  )
}

export default App
