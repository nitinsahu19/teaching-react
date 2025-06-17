import React from "react";



    export const movies = [
       
        {
          id: 2,
          title: "The Dark Knight",
          genre: "Action",
          rating: 9.0,
          releaseYear: 2008,
          poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        },
        {
          id: 3,
          title: "Interstellar",
          genre: "Sci-Fi",
          rating: 8.6,
          releaseYear: 2014,
          poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
        },
        {
          id: 4,
          title: "The Shawshank Redemption",
          genre: "Drama",
          rating: 9.3,
          releaseYear: 1994,
          poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
        },
        {
          id: 5,
          title: "Avengers: Endgame",
          genre: "Superhero",
          rating: 8.4,
          releaseYear: 2019,
          poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
        },
        {
          id: 6,
          title: "Forrest Gump",
          genre: "Drama",
          rating: 8.8,
          releaseYear: 1994,
          poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
        },
        {
          id: 7,
          title: "Joker",
          genre: "Crime",
          rating: 8.4,
          releaseYear: 2019,
          poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        },
        {
          id: 8,
          title: "Iron Man",
          genre: "Superhero",
          rating: 7.9,
          releaseYear: 2008,
          poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
        },
        {
          id: 9,
          title: "Doctor Strange",
          genre: "Fantasy",
          rating: 7.5,
          releaseYear: 2016,
          poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
        },
        {
          id: 10,
          title: "The Matrix",
          genre: "Action",
          rating: 8.7,
          releaseYear: 1999,
          poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
      }
      ];
      const MovieList = () => {
  return (
    <div className="p-6 bg-black min-h-screen">
        <div className=" text-center gap-2 mt-2 mb-2">
      <form className="d-flex" role="search">
      <input className="form-control p-1 m-2" type="search" placeholder="Search" aria-label="Search"/> 
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" type="submit">Search</button>
      </form>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-70 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-xl font-semibold text-gray-600">{movie.title}</h2>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
              <p className="text-gray-600">Realease Year: {movie.releaseYear}</p>
              <button className="bg-blue-500 text-white p-2 rounded">Add to watchList</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
