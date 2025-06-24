import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Toast from './Toast';

function Login() {
    const [name, setName]=useState();
    const [pass, setPass]=useState(); 
    const [message,setMessage]=useState();

    const navigate =useNavigate();

    const loginHandler=(e)=>{
      e.preventDefault()
      setName("");
      setPass("");
        if(name=="akash"&&pass==1234){
            localStorage.setItem("token",true);
            navigate("/");
            setMessage('Login succssesfuly')
            setTimeout(()=>{
              setMessage('')
            },3000)
        }
    }

  return (
    <div className='flex h-screen align-middle'>
      {
        message?<Toast color='text-white font-bold' bgcolor='bg-green-600' message={message}/>:''
      }
    <div className='m-auto rounded-xl shadow-lg shadow-gray-600 w-100 bg-gray-200'>
      <div className="p-10">
        <div><input className='py-1 px-2 w-1/1 rounded bg-white' onChange={(e)=>setName(e.target.value)} type="text" /></div>
        <div className='my-4'><input className='py-1 px-2 w-1/1 rounded bg-white' onChange={(e)=>setPass(e.target.value)} type="password" /></div>
        <button className='bg-blue-400 py-1 px-3 text-white rounded' onClick={(e)=>loginHandler(e)}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Login
