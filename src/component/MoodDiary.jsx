import React, { useState } from 'react'
import Moodlocal from './Moodlocal'

const MoodDiary = () => {
    const [text , setText] = useState('')
    const [input , setInput] = Moodlocal("Text",[])

    const handlclike = () => {
        if(text !== ""){
            setInput([...input , text])
            setText('') 
        }else{
            alert('Please Enter Your Task!')
        }
    }

    return (
        <>
            <div className='flex gap-10 mt-10 ml-10'>
                <textarea value={text} onChange={(e) => setText(e.target.value)} className='border' type="text" placeholder='How are you feeling today?'/>
                <button onClick={handlclike} className='w-25 h-9 bg-green-500 cursor-pointer' >Sumbit</button>
            </div>

            <div>
                {input.map((item , index)=><div className='flex gap-10 mt-5 ml-10'>
                    <p key={index}>{index + 1}</p>
                    <h1>{item}</h1> 
                </div>)}
            </div>
        </>
    )
}

export default MoodDiary
