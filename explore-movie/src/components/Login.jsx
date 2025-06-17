import React, { useState } from "react";
// import { toast, Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters");
      return;
    }

    if (password.length <= 7) {
      toast.error("Password must be more than 7 characters");
      return;
    }

    
    localStorage.setItem("user", JSON.stringify({ username, password }));
    toast.success("Login successful!");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
