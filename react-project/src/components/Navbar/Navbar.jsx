import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
        <div className=" mx-auto flex items-center justify-between">
         
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">ReactNavbar</h1>
          </div>

          
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {isOpen ? <X className="text-black dark:text-white" /> : <Menu className="text-black dark:text-white" />}
            </button>
          </div>

          
          <div className={`flex-col lg:flex-row lg:flex gap-4 absolute lg:static top-16 left-0 right-0 bg-white dark:bg-gray-800 p-4 ${isOpen ? 'flex' : 'hidden'}`}>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Home</NavLink>
            <NavLink to="/SimpleTodo" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>SimpleTodo</NavLink>
            <NavLink to="/selector" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Selector</NavLink>
            <NavLink to="/weather" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Weather</NavLink>
            <NavLink to="/GithubUser" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Github User</NavLink>
            <NavLink to="/Calculator" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Calculator</NavLink>
            <NavLink to="/LoginPage" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 dark:text-white'}>Multiple Form</NavLink>
          </div>

          
          <div className="hidden lg:flex items-center gap-2">
            <form className="flex" role="search">
              <input className="form-control p-1 m-2 border rounded" type="search" placeholder="Search" />
              <button className="w-25  bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
{/* <h1 className='text-center text-xl underline decoration-wavy text-white'>Dashboard</h1> */}
      <Outlet />
    </>
  );
};

export default Navbar;
