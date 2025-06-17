import { useState } from 'preact/hooks'
// import './app.css'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import ProtectedRoute from './component/ProtectedRoute'
import Watchlist from './component/Watchlist'
const Home =lazy(()=>import("./component/Home"))
const Login = lazy(()=>import("./component/Login"))
export function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <>
    <Suspense fallback={<div className='text-4xl '>Loding...</div>}>
    <Header/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/' element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
      
    </Routes>
    </Suspense>
    
    </>
  )
}
