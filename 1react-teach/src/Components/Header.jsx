import React, { useState } from 'react'
import ProductCart from './ProductCart'
import Navbar from './Navbar'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Home from './Home'
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart'
export default function Header(props) {
  const [mode, setMode] = useState("black");

  const color = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("dark")
    }
    else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("light");
    }
  }


  return (
    <div>
      <h1 className='text-2xl font-bold '>Mini Project</h1>
      <div className='flex justify-around mt-10'>
        <div>
          <h1 className='font-bold'>Hello User.</h1>
        </div>
        <div className='flex gap-10'>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/' >Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/about' >About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to='/blog' >Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600" : " "} to='/weather' >Weather</NavLink>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='me-10'>
              {mode === "light" ? <button onClick={color}><MdLightMode className='text-2xl cursor-pointer' /></button> : <button><MdDarkMode className='text-2xl cursor-pointer' onClick={color} /></button>}
            </div>
            <div className='flex'>
              <button onClick={() => setCartOpen((prev) => !prev)} className='cursor-pointer'><FaShoppingCart className='text-2xl' /></button>
              {props.addCartItem > 0 && <span className='bg-blue-700 h-5 w-5 pt-0.5 rounded-full'><sup className='font-bold'>{addCartItem.length}</sup></span>}
            </div>
            <div className='ms-8 mt-2'>
              <button className='cursor-pointer' onClick={props.logout}> <MdLogout className='text-2xl font-bold' /></button>
            </div>

          </div>
        </div>
      </div>
      {/* <Home /> */}
      {/* <Cart add={props.addCartItem} setadd={props.setAddCartItem} mode={mode} setmode={setMode} /> */}

    </div>
  )
}
