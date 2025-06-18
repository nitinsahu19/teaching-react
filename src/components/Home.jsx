import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      releaseYear: 2010,
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
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
      genre: "Sci‑Fi",
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

  const [searchParams, setSearchParams] = useSearchParams()

  const genrefilter = searchParams.get('genre') || "All"

  const AllfilterData = genrefilter === "All" ? movies : movies.filter((movie) => movie.genre === genrefilter)

  const handlgenrefilter = (e) => {
    setSearchParams({genre:e.target.value})
  }

  return (
    <>
      <div className=' flex gap-20 mt-10 justify-center'>
        <h1 className='text-3xl font-bold italic'>All list</h1>
        <select className='border' onChange={handlgenrefilter} name="" id="">

          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Superhero">Superhero</option>
          <option value="Crime">Crime</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>


      {AllfilterData.map((item) => <div>
        <img className='w-100 h-100 object-contain' src={item.poster} alt={item.id} />
        <p>title:{item.title}</p>
        <p>rating:{item.rating}</p>
        <p>releaseYear:{item.releaseYear}</p>
      </div>)}
    </>
  )
}

export default Home
