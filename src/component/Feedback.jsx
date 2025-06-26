import React, { useReducer, useState } from 'react'
import { Feedbacreduce, initialState } from './FeedbackReduce';
import { RiResetLeftLine } from "react-icons/ri";

const Feedback = () => {
    const [state, dispatch] = useReducer(Feedbacreduce, initialState)
    console.log(state);

    const total = state.good + state.natural + state.bad
    const totalvalue = Math.round((state.good / total) * 100 || 0)
    const Total_Natural = Math.round((state.natural / total) * 100 || 0)
    const Total_Bad = Math.round((state.bad / total) * 100 || 0)
 

    return (
        <>

            <div>
                <h1 className='text-4xl font-bold italic text-center text-red-600 mt-10'>Feedback Datas</h1>
                <div className='flex gap-20 p-10 '>
                    <div>
                        <button onClick={() => dispatch({ type: 'GOOD' })} className=' w-30 p-1 rounded-2xl h-9 cursor-pointer bg-blue-600'>Good</button>
                        <p className='ml-15 mt-1'>{state.good}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch({ type: 'natural' })} className='w-30 p-1 rounded-2xl h-9 cursor-pointer bg-green-500'>Netural</button>
                        <p className='ml-15 mt-1'>{state.natural}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch({ type: 'bad' })} className='w-20 p-1 rounded-2xl h-9 cursor-pointer bg-yellow-500'>Bad</button>
                        <p className='ml-15 mt-1'>{state.bad}</p>
                    </div>

                    <div>
                        <button className='text-4xl font-bold mt-1 cursor-pointer' onClick={() => dispatch({ type: 'reset' })}><RiResetLeftLine /></button>
                    </div>
                </div>
            </div>

            <div className='flex gap-100 ml-20 p-2'>
                <div className='p-2'>
                    <p>Good:{state.good}</p>
                    <p>Netural:{state.natural}</p>
                    <p>Bad:{state.bad}</p>
                </div>

                <div className='font-bold text-center p-2'>
                    <h1 className='text-green-600'>Total_Good : {totalvalue}%</h1>
                    <h1 className='text-pink-600'>Total_Natural : {Total_Natural}%</h1>
                    <h1 className='text-yellow-600'>Total_Bad : {Total_Bad}%</h1>
                </div>
            </div>
        </>
    )
}

export default Feedback
