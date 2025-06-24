import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbarr() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Project</h1>

      <div className="flex justify-center mt-4  ">
        <div className="bg-amber-200 flex gap-8  p-7 w-100 rounded-lg font-serif">
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""}to="/home"><p>Home</p></NavLink>
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""}to="/contact"><p>Contact</p></NavLink>
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""}to="/about"><p>About</p></NavLink>
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""} to="/Weather"><p>Weather</p></NavLink>
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""}to="/ApiFetch"><p>ApiFetch</p></NavLink>
          <NavLink className={({ isActive }) =>isActive ? "text-red-500 font-bold" : ""}to="/Todolist"><p>Todolist</p></NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbarr;
