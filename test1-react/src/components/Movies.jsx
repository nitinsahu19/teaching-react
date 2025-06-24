import React, { useEffect, useState } from 'react'
import { movies } from '../data/movies'
import Navbar from './Navbar'
import { useNavigate, useSearchParams } from 'react-router-dom'
function Movies() {
    const [data, setData] = useState(movies)
    const [addWatch, setAddWatch] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    const addWatchListMovies = (product) => {

        const isLogined = JSON.parse(localStorage.getItem("token"))

        if (!isLogined) {
            alert("Please Log in")
            navigate('/login')
        }

        const findId = addWatch.find((item) => {
            return product.id === item.id
        })
        if (!findId) {
            let addmovie = [...addWatch, product]
            setAddWatch(addmovie)
            localStorage.setItem("movie", JSON.stringify(addmovie))
        }
    }

    useEffect(() => {
        let get = JSON.parse(localStorage.getItem("movie")) || [];
        setAddWatch(get)
    }, [])

    const genrefilter = searchParams.get('genre') || "All"
    const AllfilterData = genrefilter === "All" ? movies : movies.filter((movie) => movie.genre === genrefilter)
    const handlgenrefilter = (e) => {
        setSearchParams({ genre: e.target.value })
    }



    return (
        <>
            <Navbar />

            <div className=''>

                <div className=' flex gap-5 mt-10 justify-start ms-5'>
                    <h1 className='text-3xl font-bold italic'>All list</h1>
                    <select className='border-2' onChange={handlgenrefilter} name="" id="">
                        <option value="All">All</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Superhero">Superhero</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                </div>

                <div className='flex flex-wrap justify-center gap-4'>
                    {AllfilterData.map((item) => <div className='w-[90%] sm:w-[45%] md:w-[30%] shadow-2xl h-auto py-4 px-4 mt-5'>
                        <img className='w-100 h-100 object-cover' src={item.poster} alt={item.id} />
                        <p className='font-bold mt-4'>Title : {item.title}</p>
                        <p className='font-bold'>Rating : {item.rating}</p>
                        <p className='font-bold'>ReleaseYear : {item.releaseYear}</p>
                        <button onClick={() => addWatchListMovies(item)} className='bg-blue-700 px-3 py-1 rounded cursor-pointer mt-3 mb-4 font-bold'>Add to WatchList</button>
                    </div>)}
                </div>
            </div>

        </>
    )
}

export default Movies
