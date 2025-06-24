import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import  { useToggleTheam } from './ToggleTheam';
function Navbar() {

  const [mode, setMode] = useState('light')
  const navigate = useNavigate()
  const {theam , setTheam} = useToggleTheam()
 
 


  const darkLight = () => {
    if (theam === true) {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      setTheam(false)
    } else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setTheam(true)
    }
  }

  const logout = () => {
    navigate('/login')
    localStorage.removeItem("token")
  }

  return (
    <>
      <div className={`flex justify-between items-center px-5 py-3 ${theam === true ? "bg-green-300" : "bg-blue-500"}`}>
        <NavLink className='font-bold' to='/home'>Home</NavLink>
        <NavLink className='font-bold' to='/'>Movies</NavLink>
        <NavLink className='font-bold' to='/watchlist'>WatchList</NavLink>
        {/* <NavLink className='font-bold' to='/todo'>Todo</NavLink> */}
        <div className='flex gap-4'>
          {theam === true ? <button className='cursor-pointer font-bold' onClick={darkLight}><MdDarkMode className='text-3xl' /></button> :
            <button className='cursor-pointer font-bold' onClick={darkLight}><MdLightMode className='text-3xl' /></button>}
          <button className='cursor-pointer font-bold' onClick={logout}><MdLogout className='text-3xl' /></button>
        </div>
        
      </div>
    </>
  )
}

export default Navbar
