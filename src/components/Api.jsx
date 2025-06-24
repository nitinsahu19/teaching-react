import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const Api=()=> {
    const [api,setapi]=useState([])

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        setapi(res)
    })
    .catch((err)=>console.err("the approch has wrong" , err))

    },[] )
    return (
    <>
    
    <div>
        {api.map((item)=> <div className='border  bg-amber-400 p-6'>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.completed}</p>
        </div>)}
 
    </div>
    
    </>
  )
}

export default Api