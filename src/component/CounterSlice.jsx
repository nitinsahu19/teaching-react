import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementCounter,decrementCounter,resetCounter } from './slice/Counterslice';

const CounterSlice = () => {
    const dispatch = useDispatch();
    const value = useSelector(state=>state.counter.value)
  return (
    <div>
      <div>
        <button className='p-2 bg-blue-500 font-medium text-white' onClick={()=>dispatch(incrementCounter())}>Increase</button>
        <button className='p-2 bg-blue-500 font-medium text-white'>{value}</button>
        <button className='p-2 bg-blue-500 font-medium text-white' onClick={()=>dispatch(decrementCounter())}>decrease</button>
        <button className='p-2 bg-blue-500 font-medium text-white' onClick={()=>dispatch(resetCounter())}>Reset</button>
      </div>
    </div>
  )
}

export default CounterSlice
