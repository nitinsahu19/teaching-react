import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import useSimpleTheme from "./ThemeToggle";
import Watchlist from "./Watchlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const movies = [
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    releaseYear: 2008,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    releaseYear: 2014,
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    releaseYear: 1994,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    genre: "Superhero",
    rating: 8.4,
    releaseYear: 2019,
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    releaseYear: 1994,
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    id: 7,
    title: "Joker",
    genre: "Crime",
    rating: 8.4,
    releaseYear: 2019,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 8,
    title: "Iron Man",
    genre: "Superhero",
    rating: 7.9,
    releaseYear: 2008,
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    id: 9,
    title: "Doctor Strange",
    genre: "Fantasy",
    rating: 7.5,
    releaseYear: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    id: 10,
    title: "The Matrix",
    genre: "Action",
    rating: 8.7,
    releaseYear: 1999,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
];

const MovieList = () => {
  const { isDark, toggleTheme } = useSimpleTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [watchlist, setWatchlist] =useState(() => JSON.parse(localStorage.getItem('watchlist')) ||[]);
  const [showWatchlist, setShowWatchlist] = useState(false);

  const genre = searchParams.get("genre") || "";

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.genre.value;
    setSearchParams({ genre: value });
  };

  const handleAddToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      toast.success("Add to Watchlist")
    }

  };


  const filteredMovies = movies.filter((movie) =>
    movie.genre.includes(genre)
  );
  

  return (
    <div className={`min-h-screen p-6 ${isDark ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      <ToastContainer/>
      <h1 className="text-center text-xl underline decoration-wavy mb-4">Movie Explore App</h1>

      <div className="mb-4 flex justify-between">
        <button
          onClick={toggleTheme}
          className={`px-3 py-2 rounded border font-bold ${isDark ? 'bg-gray-700 text-white border-gray-500' : 'bg-gray-200 text-black border-gray-400'}`}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button
          onClick={() => setShowWatchlist((prev) => !prev)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {showWatchlist ? "Hide Watchlist" : "Show Watchlist"}
        </button>
      </div>

      <form onSubmit={handleSearch} className="text-center mb-6">
        <input
          type="text"
          name="genre"
          placeholder="Search by genre"
          defaultValue={genre}
          className={`px-3 py-1 m-2 rounded ${isDark ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-black border-gray-400'} border`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Search
        </button>
      </form>


 {showWatchlist ? (
        <Watchlist movies={watchlist} isDark={isDark} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
             
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.rating}</p>
                <p>Year: {movie.releaseYear}</p>
                <button
                  onClick={() => handleAddToWatchlist(movie)}
                  className="bg-blue-500 text-white p-2 mt-2 rounded hover:bg-blue-600"
                >
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))};
        </div>
      )}

    </div>
  );
};

export default MovieList;