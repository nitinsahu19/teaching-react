import React, { useState } from 'react'
import Header from './Header'
import { useStorage } from '../customHooks/useStorage';

function MoodDiaryApp() {
    const [value,setValue]=useStorage('entry',[]);
    const [input,setInput]=useState('');


    const submitHandler=()=>{
        setInput('');
        setValue([...value,input]);
    }


    const removeHandler=()=>{
        setValue([])
    }
  return (
    <>
        <Header/>
        <div className='w-full flex justify-center gap-10 p-10 '>
            <textarea onChange={(e)=>setInput(e.target.value)} value={input} className='' placeholder='How are you feeling today?' name="" id=""></textarea>
            <button onClick={submitHandler} className='bg-blue-500 text-white px-2 rounded'>Submit</button>
            <button onClick={removeHandler} className='bg-blue-500 text-white px-2 rounded'>Remove</button>
        </div>
        <div className='flex gap-5 p-10 flex-wrap'>
            {
                value.map((e)=>{
                    return <div className='bg-gray-200 p-3 w-80'>
                        <div className='text-2xl'>
                        {e}
                        </div>
                        <div>
                            {new Date().toLocaleString()}                            
                        </div>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default MoodDiaryApp

