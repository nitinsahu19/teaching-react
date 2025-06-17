import React, { useState } from 'react'
import { movies } from '../datas/movies'
import { FaShoppingCart } from "react-icons/fa";



const Home = () => {

const handlesidebar = () =>{
    let sidebar  = document.getElementById("siderbar")
    sidebar.style.left = '0'
}

const handleRemoveSidebar = () =>{
    let sidebar  = document.getElementById("siderbar")
    sidebar.style.left = '-100%'
}


const [list,setList] = useState([]);



  return (
    <div className='mt-3 relative'>
        <div className='p-2'>
            <button className='text-2xl font-medium cursor-pointer' onClick={handlesidebar}><FaShoppingCart /></button>
</div>
<div className='h-100 bg-red-100 w-80 absolute -left-100' id='siderbar'>
    <div className='flex justify-end p-2'>
        <p className='text-2xl font-bold cursor-pointer' onClick={handleRemoveSidebar}>X</p>
    </div>
    <div>
        {
            list.map((item)=>
            <div>
                <img src={item.poster} alt="" />
                <p>{item.title}</p>
            </div>
            )
        }
    </div>

</div>
     <div className='grid md:grid-cols-3 mt-2 gap-3'>
        {
            movies.map((item,index)=>
            <div key={index} className='border p-2 rounded bg-gray-100'>
                <img className='h-80 object-contain' src={item.poster} alt="movies" />
                <p className='font-semibold text-lg'>Title: {item.title}</p>
                <p className='font-semibold text-lg'>Genre: {item.genre}</p>
                <p className='font-semibold text-lg'>Rating: {item.rating}</p>
                <p className='font-semibold text-lg'>Realse year: {item.releaseYear}</p>
                <button className='bg-green-600 text-white rounded p-1 mt-2'>Add to Watchlist</button>
            </div> 
            )
        }
     </div>
    </div>
  )
}

export default Home
