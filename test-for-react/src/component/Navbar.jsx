import React from 'react'
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ContextApi';

const Navbar = (props) => {
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
  return (
    <div className={`w-full sticky top-0 z-40 ${theme==='light'?'bg-white':'bg-black'}`}>
       <div className='flex justify-between p-3'>
        <p className='font-medium text-lg'>Movies</p>
        <NavLink  className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/' >Home</NavLink>
        <NavLink className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/watchlist' >WatchList</NavLink>
        <NavLink className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/todo' >TodoList</NavLink>
        <NavLink className={({isActive})=>isActive?'text-blue-500 font-medium text-lg border-b-2':"font-medium text-lg"} to='/login' >Login</NavLink>
        {theme==='light'?<p className='font-medium text-2xl' onClick={handleMode}><IoIosMoon /></p>:
        <p className='font-medium text-2xl' onClick={handleMode}><IoIosSunny /></p>}
      </div>
    </div>
  )
}

export default Navbar
