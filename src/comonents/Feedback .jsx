import React from 'react'

function Feedback () {
  return (
   <div className='border-6 w-50  h-60'>
     <div className=' text-center'>
    <h3>feedback count </h3> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore amet fugit dolorum qui optio a dolores pariatur vitae cumque incidunt expedita, earum ipsum in similique quas dolorem recusandae sint laboriosam.</p>
    <div className=''>
      <button className=' m-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600' > 👍Good</button>
      <button className=' m-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600' > 😐Neutral</button>
      <button className=' m-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600' > 👎Bad</button>
    </div>
      </div>
   </div>
  
  )
}

export default Feedback 
