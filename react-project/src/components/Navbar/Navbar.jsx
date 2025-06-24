import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

 const Navbar = ()=>{
    return(
      <>
  <nav className="flex justify-between items-center p-3 bg-white-100 dark:bg-white-800 shadow-md ">
  <div className="flex items-center gap-4">
      <h1 className="text-xl font-bold text-white-900 dark:text-white">ReactNavbar</h1>
      <div className="flex gap-4 p-3">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500 ' : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 ' : '')}>Contact</NavLink>
        <NavLink to="/help" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Help</NavLink>
        <NavLink to="/SimpleTodo" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>SimpleTodo</NavLink>
        <NavLink to="/selector" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>selector</NavLink>
        <NavLink to="/weather" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>weather</NavLink>
        <NavLink to="/GithubUser" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Github User</NavLink>
        <NavLink to="/Calculator" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Calculator</NavLink>
        <NavLink to="/LoginPage" className={({ isActive }) => (isActive ? 'text-blue-500  ' : '')}>Multiple Form</NavLink>
      </div>
      </div>

      <div className="flex items-center gap-2">
      <form className="d-flex" role="search">
      <input className="form-control p-1 m-2" type="search" placeholder="Search" aria-label="Search"/> 
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Search</button>
      </form>
       
      </div>
  </nav>
  {/* <h1 className='text-center text-xl mt-2 font-bold underline decoration-wavy'>DashBoard</h1> */}
  <Outlet/>

  </>
    );
 };
 export default Navbar