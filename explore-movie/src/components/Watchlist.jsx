import React from "react";

const Watchlist = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="text-center">No movies in watchlist yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
        //   className={rounded-lg overflow-hidden ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-4 ">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.releaseYear}</p>
            <button
            className="bg-red-500 text-white p-2 mt-2 rounded hover:bg-blue-600"
            >Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
