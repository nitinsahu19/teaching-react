import React, { useReducer } from 'react'
import Header from './Header'
import { FeedbackReducer, initialFeedback } from '../reducers/FeedbackReducer';

function Feedback() {
    const [state,dispatch]=useReducer(FeedbackReducer,initialFeedback);

    // const feedHandler=(e)=>{
    //    if (e.target.value!='select') {
    //     dispatch({
    //         type:"Update",
    //         cetegory:e.target.value,
    //     });
    //    }
    // }

    const feedHandler=(value)=>{
        dispatch({
            type:value,
        })
    }
    const resetHandler=()=>dispatch({type:'Reset'}) 

    const total = state.good+state.neutral+state.bad
    const goodpercent = Math.floor((state.good/total)*100)
    
  return (
    <>
        <Header/>
        <div className='w-full h-100 '>
            <div className='w-100 mt-20 p-5 rounded  bg-gray-200 m-auto'>
                <div className='text-center w-1/1 text-gray-600 text-2xl font-bold'>Feedback</div>
                <div className='flex justify-between mt-5'>
                    {/* <select onChange={feedHandler} className='bg-white' name="" id="">
                        <option value="select">Select Feedback</option>
                        <option value="Good">Good</option>
                        <option value="Netural">Netural</option>
                        <option value="Bad">Bad</option>
                    </select> */}
                    <button className='bg-green-500 px-3 py-2 rounded text-white' onClick={()=>feedHandler('Good')}>Good</button>
                    <button className='bg-yellow-500 px-3 py-2 rounded text-white' onClick={()=>feedHandler('Neutral')}>Neutral</button>
                    <button className='bg-red-500 px-3 py-2 rounded text-white' onClick={()=>feedHandler('Bad')}>Bad</button>
                <button onClick={()=>resetHandler()} className='bg-blue-500 px-3 py-2 rounded text-white'>Reset</button>
                </div>  
                {total!=0 && <div className=' mt-3'>
                    <div className='flex justify-between'>
                        <div>Good : {state.good}</div>
                        <div>Neutral : {state.neutral}</div>
                        <div>Bad : {state.bad}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Total : {total}</div>
                        <div>Positive : {goodpercent}%</div>
                    </div>
                </div>}
            </div>
        </div>
    </>
  )
}

export default Feedback
