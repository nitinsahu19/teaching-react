import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import Login from './components/Login'
import Details from './components/Details'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(()=>import('./components/Home')) 

function App() {
  const [darkTheme,setDarkTheme]=useState(localStorage.getItem('darktheme'))
  useEffect(()=>{

  },[darkTheme  ])
  return (
    <div className={darkTheme?'bg-gray-700':'bg-white'}>
      <Suspense fallback={<div className='text-4xl text-center my-10 '>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/watchlist' element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
      </Suspense>
    </div>
  )
}

export default App
