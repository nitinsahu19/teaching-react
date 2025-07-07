import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterReducer'

export const Counter = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.counter)
    console.log(count,"value from the reducer")


    const handleIncrease = () => {
        dispatch(increment())
        console.log("funciton called")
    }
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div>{count}</div>
    <button onClick={handleIncrease}>Increase</button>
    <button className='border border-black px-2 py-4 flex justify-center items-center' onClick={() => dispatch(decrement())}>-</button>
    <button className='border border-black px-2 py-4 flex justify-center items-center' onClick={() => dispatch(reset())}>All Zero</button>
    </div>
  )
}
