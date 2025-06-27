import React from 'react'
import { NavLink, useNavigate,Link, Outlet } from 'react-router-dom'
import Prectise from './Prectise'

function Learn() {
    const Nagvigate=useNavigate()
    const handelsubmit=()=>{
        Nagvigate('/Prectise/22')
    }
  return (
    <>
    <h1 className='text-center text-2xl'>Enter submit button to go prectise page</h1>
   <Link to='Prectise'> <button onClick={handelsubmit} className='p-2 bg-black text-white m-2 border rounded text-center'> submit</button></Link>



   <div>
    <Outlet/>
   </div>

    
    </>
  )
}

export default Learn