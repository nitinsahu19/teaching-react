import React, { useState } from 'react'
import { movies } from '../data/movies'

function Movies() {
    const [data, setData] = useState(movies)
    const [addWatch, setAddWatch] = useState([])

    const addWatchListMovies = () => {
        setAddWatch(movies)
    }
    console.log(addWatch)
    return (
        <>
            {/* <div>
                <button className='bg-red-600 px-3 py-1 rounded'>Watch List</button>
            </div> */}
            <div className='grid grid-cols-3 gap-4'>
                {data.map((values) => <div className='shadow-2xl py-4 px-3 mt-5'>
                    <img className='w-80 h-80 object-cover' src={values.poster} alt={values.id} />
                    <p>{values.title}</p>
                    <p>{values.releaseYear}</p>
                    <button onClick={addWatchListMovies} className='bg-blue-700 px-3 py-1 rounded cursor-pointer'>Add to WatchList</button>
                </div>
                )}
            </div>
            {<div className='absolute top-10'>
                {addWatch.map((items) => <div>
                    <img className='w-30' src={items.poster} alt="" />
                    <p>{items.title}</p>
                    <p>{items.releaseYear}</p>
                </div>)}
            </div>}
        </>
    )
}

export default Movies
