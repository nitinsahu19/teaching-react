import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <> 
            <div className='bg-pink-500 p-2 flex justify-between'>
                <h1 className='text-4xl font-bold italic'>Logo</h1>
                <h1 className='font-bold text-2xl italic flex justify-center cursor-pointer'>Navbar </h1>
                <Link to='cart'><p className='text-2xl font-bold cursor-pointer'>Home</p></Link>
                <Link to='header'><p className='text-2xl font-bold cursor-pointer'>TodoList</p></Link>
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
