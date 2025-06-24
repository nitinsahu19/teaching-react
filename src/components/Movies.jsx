import React, { useContext, useState } from 'react';
import { moviesdata } from './moviesdata';
import { useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {theme , setThemes } = useContext(ThemeContext)
  const query = searchParams.get("q") || "";

  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value });
  };

  const filteredMovies = moviesdata.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const addwishlist = (clickedMovie) => {
    const existingList = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isAlready = existingList.find(m => m.id === clickedMovie.id);
    if (!isAlready) {
      existingList.push(clickedMovie);
      localStorage.setItem("watchlist", JSON.stringify(existingList));
      setSelectedMovie(clickedMovie);
    }
  };

  return (
    <>
      <h2 className={` ${theme === "light" ? "text-black" : "text-white "} text-center text-2xl font-bold `}>Movies</h2>

      <div className='text-center m-4'>
        <input type="text" value={query} onChange={handleSearch} placeholder="Search movies"className={`border px-4 py-2 rounded w-1/2 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        />
      </div>

      <div className={`main flex flex-wrap gap-5 justify-center ${theme === "light" ? "text-black bg-white" : ""} `}>
        {filteredMovies.map((movie, index) => (
          <span key={index} className={` ${theme === "light" ? "bg-white text-black" : "bg-black text-white bottom-2 border-amber-500"} shadow-2xl m-2 rounded-2xl p-4`}>
            <span>{movie.id}</span> <br />
            <span className='font-bold text-lg'>Movie : {movie.title}</span> <br />
            <span>Release : {movie.releaseYear}</span> <br />
            <span>Rating : {movie.rating}</span>
            <div className={`w-65 mt-1`}>
              <img className='h-60 rounded' src={movie.poster} alt={movie.title} /> <br />
              <button onClick={() => addwishlist(movie)} className='bg-blue-600 text-white rounded p-2 mt-2'>Add to Watchlist</button>
            </div>
          </span>
        ))}
      </div>
    </>
  );
}

export default Movies;
