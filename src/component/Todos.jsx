import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import uselocalstorage from '../hooks/uselocalstorage'

const Todos = () => {

  const [todo, setTodo] = useState('')
  const [input, setInput] = uselocalstorage("todos",[])

  const Handclike = (e) => {
    e.preventDefault()
    if (todo !== "") {
      setInput([...input, todo])
      setTodo("")
    } else {
      alert("Asdasdasd")
    }
  }

  const handldelete = (index) => {
    const deleteitem = input.filter((i ,item)=>{
      return index !== item
    })
    setInput(deleteitem)
  }
  return (
    <>
      <div className='w-100 p-5 h-60 border-2 flex justify-center'>
        <form action="">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className='w-full h-10 border' type="text" placeholder='Enter the Task!' />
          <button onClick={Handclike} className='w-full h-10 mt-5 bg-red-400 hover:bg-red-600 cursor-pointer '>click me</button>
        </form>
      </div>
      <div className=''>
        {input.map((item, index) => <div className=' flex ml-10 mt-5 gap-30 p-1'>
          <p>{index + 1}</p>
          <h1>{item}</h1>
          <p onClick={()=> handldelete(index)} className='text-2xl font-bold text-green-500 hover:text-red-600 cursor-pointer'><MdDeleteForever /></p>
        </div>)}
      </div>

    </>
  )
}

export default Todos


