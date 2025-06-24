import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function WatchList(props) {

    const [addWatch , setAddWatch] = useState([])

  useEffect(()=>{
    const get = JSON.parse(localStorage.getItem('movie')) || []
    setAddWatch(get)
  },[])

  const removeWatchListItems = (product) =>{
    let remove = addWatch.filter((items)=>{
      return product.id !== items.id
    })
    localStorage.setItem("movie" , JSON.stringify(remove))
    setAddWatch(remove)
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className='font-bold text-xl mt-5 px-5'>Watch List :-{'>'}</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {addWatch.map((item) => (
            <div className='w-[90%] sm:w-[45%] md:w-[30%] shadow-2xl h-auto py-4 px-4 mt-5'>
              <img className='w-full h-100 object-cover rounded' src={item.poster} alt={item.id} />
              <p className='font-bold mt-4'>Title : {item.title}</p>
              <p className='font-bold'>Rating : {item.rating}</p>
              <p className='font-bold'>ReleaseYear : {item.releaseYear}</p>
              <button onClick={() => removeWatchListItems(item)} className='bg-red-700 font-bold text-white px-3 py-1 rounded cursor-pointer mt-3 mb-4'>Remove</button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default WatchList
