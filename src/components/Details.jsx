import React from "react";
import { movies } from "../data/data";

function Details({ movieName }) {
  return (
    <div className="m-auto absolute top-0 right-0 bg-white w-100 flex gap-10 my-20 shadow-lg">
      {movies.filter((movie) => {
        if (movieName == movie.title) {
          return (
            <div>
              <div>
                <img src={movie.poster} alt="" />
              </div>
              <div>
                <div>{movie.title}</div>
                <div>{movie.rating}</div>
              </div>
            </div>
          );  
        }
      })}
    </div>
  );
}

export default Details;
