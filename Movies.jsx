import React, { useContext, useEffect, useState } from 'react';
import './Page.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeContext, { useTheme } from './ThemeContext';
import Navbar from './Navbar';


function Movies() {
  const {theme,setTheme}=useTheme()
  const data = [
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

 
  const [watchList, setWatchList] = useState([]);
  const [showList, setShowList] = useState(false); 

 

  const toggleWatchList = () => {
    setShowList(!showList);
  };
  const toggleTheme = () => {
        setTheme(!theme);
    };


  const addToWatchList=(list)=>{
    const finalList = watchList.some((item)=>{
      return list.id===item.id
    })
    if(!finalList){
      let added = [...watchList ,list]
      
      setWatchList(added)
      localStorage.setItem("movies" ,JSON.stringify(added))
      toast("clicked movie aaded to list" )

    }
  
  }
  useEffect(()=>{
    let get = JSON.parse(localStorage.getItem("movies"))
    setWatchList(get)
  },[ ])



  return (
    <>
      <div className={theme ? 'dark' : 'light'}>
    <Navbar/>
        <button onClick={toggleTheme} className='bg-amber-600 p-2 border rounded m-2'>
          Theme
        </button>

        <button onClick={toggleWatchList} className='bg-green-600 p-2 border rounded m-2'>
          {showList ? 'Hide Watch List' : 'Show Watch List'}
        </button>

        {showList && (
          <div className='bg-red-500 m-2'>
            <h2 className='text-2xl font-bold'>Watch List</h2>
            {watchList.length === 0 ? <p>No movies added.</p> : (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-2 gap-4'>
                {watchList.map((movie) => <div key={movie.id} className='m-2 border p-2 rounded'>
                    <img src={movie.poster} alt={movie.title} className='w-full h-60 object-cover' />
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                    <button className='p-2 bg-black text-white rounded-4xl '>Remove</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className=''>
          {data.map((item) => (
            <div key={item.id} className='border p-3 rounded shadow-md'>
              <img src={item.poster} alt={item.title} className='' />
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <p>{item.genre}</p>
              <p>Rating: {item.rating}</p>
              <button
                onClick={() => addToWatchList(item)}
                className='border rounded mt-2 p-2 bg-blue-500 text-white'
              >
                Add to Watch List
              </button>
            </div>
          ))}
        </div>
      </div>
          {/* <ToastContainer/> */}
    </>
  );
}

export default Movies;
