import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './Reducer/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ width: '100%', height: '100vh', background: 'black', color: 'white' }}>
      <div className='text-center'>
        <h2>{count}</h2>
        <button className='w-25 h-9 bg-green-500 cursor-pointer rounded-2xl mt-5' onClick={() => dispatch(increment())}>Increment +</button> <br />
        <button className='w-25 h-9 bg-red-500 cursor-pointer rounded-2xl mt-5' onClick={() => dispatch(decrement())}>Decrement -</button><br />
        <button className='w-25 h-9 bg-pink-500 cursor-pointer rounded-2xl mt-5' onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
