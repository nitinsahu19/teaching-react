import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='p- flex  gap-5'>
                <div>
                    <h1>movies</h1>
                </div>
                <div className='flex gap-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/WatchList'>Watchlist</Link>
                </div>
            </div>
        </>
    )
}

export default Header