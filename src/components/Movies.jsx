import React from 'react';
import { moviesdata } from './moviesdata';
import { useSearchParams  } from 'react-router-dom';
import { useState } from 'react';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dark , setdark] = useState(false)
  const togleButtton = ()=>{
    setdark(!dark)
  }


  const query = searchParams.get("q") || "";

  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value});
  };

  const filteredMovies = moviesdata.filter(movie =>
   movie.title.includes(query)
  );


  const addwishlist = (clickedMovie)=>{
  const existingList = JSON.parse(localStorage.getItem("watchlist")) || [];
  const isAlready = existingList.find(m => m.id === clickedMovie.id);
  if(!isAlready){
    existingList.push(clickedMovie)
    localStorage.setItem("watchlist" , JSON.stringify(existingList))
    setSelectedMovie(clickedMovie)
  }

  }


  return (
    <>
      <h2 className='text-center bg-gray-600 text-white text-2xl font-bold'>Movies</h2>
      <button className={`absolute top-3 right-40 ${dark ? "text-black" : "text-white"} `} onClick={()=>togleButtton()}>{dark ? "Dark Mode ⚫" : "Light Mode 🔆"}</button>

      <div className='text-center m-4'>
        <input type="text" value={query} onChange={handleSearch} placeholder="Search movies" className="border px-4 py-2 rounded w-1/2"/>
      </div>

      <div className={`main flex flex-wrap gap-5 justify-center`}>
        {filteredMovies.map((movie, index) => (
          <span key={index} className={`shadow-2xl m-2 rounded-2xl p-8 ${dark ? "text-black bg-white" : "text-white bg-black"}`}>
            <span>{movie.id}</span> <br />
            <span className='font-bold text-lg'>Movie : {movie.title}</span> <br />
            <span>Release : {movie.releaseYear}</span> <br />
            <span>Rating : {movie.rating}</span>
            <div className='w-65 mt-1'>
              <img className='h-60 rounded' src={movie.poster} alt={movie.poster} /> <br />
              <button onClick={()=>addwishlist(movie)} className='bg-blue-600 text-white rounded p-2 mt-2'>Add to Watchlist</button>
            </div>
          </span>
        ))}
      </div>

      <div>
        
      </div>
    </>
  );
}

export default Movies;
