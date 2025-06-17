import React, { useEffect, useState } from 'react'
import {movies} from './Products'
import Header from './Header'
import Watchlist from './Watchlist'
function Home() {
  const [whatlist,setwatchlist]=useState([])


  const addHandler=(movie)=>{
    if(!whatlist.includes(movie)){
      setwatchlist([...whatlist,movie])
      localStorage.setItem(JSON.stringify(whatlist))

    }
  }
  useEffect(()=>{
    localStorage.setItem(JSON.stringify("watchlist", Watchlist ))
  },[Watchlist])
  return (
  <>
  <div className='text-center p-5 text-4xl font-bold text-gray-700'>
  movies
  </div>
  <div className='flex flex-wrap gap-3 justify-evenly'>
  {

    movies.map((movie)=>{
      return <div className='shadow p-2  mt-5 card w-70 rounded-3'>
        <img src={movie.poster} alt="" />
        <div className='my-2'>name : {movie.title}({movie.rating})</div>
        <div className='my-2'>name : {movie.releaseYear}</div>
        <button onClick={()=>addHandler()}  className='bg-amber-600 text-white p-1 rounded-5'>add  Watch list</button>
      </div>
    })
  }
  </div>

  </>
  )
}

export default Home