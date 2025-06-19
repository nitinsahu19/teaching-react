import React from 'react'
import { movies } from '../datas/movies'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';


const Detilas = (props) => {
    const {id} = useParams();
    const movie = movies.find((item)=>item.id==Number(id));
    if(!movie)  return <h2>Movie not found</h2>;
       
    
  return (
    <div>
         <Navbar mode={props.mode} handleMode={props.handleMode} />
   <div className='flex justify-center items-center'>
      <div className='p-4 rounded  shadow-2xl'>
      <img className='w-100 h-90 my-2' src={movie.poster} alt={movie.title} />
      <h1 className='text-2xl font-bold'>{movie.title}</h1>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
    </div>
   </div>
    </div>
  )
}

export default Detilas
