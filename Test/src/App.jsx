import { useState } from 'react'
import './App.css'
import Movies from './MoviesFol/Movies'
import LoginForm from './MoviesFol/Loginform'
import { Route,Routes } from 'react-router-dom'
import Learn from './PrectiseFol/Learn'
import Prectise from './PrectiseFol/Prectise'
import ProtectedRoute from './MoviesFol/ProtectedRoute'
import MoodDiaryApp from './GoogleFormtest/MoodDiaryApp'

function App() {
 

  return (
     <>
    {/* <Routes>
      <Route path="/login" element={}/>
       <Route path="/home" element={}/> 
    
    </Routes> */}
    {/* <LoginForm/> */}
     {/* <Movies/>  */}
   

    {/* <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/movie' element={<ProtectedRoute><Movies/></ProtectedRoute>} />


       
    </Routes> */}
    <MoodDiaryApp/>

    



    
    


     
    </>
  )
}

export default App
