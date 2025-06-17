import React, { useEffect, useState } from 'react'
import Header from './Header'
import {movies} from '../data/data'
import { Link } from 'react-router-dom'
import Details from './Details'

function Home() {
    const [watchlist, setWatchlist]=useState(JSON.parse(localStorage.getItem("watchlist"))||[]);

    const addHandler=(movie)=>{
        if(!watchlist.includes(movie)){
            setWatchlist([...watchlist,movie])
            
        }
    }
    useEffect(()=>{
        const store=JSON.stringify(watchlist);
        localStorage.setItem("watchlist",store)
    },[watchlist])

  return (
    <div>
        <Header/>
        <div>
            <div className='text-center p-5 text-4xl font-bold text-gray-700 '>Movies</div>
            <div className='flex flex-wrap justify-evenly'>
                {
                    movies.map((movie)=>{
                        return <div className='shadow p-2 w-65 mt-5'>
                            <img src={movie.poster}  />
                            <div className='my-2'>Name: {movie.title} ({movie.rating})</div>
                            <div className='my-2'>{movie.releaseYear}</div>
                            <div className='flex justify-evenly'>
                                <button  className="text-blue-600 underline">
                                <Link>details</Link>
                            </button>
                            <button onClick={()=>addHandler(movie)} className='bg-blue-500 rounded  p-1 text-white'>Watch later</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home
