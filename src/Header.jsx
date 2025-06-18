import React, { useState } from 'react'


function Header({setTheams}) {
  return (
    <div className='bg-red-200 flex justify-around p-3 '>
         <p className='font-bold text-red-400 '>Movies</p>
         <button onClick={()=>setTheams()} className='font-bold text-red-400'>{`${setTheams ? "Dark" : "Light"}`}</button>
         <button className='font-bold text-red-400 '>Logout</button>
    </div>
  )
}

export default Header