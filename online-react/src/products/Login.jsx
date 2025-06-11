import { useState } from "react";
import Products from "./Products";
import Customtoast from "./Customtoast";
import { useNavigate } from 'react-router-dom';




function Login({ setIsLogins }) {
  const [Login, islogin] = useState(false);
  const [userName, setusername] = useState("");
  const [userPassword, setpassword] = useState("");
  const [theme, setTheme] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate(); 





  const handlesubmit = (e) => {
    e.preventDefault();
    if (userName === "sanjay" && userPassword === "12345") {
      setToastMessage("login success");
      navigate('/products');
      setIsLogins(!false)

      setTimeout(() => {
        islogin(true);
        setToastMessage()
      }, 1000);
    }
    else {
      setToastMessage("unsuccess");
      setTimeout(() => {
        setToastMessage(false);
      // onload.navigate("/login")
      }, 2000)

    }
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return Login ? (
    <> <Products />  {toastMessage && <Customtoast message={toastMessage} />} </>) : (
    <>
      <div
        className={`min-h-screen flex items-center justify-center ${theme ? "bg-gradient-to-br from-black" : "bg-amber-50 text-black"}`}>
        <button onClick={toggleTheme} className={`absolute right-2 top-2 rounded border-2 p-2 ${theme ? "text-white" : "text-black"}`}>
          {theme ? "Light Mode 🔆" : "Dark Mode 🌙"}
        </button>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 w-full max-w-sm text-white">
          <h2 className={`text-2xl font-bold mb-6 text-center ${theme ? "text-white" : "text-black"}`}>Welcome Back 👋
          </h2>
          <form onSubmit={handlesubmit} className={`space-y-5 ${theme ? "text-white" : "text-black"}`}>
            <div>
              <label htmlFor="username" className="block mb-1 text-sm font-semibold">Username</label>
              <input type="text" id="username" placeholder="Enter your name" value={userName} onChange={(e) => setusername(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg bg-white/20 ${theme ? "text-white border-2" : "text-black border-2 placeholder:text-black"
                  } placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400`}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-semibold">Password</label>
              <input type="password" id="password" placeholder="••••••••" value={userPassword} onChange={(e) => setpassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white ${theme ? "text-white border-2" : "text-black border-2 placeholder:text-black"} focus:outline-none focus:ring-2 focus:ring-pink-400`} required />
            </div>

            <button type="submit" className="w-full bg-gradient-to-br from-black via-gray-800 to-gray-900 hover:from-navy-600 hover:to-sky-600 text-white py-2 rounded-lg font-semibold transition-all duration-300">🚀 Login </button>
          </form>
        </div>
      </div>

      {toastMessage && <Customtoast message={toastMessage} />}
    </>
  );
}

export default Login;
