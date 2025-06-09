import React from 'react'
import { Outlet,Link } from 'react-router-dom' 

const Home=()=> {
  return (
    <>
    
    <div>
        <div className='text-center'> 
            <h1 className='text-cenetr bg-amber-800 m-3 text-4xl text-black'>Navbar</h1>
        </div>

        <Link to='cart'> <button className='border rounded bg-amber-900 text-amber-300 p-2'>cart</button></Link>
        <Link to='details'> <button className='border rounded bg-amber-900 text-amber-300 p-2'>details</button></Link>



    </div>
    
        <div>
            <Outlet/>
        </div>
   



    </>)
  
}

export default Home