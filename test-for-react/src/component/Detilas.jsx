import React from 'react'
import { movies } from '../datas/movies'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';


const Detilas = () => {
    const {id} = useParams();
    const movie = movies.find((item)=>item.id===Number(id));
    if(!movie)  return <h2>Movie not found</h2>;
       
    
  return (
    <div>
                <Navbar mode={props.mode} handleMode={props.handleMode} />
     <div className='p-4'>
      <h1 className='text-2xl font-bold'>{movie.title}</h1>
      <img className='w-60 my-2' src={movie.poster} alt={movie.title} />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
    </div>
    </div>
  )
}

export default Detilas
