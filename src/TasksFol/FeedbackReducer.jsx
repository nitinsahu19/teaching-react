import React, { useReducer } from 'react'
import { initialState, reducer } from './FedbackStates'



const FeedbackReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const total = state.good + state.neutral + state.bad
  // const positivePercent = total ? ((state.good / total) * 100).toFixed(1) : 0

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Feedback Form</h1>

      <div className='flex justify-around mb-4'>
        <button   onClick={() => dispatch({ type: 'GOOD' })}   className='bg-green-500 text-white px-4 py-2 rounded' >  Good </button>

        <button     onClick={() => dispatch({ type: 'NEUTRAL' })}     className='bg-gray-400 text-white px-4 py-2 rounded'   >   Neutral  </button>

        <button  onClick={() => dispatch({ type: 'BAD' })}  className='bg-red-500 text-white px-4 py-2 rounded'>    Bad   </button>
      </div>

      <div className='text-lg mb-4'>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {total}</p>
        {/* <p>Positive Feedback: {positivePercent}%</p> */}
      </div>

      <div className='text-center'>
        <button  onClick={() => dispatch({ type: 'RESET' })}    className='bg-blue-600 text-white px-6 py-2 rounded'  >  Reset    </button>
      </div>
    </div>
  )
}

export default FeedbackReducer
