import React, { useContext, useEffect } from 'react'
import Header from './Header'
import WatchlistContext from '../contexts/WatchlistContext'

function Watchlist() {
    const {watchlist,setWatchlist}=useContext(WatchlistContext)
    // const watchlist=JSON.parse(localStorage.getItem("watchlist"));
    const removeHandler=(index)=>{
        const filteredWatchlist = watchlist.filter((movie,i)=>{
            return i!=index
        })
        setWatchlist(filteredWatchlist)
    }

    useEffect(() => {
        const store = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", store);
    }, [watchlist]);

  return (
    <>
    <Header/>
    <div>
            <div className='text-center p-5 text-4xl font-bold text-black '>Your list</div>
            <div className='flex flex-wrap justify-evenly'>
                {
                    watchlist.map((movie,index)=>{
                        return <div className='shadow mb-5 bg-gray-400 rounded p-2  w-70 mt-5'>
                            <div className='text-end w-1/1'>
                                <button onClick={()=>removeHandler(index)} className='p-2 '>X</button>
                            </div>
                            <div className=''>
                                <div><img src={movie.poster}/></div>
                                <div>
                                    <div className='my-2'><b>{movie.title} ⭐({movie.rating})</b></div>
                                    <div className='my-2'>Year : <b>{movie.releaseYear}</b></div>
                                    <div className='my-2'>({movie.genre})</div>
                                </div>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Watchlist
