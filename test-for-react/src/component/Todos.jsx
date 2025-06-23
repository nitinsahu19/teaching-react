import React, { useState } from 'react'
import useLocalstroage from '../hooks/useLocalstroage'
import Navbar from './Navbar';

const Todos = () => {
  const [value, setValue] = useLocalstroage('todos', []);
  const [todo, setTodo] = useState('');
  const handleAdd = () => {
    if (todo === '') {
      setTodo('')
      return;
    } else {
      setValue([...value, todo]);
      setTodo('')

    }
  }
  const handleClear = () => {
    setValue([])
  }
  const handleDelete = (ind) =>{
    const checkValue = value.filter((item,index)=>{
      return index!==ind
    })
    setValue(checkValue)
  }
  const handleEvent = (event)=>{
    if(event.key==='Enter'){
      handleAdd();
    }
  }
  return (
    <>
      <Navbar />

      <div className='flex justify-center p-3'>
        <div className='flex gap-3'>
          <input className='border-2 p-2 rounded w-100' onKeyDown={handleEvent} value={todo} onChange={(e) => setTodo(e.target.value)} type="text" name="" id="" placeholder='Enter a todo' />
          <button onClick={handleAdd} className='bg-green-400 rounded p-2  font-medium'>Add Todo</button>
          <button onClick={handleClear} className='bg-red-600 rounded p-2 text-white font-medium'>Clear all</button>
        </div>
      </div>
      <div>
        <div className='p-3'>
      { value.length>0? <p className='font-medium text-2xl text-center text-violet-500'>Your todo is</p>
        :<p className='font-medium text-2xl text-center text-violet-500'>Todo not found</p>}
          {value.map((item, index) => (
            <div key={index}>
              <div className='flex justify-between items-center gap-6 p-2 font-medium '>
                <p className='text-lg'>{index+1}</p>
              <p className='text-lg'>{item}</p>
              <button onClick={()=>handleDelete(index)} className='bg-red-600 rounded p-1 text-white'>Delete</button>
              </div>
              <hr className='m-2'/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Todos
