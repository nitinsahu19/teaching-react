import React from 'react'

const Tostyfiy = (props) => {
  return (
    <div className='relative'>
      <div className='bg-green-700 text-white font-medium z-50 fixed top-10 right-2 p-2 rounded'>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Tostyfiy
