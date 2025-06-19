import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';

const WatchList = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        let getList = JSON.parse(localStorage.getItem('movie')) || [];
        setList(getList)
    }, [])
    const removeitem = (id) =>{
        let removemovie = list.filter((item)=>item.id!==id)
        localStorage.setItem('movie',JSON.stringify(removemovie))
        setList(removemovie)
    }
    return (
        <div>
            <Navbar mode={props.mode} handleMode={props.handleMode} />
            {list.length<1&&<p className='text-center p-4 text-2xl font-medium mt-3'>No Movie found</p>}
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    list.map((item, index) =>
                         <div key={index} className='border p-2 rounded bg-gray-100'>
                                <img className='h-100 w-100 object-cover' src={item.poster} alt="movies" />
                                <p className='font-semibold text-lg'>Title: {item.title}</p>
                                <p className='font-semibold text-lg'>Realse year: {item.releaseYear}</p>
                               <button className='bg-red-600 text-white p-1 ps-2 pe-2 rounded font-semibold mt-2 cursor-pointer' onClick={()=>removeitem(item.id)}>Delete</button>
                            </div>
                    )
                }
            </div>    </div>
    )
}

export default WatchList
