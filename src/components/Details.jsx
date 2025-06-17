import React from 'react'

function Details({movie}) {
  return (
    <div className='m-auto flex gap-10 my-20 shadow-lg'>
      <div>
        <img src={movie.poster} alt="" />
      </div>
      <div>
        <div>{movie.title}</div>
        <div>{movie.rating}</div>
      </div>
    </div>
  )
}

export default Details
