import React from 'react'
import ProductCart from './ProductCart'
import Navbar from './Navbar'
import { Link , Outlet } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <h1 className='text-2xl font-bold '>Mini Project</h1>
      <div className='flex justify-around mt-10'>
        <div>
          <h1 className='font-bold'>Hello User.</h1>
        </div>
        <div className='flex gap-10'>
          <Link to={'/home'} >Home</Link>
          <Link to={'/about'} >About</Link>
          <Link to={'/blog'} >Blog</Link>
          <Link to={'/checkout'} >Chekout</Link>
        </div>
      </div>
      
    </div>
  )
}
