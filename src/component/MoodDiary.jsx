import React, { useState } from 'react'
import useLocalStroage from './hooks/localStroage'

const MoodDiary = () => {
    const [value,setValue,clearValue] = useLocalStroage('mood',"");
    const [data,setData] = useState('');
    const addTask = ()=>{
        if(data===""){
            alert('please enter value')
        }else{
            setValue([...value,{text:data,time:new Date().toLocaleString()}]);
            setData('')
        }
    }
    console.log(value);
    
  return (
    <div>
    <div className='flex justify-center mt-8'>
      <div className='flex items-center gap-3'>
        <textarea value={data} onChange={(e)=>setData(e.target.value)} className='border' name="text" id="" placeholder='Enter your Mood'></textarea>
        <button onClick={addTask} className='bg-green-500 text-white rounded ps-2 pe-2 p-1'>Add Mood</button>
        <button onClick={()=>clearValue()} className='bg-red-500 text-white rounded ps-2 pe-2 p-1'>
            Clear Value
        </button>
      </div>

    </div>
      <div>
    {value.map((item,index)=>( 
        <div key={index} className='flex gap-10'>
        <p>{item.text}</p>
        <p>{item.time}</p>
    </div>))}
      </div>
    </div>
  )
}

export default MoodDiary
