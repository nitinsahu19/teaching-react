import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toastify from './Tostify'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [massage , setMessage] = useState(null)

  const handleLogin = () => {
    if (username !== '') {
      localStorage.setItem('token', 'mytoken')
      navigate('/home')
      setMessage(true)
    } else {
      alert("कृपया एक कार्य इनपुट करें और बाद में दोबारा प्रयास करें।")
      setMessage(false)
    }

  }
  return (
    <>
      {massage !== null &&<Toastify massage={massage}/>}
      <div className='w-150 h-100 p-10 bg-gray-500 ml-100 mt-50 rounded-2xl'>
        <h1 className="text-6xl font-extrabold text-blue-800 text-center">Login</h1>
        <div className='flex mt-20 justify-between gap-2'>

          <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-600 transition-all duration-300" />

        </div> 
        <div className='mt-10 flex justify-center w-full'>
          <button onClick={handleLogin} className=" p-10 bg-blue-600 text-white font-semibold py-3 rounded-2xl hover:bg-green-800 transition duration-300">Login</button>
        </div>
      </div>


    </>


  )
}

export default Login
