import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const Movies = lazy(() => import('./components/Movies'))
import Login from './components/Login'
import Header from './components/Header'
import Wishlist from './components/Wishlist'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      {login}
      <Header/>
      <Routes>
        <Route path='/login' element={<Login setLogins={setLogin} />} />
        <Route path='/movies' element={<Suspense fallback={<div>Loading movies...</div>}><Movies /></Suspense>}/>
        <Route path='/' element={<Navigate to='/movies' />} />
        <Route path='/wishlist' element={login ? <Wishlist /> : <Navigate to='/login' replace />}/>
      </Routes>
    </>
  )
}

export default App
