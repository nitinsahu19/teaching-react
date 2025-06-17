import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const loginhandlar = () => {
    localStorage.setItem("token", true);
    <Navigate to='/login'/>
  }
  return (

    <div>
      <div className='m-auto my-100'>
        <div className='p-5'>
          <input onChange={() => loginhandlar()} type="text" />
        </div>
      </div>
    </div>
  )
}

export default Login