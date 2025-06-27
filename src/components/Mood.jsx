import React, { useState } from 'react'

function Mood() {
  const [data , setData] = useState("")
  const [allData , setalldata] = useState([])

  const dataset = ()=>{
    localStorage.setItem("mood" , data)
  }

  return (
    <>
    <div className='flex justify-center mt-20'>
    <div className='p-20 border-2'>
    <input type="text" value={data} onChange={(e)=>setData(e.target.value)} name="" placeholder='How are you feeling Today' className='border-2 p-1' id="" />
    <button onClick={()=>dataset()} className='border-2 ms-2 bg-amber-200 p-1'>Submit Mood</button>
    </div>
    </div>

    </>
  )
}

export default Mood


















