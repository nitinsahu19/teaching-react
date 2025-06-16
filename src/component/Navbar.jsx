import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import logo from '../image/logo.png';

const Navbar = () => {
    return (
        <> 
            <div className='bg-amber-500 flex justify-between'>
                <img className='w-20 ' src={logo} alt="" /> 
                <h1 className='font-bold text-2xl italic flex justify-center cursor-pointer mt-5'>Hello </h1>
                {/* <Link to='cart'><p className='text-2xl font-bold cursor-pointer mt-5'>Home</p></Link>
                <Link to='header'><p className='text-2xl font-bold cursor-pointer mt-5'>TodoList</p></Link>
                <Link to='data'><p className='text-2xl font-bold cursor-pointer mt-5'>ApisData</p></Link> */}

                <NavLink className={({isActive}) => isActive ? 'text-red-500 bg-amber-500 text-2xl mt-5 font-bold' : 'text-2xl font-bold mt-5'} to='cart'>Cart</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-red-500 bg-amber-500 text-2xl mt-5 font-bold' : 'text-2xl font-bold mt-5'} to='header'>Header</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-red-500 bg-amber-500 text-2xl mt-5 font-bold' : 'text-2xl font-bold mt-5'} to='data'>Data</NavLink>
            </div>

            <div className='flex gap-20 justify-center mt-10'>
            </div>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar
