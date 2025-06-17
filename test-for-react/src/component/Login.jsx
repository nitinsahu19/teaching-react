import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [name,setName] = useState('');
const [password,setPassword] = useState('')
const navigate = useNavigate();
const handleAuth = () =>{
    if(name==="" && password===""){
        alert('please enter value')
    }else{
        localStorage.setItem('token',true);
        setName('')
        setPassword('')
        navigate('/')

    }
}

const handlform =(event)=>{
    event.preventDefault()
}
  return (
    <div>
      <div className='flex justify-center items-center h-100 '>
        <form action="" onSubmit={handlform}>
            <div className='p-2'>
                <label htmlFor="101">Name</label><br/>
                <input className='border rounded p-1' value={name} onChange={(e)=>setName(e.target.value)} type="text" name="" id="101" placeholder='Enter your name' />
            </div>
            <div className='p-2'>
                <label htmlFor="101">Name</label><br/>
                <input className='border rounded p-1' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" id="101" placeholder='Enter your name' />
            </div>
            <div className='p-2'><button type='submit' onClick={handleAuth} className='bg-green-700 p-1 border rounded text-white'>Submit</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
