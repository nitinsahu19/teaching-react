import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

const Movies = () => {
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
 
    const [darkmode, setDarkmode] = useState('')
    const [slider, setSlider] = useState(false)

    const handleDark = () => {
        setDarkmode(!darkmode)
    }


    return (
        <>
            <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className='flex justify-around p-5'>
                    <div className='flex gap-10 items-center'>
                        <h1 className='text-2xl font-bold'>Product List</h1>
                        <b className='text-3xl cursor-pointer' onClick={() => setSlider(!slider)}><BsCart3 /></b>
                    </div>
                    <button onClick={handleDark}>
                        {darkmode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
 

                {slider && <div>
                    {movies.map((item) => <div>
                        <img className='w-50 h-50 object-cover' src={item.poster} alt={item.title} />
                        <p className='mt-2 text-sm text-gray-600'>{item.genre}</p>
                        <p className='text-2xl font-bold'>{item.title}</p>
                        <p>Rating: {item.rating}</p>
                        <p className='text-lg'>{item.releaseYear}</p>
                    </div>)}
                </div>}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10'>
                    {movies.map((item) => (
                        <div key={item.id} className='text-center shadow-lg rounded-lg p-4 gap-10'>
                            <img className='w-100 h-50 object-contain' src={item.poster} alt='' />
                            <p className='mt-2 text-sm text-gray-600'>{item.genre}</p>
                            <p className='text-2xl font-bold'>{item.title}</p>
                            <p>Rating: {item.rating}</p>
                            <p className='text-lg'>{item.releaseYear}</p>
                            <button className='bg-amber-300 w-24 mt-5 py-1 rounded-2xl cursor-pointer'>Click</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movies
