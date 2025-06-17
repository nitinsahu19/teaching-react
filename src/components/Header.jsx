import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='flex justify-between bg-black text-white ps-2 p-2'>
    <NavLink to={"movies"}>Movies</NavLink>
    <NavLink to={"wishlist"}>wishlist</NavLink>
    </div>
    </>
  )
}

export default Header