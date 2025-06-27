import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Watchlist from './components/Watchlist'
import Login from './components/Login'
import Details from './components/Details'
import ProtectedRoute from './components/ProtectedRoute'
import { WatchlistContextProvider } from './contexts/WatchlistContext'
import { useTheme } from './contexts/ThemeContext'
import GitHub from './components/GitHub'
import Notes from './components/Notes'
import Form from './components/Form'
import Form2 from './components/Form2'
import Weather from './components/Weather'
import Feedback from './components/Feedback'
import MoodDiaryApp from './components/MoodDiaryApp'

const Home = lazy(()=>import('./components/Home')) 


function App() {
  const {theme,setTheme}=useTheme();
  return (
    <div className={theme?'bg-gray-700 min-w-[100vh]':'bg-white'}>
      <WatchlistContextProvider>
      <Suspense fallback={<div className='text-4xl text-center my-10 '>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/watchlist' element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
            <Route path='/github' element={<GitHub/>}/>
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/form2' element={<Form2/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/diary' element={<MoodDiaryApp/>}/>
          </Routes>
      </Suspense>
      </WatchlistContextProvider>
     </div>
  )
}

export default App
