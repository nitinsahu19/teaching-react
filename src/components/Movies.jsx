import React from 'react'
import { moviesdata} from './moviesdata'
import { useSearchParams } from 'react-router-dom'
function Movies() {
  const [search , setsearchparams] = useSearchParams()
  
  return (
    <>
    <h2 style={{fontSize:"2rem"}} className='text-center bg-black text-white'><b>Movies</b></h2>
    <div className="main flex flex-wrap gap-5 shadow-2xl rounded">
    {moviesdata.map((movie , index)=>(
        <>
        <span key={index} className='shadow-2xl m-2 rounded-2xl p-8'>
        <span>{movie.id}</span> <br />
        <span>Movie : {movie.title}</span> <br />
        <span> Release : {movie.releaseYear}</span> <br />
        <span>Rating : {movie.rating}</span>
        <div className='w-65 mt-1'>
        <img className='h-60' src={movie.poster} alt={movie.poster} /> <br />
        <button className='bg-blue-600 text-white rounded p-2'>Add to Watchlist</button>
        </div>
        </span>
        </>
    ))}
    </div>
    </>

  )
}

export default Movies













