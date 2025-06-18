import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

 const Navbar = ()=>{
    return(
      <>
  <nav className="flex justify-between items-center p-3 bg-white-100 dark:bg-white-800 shadow-md ">
  <div className="flex items-center gap-4">
      <h1 className="text-xl font-bold text-white-900 dark:text-dark">ReactNavbar</h1>
      <div className="flex gap-4 p-3">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500 ' : '')}>About</NavLink>
        <NavLink to="/movie" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Movie</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Login</NavLink>
        
      </div>
      </div>

    
  </nav>
  

  <Outlet/>

  </>
    );
 };
 export default Navbar