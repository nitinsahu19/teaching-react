import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  const [login, setLogin] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();
  useEffect(() => {}, [login]);
  return (
    <div className={"p-5 flex justify-between text-gray-500 bg-amber-100"}>
      <div className="text-4xl font-bold">Movies</div>
      <div className="flex gap-10 align-middle pt-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
          to="/watchlist"
        >
          Watchlist
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          GitHub
        </NavLink>
        <NavLink
          to="/weather"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Weather
        </NavLink>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Notes
        </NavLink>
        {/* <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Form
        </NavLink> */}
        <NavLink
          to="/form2"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Form2
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Feedback
        </NavLink>
        <NavLink
          to="/diary"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 font-bold"
              : "hover:text-blue-500 font-bold"
          }
        >
          Diary
        </NavLink>
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => setTheme(!theme)}
          className="bg-blue-500 py-2 px-3 rounded text-white"
        >
          {theme ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setLogin(localStorage.getItem("token"));
          }}
          className={
            login ? "bg-blue-500 py-2 px-3 rounded text-white" : "hidden"
          }
        >
          Logout
        </button>
        <button
          onClick={() => {
            navigate("/login");
            setLogin(localStorage.getItem("token"));
          }}
          className={
            !login ? "bg-blue-500 py-2 px-3 rounded text-white" : "hidden"
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
