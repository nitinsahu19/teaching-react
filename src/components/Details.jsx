import React from "react";
import { movies } from "../data/data";

function Details({ movieName,searchParams ,setSearchParams}) {
  
  const filteredmovies = movies.filter((movie) => {
        return movieName==movie.title
      })
  
  return (
    <div className="m-auto top-0 right-0 bg-slate-400 rounded-xl w-130 p-3 flex gap-10 my-20 shadow-lg">
      {
        filteredmovies.map((movie)=>{
            return <div>
              <div  className="flex justify-end w-1/1 "> <button className="rounded hover:bg-slate-600 px-2" onClick={()=>{searchParams.delete('details'),setSearchParams(searchParams)}}>X</button> </div>
            <div className="flex p-2">
              <div className="w-1/2">
                <img className="rounded" src={movie.poster} />
              </div>
              <div className="p-2 w-1/2">
                <div>Name : <b>{movie.title}</b></div>
                <div>Year : <b>{movie.releaseYear}</b></div>
                <div>Rating : <b> {movie.rating}⭐</b></div>
                <div>({movie.genre} movie)</div>
              </div>
            </div>
            </div>
        })
      }
    </div>
  );
}

export default Details;
