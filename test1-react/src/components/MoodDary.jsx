import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function MoodDary() {

  const [value, setValue] = useLocalStorage("name", "")
  const [input, setInput] = useState('')

  const save = () => {
    setValue([...value, input])
    setInput('')
  }


  return (
    <>
      <div>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} className='w-70 border-2 mt-3 ms-4 p-1' placeholder='How are you feeling today?' /><br />
        <div className='flex gap-4'>
          <button onClick={save} className='bg-blue-500 px-3 py-1 rounded-lg cursor-pointer mt-3 ms-3 font-bold'> submit mood entry</button>
          <button className='bg-red-500 px-3 py-1 rounded-lg cursor-pointer mt-3 ms-3 font-bold'> Delete All</button>
        </div>
      </div>
      <div>
        {value.map((item) => {
          <p>{item}</p>
        })}
      </div>
    </>
  )
}

export default MoodDary
