import {  NavLink  } from 'react-router-dom'
import { CiDark } from "react-icons/ci";
import {  MdSunny } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [mode,setMode] = useState('light')
   const colorMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light")
    }
  }

   const logOut = () => {
    localStorage.removeItem("login");

  }

  const token  = localStorage.getItem("login")
  return (
    <>
    <div className={`sticky top-0  z-50 ${mode==='light'?'bg-white':'bg-black'}`}>
      <nav className='flex  justify-between p-2 items-center'>
        <div>
          <img className='w-16 h-16 rounded-full' src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" alt="" />
        </div>
        <ul className='flex flex-wrap gap-10'>
          <li><NavLink  to="/" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            Home </NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'} >
            About </NavLink></li>
        
          <li ><NavLink to="/multifrom" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            MultiFrom </NavLink></li>
          <li ><NavLink to="/weather" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            Weather</NavLink></li>
          <li ><NavLink to="/todo" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            TodoList</NavLink></li>
          <li ><NavLink to="/feedback" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            FeedBack</NavLink></li>
          <li ><NavLink to="/moodDiary" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            MoodDiary</NavLink></li>
          <li ><NavLink to="/useform" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            UseForm</NavLink></li>
          <li ><NavLink to="/counter" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            Counter</NavLink></li>
          <li ><NavLink to="/fakestore" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':'hover:underline cursor-pointer hover:text-blue-600 font-semibold'}>
            FakeStoreApi</NavLink></li>
        </ul>
        <div>
          {mode === "light" ? <button onClick={colorMode} className='text-2xl text-black pe-2 cursor-pointer'><CiDark /></button> :
            <button onClick={colorMode} className='text-2xl text-white pe-2 cursor-pointer'><MdSunny /></button>}
        </div>
        <div>
          {token && <button onClick={logOut} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer'>Log-out</button>}
        </div>
      </nav>  
    </div>
   
    </>
  )
}

export default Navbar
