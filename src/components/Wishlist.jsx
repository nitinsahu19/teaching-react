import React, { useEffect, useState } from 'react';

function Wishlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  return (
    <>
      <h2 className='text-center bg-black text-white text-2xl font-bold'>Your Watchlist</h2>

      <div className="main flex flex-wrap gap-5 justify-center mt-4">
        {watchlist.length === 0 ? (
          <p className='text-center text-gray-600'>No movies</p>
        ) : (
          watchlist.map((movie, index) => (
            <div key={index} className='shadow-xl rounded-xl p-5 bg-white w-80'>
              <h3 className='font-bold text-lg'>{movie.title}</h3>
              <p>Year: {movie.releaseYear}</p>
              <p>Rating: {movie.rating}</p>
              <img src={movie.poster} alt={movie.title} className='h-60 mt-2 rounded' />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Wishlist;


