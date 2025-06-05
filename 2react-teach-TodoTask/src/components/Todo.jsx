import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


function Todo() {

  const [todo, settodo] = useState([]);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(true)

  const addTodo = () => {
    if (input !== "") {
      settodo([...todo, input])
      setInput("")
    } else {
      alert("Please Enter Your Todo Task and After Add")
    }
  }



  const inputValue = (e) => {
    setInput(e.target.value)
  }

  const remove = (items) => {
    const finalDelete = todo.filter((item, index) => {
      return items !== index
    });
    settodo(finalDelete)
  }

  return (
    <>
      <div className='w-150 mt-30 mx-auto border-2 min-h-100 p-4'>
        <div className='flex justify-between mt-5'>
          <h1 className='text-2xl font-bold'>Toto</h1>
          <div className='flex gap-10'>
            <div className='border-2 p-1 rounded'>
              <input id='input' value={input} onChange={inputValue} className='outline-0' type="text" placeholder='Enter Your Todo Task' />
              <button onClick={addTodo} className='bg-blue-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'>Add</button>
            </div>
            <select name="" id="" className='border-2 rounded outline-0 select-width text-center'>
              <option value="">All </option>
              <option value="">Active 🟢</option>
              <option value="">Completed ✅</option>
            </select>
          </div>
        </div>
        <div>
          {todo.map((data, index) => <div className='p-3 flex justify-between items-center h-auto'>
            <div className={check && 'flex gap-5 items-center'}>
              <input type="checkbox" className='cursor-pointer' onChange={() => setCheck(!check)} />
              <p className='font-bold'>{index + 1}.</p>
              <h5 className='font-bold'>{data}</h5>
            </div>
            <button id='id' onClick={() => remove(index)} className='bg-red-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'><MdDeleteForever className='text-2xl' /></button>
          </div>)}
        </div>

      </div>
    </>
  )
}

export default Todo
