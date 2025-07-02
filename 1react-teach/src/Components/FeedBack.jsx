import React, { useReducer } from 'react'
import { feedbackReducre, initalValue } from '../reducers/feedbackReducer'
import { GrPowerReset } from "react-icons/gr";


function FeedBack() {


  const [state, dispatch] = useReducer(feedbackReducre, initalValue)

  const updateGood = () => { dispatch({ type: "updateGood" }) }
  const updateNeutral = () => { dispatch({ type: "updateNeutral" }) }
  const updateBad = () => { dispatch({ type: "updateBad" }) }
  const reset = () => { dispatch({ type: "reset" }) }

  const total = state.good + state.neutral + state.bad;
  const goodPresent = parseFloat(((state.good / total) * 100  || 0).toFixed(2));
  const neutralPresent = parseFloat(((state.neutral / total) * 100 || 0).toFixed(2));
  const badPresent = parseFloat(((state.bad / total) * 100 || 0).toFixed(2));


  return (
    <>
      <h1 className='mt-10 font-bold text-2xl border-b-2 inline-block p-3'>Feedback App</h1>
      <div className='text-justify w-100 mx-auto mt-5'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolores modi exercitationem, veritatis quasi recusandae fuga, quos architecto aliquam cum laudantium. Molestiae enim, tempora ducimus vel magni doloremque ut quaerat.</p>
      </div>
      <div className='font-bold flex gap-5 justify-center  mt-5'>
        <div>
          <button onClick={updateGood} className='bg-green-500 px-3 cursor-pointer py-1 rounded-lg'>Good</button>
          <p className='mt-3'>{state.good}</p>
        </div>
        <div>
          <button onClick={updateNeutral} className='bg-blue-500 px-3 cursor-pointer py-1 rounded-lg'>Neutral</button>
          <p className='mt-3'>{state.neutral}</p>
        </div>
        <div>
          <button onClick={updateBad} className='bg-red-600 px-3 cursor-pointer py-1 rounded-lg'>Bad</button>
          <p className='mt-3'> {state.bad}</p>
        </div>
        <div>
          <button onClick={reset} className='bg-gray-600 p-2 rounded-full text-white cursor-pointer'><GrPowerReset /></button>
        </div>
      </div>
      <div className='flex gap-10 justify-center items-center mt-5'>
        <h1 className='font-bold'>Good % : {goodPresent}</h1>
        <h1 className='font-bold'>Netural % : {neutralPresent}</h1>
        <h1 className='font-bold'>Bad % : {badPresent}</h1>
      </div>
    </>
  )
}

export default FeedBack
