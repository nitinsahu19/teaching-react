import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';
import Navbar from './Navbar';
import useLocalStorage from '../hooks/useLocalStorage';

function Todo() {
    // const [todo, settodo] = useState([]);
    const [input, setInput] = useState(""); 
    const [value , setValue] = useLocalStorage("todos", [])

    const addTodo = () => {
        if (input !== "") { 
            setValue([...value, input])
            setInput("")
        } else {
            alert("Please Enter Your Todo Task and After Add")
        }
    }

    const remove = (items) => {
        const finalDelete = value.filter((item, index) => {
            return items !== index
        });
        setValue(finalDelete)
    }

   

  
    return (
        <>
        <Navbar />
            <div className='w-100 mt-30 mx-auto border-2 min-h-50 p-4'>
                <div className='flex justify-around mt-5'>
                    <h1 className='text-2xl font-bold'>Toto</h1>
                    <div className='flex gap-10'>
                        <div className='border-2 p-1 rounded'>
                            <input id='input' value={input} onChange={(e) => setInput(e.target.value)} className='outline-0' type="text" placeholder='Enter Your Todo Task' />
                            <button onClick={addTodo} className='bg-blue-600 px-3 font-semibold py-1 rounded-lg cursor-pointer'>Add</button>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    {value.map((data, index) => <div className='p-3 flex justify-between items-center h-auto'>
                        <div className='flex gap-5 items-center'>
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
