import React, { useEffect, useState } from "react";
import Header from "./Header";
import { movies } from "../data/data";
import { Link, useSearchParams } from "react-router-dom";
import Details from "./Details";

function Home() {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const filterHandler = (value) => {
    setSearchParams({ category: value });
  };

  const category = searchParams.get("category") || "All";
  const filteredMovies =
    category == "All"
      ? movies
      : movies.filter((movie) => {
          return movie.genre == category;
        });

  const addHandler = (movie) => {
    if (!watchlist.includes(movie)) {
      setWatchlist([...watchlist, movie]);
    }
  };
  useEffect(() => {
    const store = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", store);
  }, [watchlist]);

  return (
    <div>
      <Header />
      <div>
        <div className="text-center p-5 text-4xl font-bold text-gray-700 ">
          Movies
        </div>
        <select
          value={category}
          onChange={(e) => filterHandler(e.target.value)}
          name=""
          id=""
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Superhero">Superhero</option>
          <option value="Crime">Crime</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <div className="flex flex-wrap justify-evenly">
          {filteredMovies.map((movie) => {
            return (
              <div className="shadow bg-gray-400 rounded p-2 w-65 mt-5">
                <img src={movie.poster} />
                <div className="my-2">
                  Name: {movie.title} ({movie.rating})
                </div>
                <div className="my-2">{movie.releaseYear}</div>
                <div className="flex justify-between">
                  <button
                    onClick={() => addHandler(movie)}
                    className="bg-blue-500 rounded  p-1 text-white"
                  >
                    Watch later
                  </button>
                  
                  <button
                    onClick={()=>setSearchParams({ "details": movie.title })}
                    className="text-blue-600 underline"
                  >
                    details
                  </button>
                </div>
              </div>
            );
          })}
          <div className={searchParams.get("details") ? "block" : "hidden"}>
            {console.log(searchParams.get("details"))}
            <Details movieName={searchParams.get("details")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
