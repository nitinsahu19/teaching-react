import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../image/logos.png';

const Navbar = () => {
    return (
        <> 
            <div className='bg-pink-500 flex justify-between'>
                <img className='w-20 ' src={logo} alt="" /> 
                <h1 className='font-bold text-2xl italic flex justify-center cursor-pointer mt-5'>Navbar </h1>
                <Link to='cart'><p className='text-2xl font-bold cursor-pointer mt-5'>Home</p></Link>
                <Link to='header'><p className='text-2xl font-bold cursor-pointer mt-5'>TodoList</p></Link>
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
