import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom';
import Protect from './component/Protect'
import Detilas from './component/Detilas'
import WatchList from './component/WatchList'


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
const [message,setMessage] = useState('')
  const ShowMessage=(msg)=>{
    setMessage(msg)
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }


  return (
  <>
   
 <Routes>
  
  <Route path='/' element={ <Home mode={mode} handleMode={handleMode}  ShowMessage={ShowMessage} message={message} setMessage={setMessage} /> } />
  <Route path='/watchlist' element={<Protect> <WatchList mode={mode} handleMode={handleMode}  ShowMessage={ShowMessage} message={message} setMessage={setMessage} /> </Protect>} />
  <Route path='/movie/:id' element={<Detilas handleMode={handleMode} mode={mode}/> }   />
  <Route path='/login' element={<Login mode={mode} handleMode={handleMode}  message={message} ShowMessage={ShowMessage} setMessage={setMessage} />}/>
 </Routes>
  </>
  )
}

export default App
