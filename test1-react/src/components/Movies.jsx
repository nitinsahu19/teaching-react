import React, { useEffect, useState } from 'react'
import { movies } from '../data/movies'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'

function Movies() {
    const [data, setData] = useState(movies)
    const [addWatch, setAddWatch] = useState([])
    const [show, setShow] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const addWatchListMovies = (product) => {
        const findId = addWatch.find((item) => {
            return product.id === item.id
        })
        if (!findId) {
            let addmovie = [...addWatch, product]
            setAddWatch(addmovie)
            localStorage.setItem("movie", JSON.stringify(addmovie))
        } else {
            alert('Alredy added')
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
                <button onClick={() => setShow
                    ((prev) => !prev)} className='bg-red-600 px-3 py-1 rounded mt-5'>Watch List</button>


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

                <div className='grid grid-cols-3 gap-4'>
                    {AllfilterData.map((item) => <div className='shadow-2xl py-4 px-3 mt-5'>
                        <img className='w-80 h-80 object-cover' src={item.poster} alt={item.id} />
                        <p>title:{item.title}</p>
                        <p>rating:{item.rating}</p>
                        <p>releaseYear:{item.releaseYear}</p>
                        <button onClick={() => addWatchListMovies(item)} className='bg-blue-700 px-3 py-1 rounded cursor-pointer'>Add to WatchList</button>
                    </div>)}
                </div>
            </div>


            {show && <div className='absolute top-30 right-10 w-50 h-auto bg-white p-3 shadow-2xl'>
                {addWatch.map((items) => <div className='py-4'>
                    <img className='w-40 h-40 object-cover' src={items.poster} alt="" />
                    <p>title:{items.title}</p>
                    <p>rating:{items.rating}</p>
                    <p>releaseYear:{items.releaseYear}</p>
                </div>)}
            </div>}
        </>
    )
}

export default Movies
