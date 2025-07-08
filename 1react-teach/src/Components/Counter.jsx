import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inCriment, deCriment, reset } from '../redux/reduxCounter/counterReducer'


export default function Counter() {

    const dispatch = useDispatch()
    const value = useSelector(state => state.counter.count)

    const incriment = () => {
        dispatch(inCriment())
    }


    return (
        <>
            <div className='flex justify-center items-center gap-5 h-screen w-full'>
                <button onClick={incriment} className='border px-2 bg-blue-500 text-white font-bold cursor-pointer'>+</button>
                <div>{value}</div>
                <button className='border px-2 bg-green-500 text-white font-bold cursor-pointer' onClick={() => dispatch(deCriment())}>-</button>
                <button className='border px-3 py-1  bg-red-500 text-white font-bold cursor-pointer' onClick={() => dispatch(reset())}>All Zero</button>
            </div>
        </>
    )
}
