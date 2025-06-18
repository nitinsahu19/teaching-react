import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";

function Header() {
  const [login, setLogin] = useState(localStorage.getItem("token"));
  const [darkTheme, setDarkTheme] = useState(true);

  // const []
  const navigate = useNavigate();
  useEffect(() => {}, [login]);
  return (
    <div className="p-5 flex justify-between bg-amber-100">
      <div className="text-4xl">Movies</div>
      <div className="flex gap-10 align-middle">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
            localStorage.setItem("darktheme",darkTheme)
          }}
          className="bg-gray-500 py-2 px-3 rounded text-white"
        >
          mod
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
