import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-amber-100 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Logo
        </div>
        <nav className="flex gap-6 text-base sm:text-lg font-semibold">
          <NavLink to="/notes">notes</NavLink>
          <NavLink to="/github">GitHub</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/formm">Form3</NavLink>
          <NavLink to="/weather">Weather</NavLink>
<NavLink to="/feedback">Feedback</NavLink>    
<NavLink to="/loginform">Loginform</NavLink>  
<NavLink to="/MoodDiary">MoodDiary</NavLink>  

        </nav>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
