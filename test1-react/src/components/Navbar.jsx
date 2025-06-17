import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex justify-between items-center bg-green-300 px-5 py-2'>
        <NavLink className='font-bold' to='/movies'>Movies</NavLink>
        <NavLink className='font-bold' to='/home'>Home</NavLink>
        <NavLink className='font-bold' to='/link'>Link</NavLink>
        <NavLink className='font-bold' to='/watchlist'>WatchList</NavLink>
      </div>
    </>
  )
}

export default Navbar
