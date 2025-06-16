import React, { useState } from "react";
import { saveUser, getUser, clearUser } from "../components/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username && !password) {
      toast.error("Please fill in both username and password.");
      return;
    } else if (username.length < 2) {
      toast.error("Username must be at least 2 characters.");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    
    saveUser(username, password);
    setUser({ username, password });  
    toast.success("Login successful!");
    navigate("/");  // Redirect to Home page
  };

  const handleLogout = () => {
    clearUser();
    setUser(null);  
    toast.info("Logged out!");
    navigate("/login");  // Redirect to login page
  };

  const user = getUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        )}

        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default Login;
