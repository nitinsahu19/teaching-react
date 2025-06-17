import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {
    const [name, setName]=useState();
    const [pass, setPass]=useState();

    const loginHandler=()=>{
        if(name=="akash"&&pass==1234){
            localStorage.setItem("token",true);
            <Navigate to="/"/>
        }
    }

  return (
    <div className='m-auto my-100'>
      <div className="p-5">
        <div><input onChange={(e)=>setName(e.target.value)} type="text" /></div>
        <div className='my-4'><input onChange={(e)=>setPass(e.target.value)} type="text" /></div>
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  )
}

export default Login
