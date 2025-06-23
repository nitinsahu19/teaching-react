import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Login({ setLogins }) {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { themes } = useContext(ThemeContext);

  const validation = () => {
    if (gmail === "jangidaryan58@gmail.com" && password === "12345") {
      alert("Login successful!");
      setLogins(true);
      localStorage.setItem("loggedIn", true);
      // navigate("/wishlist");
      // navigate("/header");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className={themes === "dark" ? 'bg-black text-white min-h-screen p-8' : 'bg-white text-black min-h-screen p-8'}>
      <div className="inner bg-black text-white p-20 rounded">
        <form onSubmit={(e) => e.preventDefault()}>
          <input value={gmail} onChange={(e) => setGmail(e.target.value)} className='border-2 p-2 pe-20 m-2 rounded placeholder:text-white bg-transparent' type="email" placeholder='Enter Email' /> <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 pe-20 p-2 m-2 rounded placeholder:text-white bg-transparent' type="password" placeholder='Enter Password' /> <br />
          <button onClick={validation} className='border-2 m-2 px-4 py-1 rounded'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
