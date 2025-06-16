import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


function Todo() {

  const [todo, settodo] = useState([]); 
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState('All')

  const addTodo = () => {
    if (input !== "") {
      const newtodo = {
        text: input,
        checked: false
      }
      settodo([...todo, newtodo])
      setInput("")
    } else {
      alert("Please Enter Your Todo Task and After Add")
    }
  }
  
  const remove = (items) => {
    const finalDelete = todo.filter((item, index) => {
      return items !== index
    });
    settodo(finalDelete)
  }

  const handlecheckbox = (index) => {
    const newupdatedaray = todo.map((item, ind) => {
      return index === ind ? { ...item, checked: !item.checked } : item;
    })
    settodo(newupdatedaray)
  }

  const finalarray = todo.filter((item, index) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !item.checked
    } else {
      return item.checked
    }
  })

  return (
    <>
      <div className='w-150 mt-30 mx-auto border-2 min-h-100 p-4'>
        <div className='flex justify-between mt-5'>
          <h1 className='text-2xl font-bold'>Toto</h1>
          <div className='flex gap-10'>
            <div className='border-2 p-1 rounded'>
              <input id='input' value={input} onChange={(e) => setInput(e.target.value)} className='outline-0' type="text" placeholder='Enter Your Todo Task' />
              <button onClick={addTodo} className='bg-blue-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'>Add</button>
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} name="" id="" className='border-2 rounded outline-0 select-width text-center'>
              <option value="All">All </option>
              <option value="Active">Active 🟢</option>
              <option value="Completed">Completed ✅</option>
            </select>
          </div>
        </div>
        <div>
          {finalarray.map((data, index) => <div className='p-3 flex justify-between items-center h-auto'>
            <div className='flex gap-5 items-center'>
              <input type="checkbox" checked={data.checked} onChange={() => handlecheckbox(index)} className='cursor-pointer' />
              <p className='font-bold'>{index + 1}.</p>
              <h5 className='font-bold'>{data.text}</h5>
            </div>
            <button id='id' onClick={() => remove(index)} className='bg-red-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'><MdDeleteForever className='text-2xl' /></button>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default Todo
