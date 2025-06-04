import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


function Todo() {

  const [todo , settodo] = useState();
  
  const addTodo = () => {
    const input = document.getElementById("input")
    let inputValue = input.value
    console.log(input.value)
    settodo(inputValue)
  }
  

  return (
    <>
      <div className='w-100 mt-30 mx-auto border-2 min-h-100 p-4'>
        <div className='flex justify-between mt-5'>
          <h1 className='text-2xl font-bold'>Toto</h1>
          <div className='border-2 p-1'>
            <input id='input' className='outline-0' type="text" placeholder='Enter Your Todo Task' />
            <button onClick={addTodo} className='bg-blue-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'>Add</button>
          </div>
        </div>
        <div className='mt-10 flex justify-between items-center h-auto'>
          <div className='flex gap-5 items-center'>
            <input type="checkbox"  className='cursor-pointer'/>
            <p className='font-bold'>1.</p>
          </div>
            <h5 className='font-bold'>{todo}</h5>
          <button className='bg-red-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'><MdDeleteForever className='text-2xl' /></button>
        </div>
      </div>
    </>
  )
}

export default Todo
