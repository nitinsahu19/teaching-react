import React from 'react'
import {useState} from 'react'

const CountButton = () => {
  const [count, setCount] = useState(0)

  return (
<>
<h1 className='text-center text-3xl mt-3'>Count Button</h1>
      <div className="card p-4 flex justify-center gap-4">
        <button 
        className='bg-purple-500 text-white px-4 py-3 rounded hover:bg-purple-600 transition duration-300'
        onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
 
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => setCount(0)}
        >
        Reset Count
      </button>
        </div> 
   
</>
  )
}

export default CountButton
