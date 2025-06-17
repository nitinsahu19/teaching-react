import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import Login from './components/Login'
import Details from './components/Details'
import ProtectedRoute from './components/ProtectedRoute'

const Home = lazy(()=>import('./components/Home')) 

function App() {
  return (
    <>
      <Suspense fallback={<div className='text-4xl text-center my-10 '>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/watchlist' element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
      </Suspense>
    </>
  )
}

export default App
