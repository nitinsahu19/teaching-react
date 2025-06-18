
import { Link } from 'react-router-dom'
import Header from './Header'
// import {movies} from '.data/data'  
import { movies } from './data/data'
import { useState } from 'react'

function chanegtheam(){
    setTheam(!them)
}

function Home() {
    const[them , setTheam ]=useState(true)
    const toggle = ()=>{
        setTheam(!them)
    }

  return (
    <div> 
        <Header setTheams={toggle} />
        <div>
            <div  className='text-center p-5 text-5xl font-bold  '>Movies</div>
            <div className='flex flex-wrap justify-evenly'>
                {
                    movies.map((movie)=>{
                        return <div className={them ?"bg-white 'shadow p-2 w-65 mt-5'":"bg-black 'shadow p-2 w-65 mt-5'" }>
                            <img src={movie.poster}  />
                            <div className='my-2'>Name: {movie.title} ({movie.rating})</div>
                            <div className='my-2'>{movie.releaseYear}</div>
                            <div className='flex justify-evenly'>
                                <button  className="text-red-600 underline">
                                <Link>details</Link>
                            </button>
                            <button className='bg-red-500 rounded  p-1 text-white'>Watch later</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home
