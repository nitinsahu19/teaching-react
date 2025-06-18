import React, { useState } from "react"; 

function Login() {
  const [name, setname] = useState("");
  const [pasword, setpassword] = useState(""); 
  const[Login , setLogin] = useState(true)

  function Submit(){
    if(name==="Rakesh" &&  pasword=="1234"){
setLogin(true)
    }
    else(
      alert("name and password incorrect")
    )
  }
  

  return (
    <> 

      <div className="flex justify-center items-center min-h-screen bg-white">
        <form 
          className="bg-indigo-600 shadow-2xl rounded-xl p-10 w-full max-w-md text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <div className="mb-5">
            <label className="block mb-1 font-medium">Username</label>
            <input
              className="border border-gray-300 rounded-md w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e)=>{setname(e.target.value)}}
              value={inpname}
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-1 font-medium">Password</label>
            <input
              className="border border-gray-300 rounded-md w-full p-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e)=>{setpassword(e.target.value)}}
              value={inppas}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button  
            className="bg-white text-indigo-700 font-semibold w-full py-2 rounded-md hover:bg-gray-200 transition-all"
          >
            Submit
          </button> 
        </form>
      </div>
    </>
  );
}

export default Login;
