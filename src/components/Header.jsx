import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-5 flex justify-between bg-amber-100'>
      <div className='text-4xl'>Movies</div>
      <div className='flex gap-10 align-middle'>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
      <div className='flex gap-10'>
        <button className='bg-gray-500 py-2 px-3 rounded text-white'>mod</button>
        <button className='bg-blue-500 py-2 px-3 rounded text-white'>Logout</button>
      </div>
    </div>
  )
}

export default Header
