import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductCart from './Components/ProductCart';
import Header from './Components/Header';
import { useEffect } from 'react';
import About from './Components/About';
import Blog from './Components/Blog';
import Checkout from './Components/Checkout';
import Home from './Components/Home';

function App() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate()


  // useEffect(()=>{
  //   if (login===true) {
  //     navigate('/home')
  //   }else navigate('/login')
  // },[login])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
        <Route path='/' element={<Header />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/checkout' element={<Checkout />} />
        
      </Routes>

    </>
  )
}

export default App

