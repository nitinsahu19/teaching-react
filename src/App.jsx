import { useState } from 'react'
import {Routes , Route , NavLink } from 'react-router-dom'
import { lazy , Suspense } from 'react'
import './App.css'
const Movies = lazy(() => import('./components/Movies'));
import Login from './components/Login'
import Header from './components/Header'



function App() {
  const [login , setlogin] = useState(false)
  return (
    <>

   {login ?
   <>
   <Header/>
    <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/movies' element = {<Suspense fallback = {<div>Data is Loading ........................</div>}> <Movies/> </Suspense>}/>
      <Route path='/' element = {<Login/>}/>
    </Routes>
   </>
   
   :<Login setlogins = {setlogin}/>}
    
      
    </>
  )
}

export default App
