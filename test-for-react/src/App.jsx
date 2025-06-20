import { useContext, useState } from 'react'
import './App.css'
import Home from './component/Home'
// import Navbar from './component/Navbar'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom';
import Protect from './component/Protect'
import Detilas from './component/Detilas'
import WatchList from './component/WatchList'
import  { useTheme } from './ContextApi';



function App() {
const {theme, setTheme} = useTheme()
  const handleMode = () =>{
    if(theme==='light'){
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      setTheme('dark')
    }else{
       document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setTheme('light')
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
  
  <Route path='/' element={ <Home   ShowMessage={ShowMessage} message={message} setMessage={setMessage} /> } />
  <Route path='/watchlist' element={<Protect> <WatchList   ShowMessage={ShowMessage} message={message} setMessage={setMessage} /> </Protect>} />
  <Route path='/movie/:id' element={<Detilas /> }   />
  <Route path='/login' element={<Login   message={message} ShowMessage={ShowMessage} setMessage={setMessage} />}/>
 </Routes>
  </>
  )
}

export default App
