import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom';
import Protect from './component/Protect'
function App() {

  const [mode,setMode] = useState('light');
  const handleMode = () =>{
    if(mode==='light'){
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      setMode('dark')
    }else{
       document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setMode('light')
    }
  }

  return (
  <>
  
 <Navbar handleMode={handleMode} mode={mode} />
 <Routes>
  
  <Route path='/' element={<Protect> <Home mode={mode}  /> </Protect>} />

  <Route path='login' element={<Login mode={mode}  />}/>
 </Routes>
  </>
  )
}

export default App
