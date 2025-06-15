import React from 'react'
import { Link, Outlet } from 'react-router';
// import { ShoppingCart } from 'lucide-react';
 const Navbar = ()=>{
    return(
        <>
<nav className="flex justify-between items-center p-3 bg-white-100 dark:bg-white-800 shadow-md ">
<div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white-900 dark:text-white">ReactNavbar</h1>
        <div className="flex gap-4 p-3">
          <Link to="/" className="hover:text-blue-500 text-gray-900 dark:text-white">Home</Link>
          <Link to="/about" className="hover:text-blue-500 text-gray-900 dark:text-white">About</Link>
          <Link to="/contact" className="hover:text-blue-500 text-gray-900 dark:text-white">Contact</Link>
          <Link to="/help" className="hover:text-blue-500 text-gray-900 dark:text-white">Help</Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <form class="d-flex" role="search">
        <input className="form-control p-1 m-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className=" px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Search</button>
      </form>
        {/* <div className="relative cursor-pointer" >
          <ShoppingCart className="hover:text-blue-500 text-gray-900 dark:text-white" />
        </div> */}
      </div>
</nav>
<h1 className='text-center text-xl mt-2 font-bold'>DashBoard</h1>
<Outlet/>

</>
    );
 };
 export default Navbar