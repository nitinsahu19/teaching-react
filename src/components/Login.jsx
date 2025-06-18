import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [username , setUsername] = useState('')
const Naviget = useNavigate()

const handliLogin = () => {
    if(username !== ""){
    Naviget('/home')
    localStorage.setItem('token' , 'mytoken')
    }else{
        alert("Please Enter Your Path !")
    }
}

    return (
        <>
            <div className='border w-80 p-10 mt-10 ml-10 h-80'>
                <input className='border w-40 h-10 rounded-2xl p-2' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter The Page' />
                <input className='border w-40 h-10 rounded-2xl p-2 mt-3' type="password" placeholder='Enter The password' />
                <button onClick={handliLogin} className='bg-amber-300 w-25 h-10 rounded-2xl mt-10 cursor-pointer'>Click me</button>
            </div>
        </>
    )
}

export default Login
