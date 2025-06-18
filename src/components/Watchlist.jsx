import React from 'react'
import Header from './Header'

function Watchlist(props) {
    const watchlist=JSON.parse(localStorage.getItem("watchlist"));
  return (
    <>
    <Header/>
    <div>
            <div className='text-center p-5 text-4xl font-bold text-gray-700 '>Movies</div>
            <div className='flex flex-wrap justify-evenly'>
                {
                    watchlist.map((movie)=>{
                        return <div className='shadow bg-gray-400 rounded p-2 w-100 mt-5'>
                            <div className='flex'>
                                <div><img src={movie.poster} /></div>
                                <div>
                                    <div className='my-2'>Name: {movie.title} ({movie.rating})</div>
                                    <div className='my-2'>{movie.releaseYear}</div>
                                    <div className='my-2'>{movie.genre}</div>
                                </div>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Watchlist
