import React, { useContext } from 'react'
import { Outlet,Link, NavLink } from 'react-router-dom' 
import NameContext from './NameContext'



const Home=()=> {
    const {names,setNames}=useContext(NameContext)
  return (
    <>
    
    <div>
        <h1>{names}</h1>

        <div className='text-center'> 
            <h1 className='text-cenetr bg-amber-800 m-3 text-4xl text-black'>Navbar</h1>
        </div>





        <NavLink to='cart' className={({isActive})=>(isActive?'text-red-700 bg-amber-300':"")}><button className='border'> cart</button></NavLink>
        
        <NavLink to='details' className={({isActive})=>(isActive?'text-red-700 bg-amber-300':"")}><button className='border'>details</button></NavLink>



    </div>
    
        <div>
            <Outlet/>
        </div>  



    </>)
  
}

export default Home





