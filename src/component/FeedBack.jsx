import React, { useReducer } from 'react'
import { feedBackReducer, intialValue } from '../reducer/feedbackreducer'

const FeedBack = () => {
    const [state,dispatch] = useReducer(feedBackReducer,intialValue)
    const presentGood = state.good/(state.good+state.bad+state.neutral)*100;
    const presentBad = state.bad/(state.good+state.bad+state.neutral)*100;
    const presentNeutral = state.neutral/(state.good+state.bad+state.neutral)*100;
  
  return (
    <div className='flex justify-center m-3'>
      <div>
      <h1 className='text-center text-2xl font-medium'>FeedBack app</h1>
     <div className='flex gap-3 mt-4'>
      <p className='font-semibold text-lg'>Good :- {state.good}</p>
      <p className='font-semibold text-lg'>Neutral :- {state.neutral}</p>
      <p className='font-semibold text-lg'>Bad :- {state.bad}</p>
     </div>
      <div className='flex gap-10 m-5'>
      <button className='bg-green-500 font-medium p-2 rounded' onClick={()=>dispatch({type:"good"})}>Good</button>
      <button className='p-2 font-medium bg-blue-500 rounded' onClick={()=>dispatch({type:"neutral"})}>Neutral</button>
      <button className='p-2 font-medium bg-red-600 rounded' onClick={()=>dispatch({type:"bad"})}>Bad</button>
      </div>

      <div>
    <p className='text-lg font-medium '>good Feedback :- {presentGood?parseFloat(presentGood.toFixed(2)):0}%</p>  
    <p className='text-lg font-medium '>Neutral Feedback :- {presentNeutral?parseFloat(presentNeutral.toFixed(2)):0}%</p>  
    <p className='text-lg font-medium '>Bad Feedback :- {presentBad?parseFloat(presentBad.toFixed(2)):0}%</p>  
     </div>
    </div>
    </div>
  )
}

export default FeedBack
