import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { movies } from "../data/data";
import { Link, useSearchParams } from "react-router-dom";
import Details from "./Details";
import WatchlistContext from "../contexts/WatchlistContext";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailParams,setDetailParams]=useState();
  
  // const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist")) || []);
  const {watchlist,setWatchlist}=useContext(WatchlistContext);

  const addHandler = (movie) => {

    const addedmovie = watchlist.some(m => m.title === movie.title);

    if(!addedmovie){
      setWatchlist([...watchlist, movie]);
    }


    // if (!watchlist.includes(movie)) {
    //   setWatchlist([...watchlist, movie]);
    // }
  };

  useEffect(() => {
    const store = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", store);
  }, [watchlist]);


  useEffect(()=>{
    setDetailParams( searchParams.get("details"))
    
  },[searchParams])


  const filterHandler = (value) => {
    setSearchParams({ "category": value });
  };

  const category = searchParams.get("category") || "All";
  const filteredMovies =
    category == "All"
      ? movies
      : movies.filter((movie) => {
          return movie.genre == category;
      });




  return (
    <div>
      <Header/>
      <div>
        <div className="text-center p-5 text-4xl font-bold text-blue-500 ">
          Movies
        </div>
         <select
         className="ms-10 bg-gray-400 rounded"
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
                  {movie.title}
                </div>
                <div className="my-2">⭐{movie.rating }</div>
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
                    Details
                  </button>
                </div>
              </div>
            );
          })}
          <div className={detailParams ?  "fixed back top-0 left-0 w-full h-screen flex justify-center align-middle" : "hidden"}>
            <Details movieName={detailParams} searchParams={searchParams} setSearchParams={setSearchParams}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
