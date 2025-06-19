import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className={`w-full sticky top-0 z-40 ${props.mode==='light'?'bg-white':'bg-black'}`}>
       <div className='flex justify-between p-3'>
        <p className='font-medium text-lg'>Movies</p>
        <NavLink  className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/' >Home</NavLink>
        <NavLink className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/watchlist' >WatchList</NavLink>
        <NavLink className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/login' >Login</NavLink>
        {props.mode==='light'?<p className='font-medium text-2xl' onClick={()=>props.handleMode()}><IoIosMoon /></p>:
        <p className='font-medium text-2xl' onClick={()=>props.handleMode()}><IoIosSunny /></p>}
      </div>
    </div>
  )
}

export default Navbar
