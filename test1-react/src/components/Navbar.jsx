import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const [mode, setMode] = useState('light')

  const darkLight = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setMode("light")
    }
  }

  return (
    <>
      <div className='flex justify-between items-center bg-green-300 px-5 py-2 '>
        <NavLink className='font-bold' to='/home'>Home</NavLink>
        <NavLink className='font-bold' to='/movies'>Movies</NavLink>
         <button className='cursor-pointer font-bold' onClick={darkLight}>Theam</button>
        <NavLink className='font-bold' to='/watchlist'>WatchList</NavLink>
      </div>
    </>
  )
}

export default Navbar
