import React, { useState } from 'react'
import Navbar from './Navbar';

const Todo = (props) => {

    const [array, setArray] = useState([]);
    const [task, setTask] = useState('')
    const [filter, setFilter] = useState('All');
    const addTaskButton = () => {
        if (task === "") {
            alert("please enter value");
        } else {
            const newTodo = {
                text: task,
                checked: false
            }
            setArray([...array, newTodo]);
            setTask("");

        }
    }

    const deleteTask = (index) => {
        const finalList = array.filter((item, ind) => ind !== index);

        setArray(finalList);
    }
    const toggleCheckbox = (index) => {
        const updastedArray = array.map((item, ind) => {
            return ind === index ? { ...item, checked: !item.checked } : item;
        });
        setArray(updastedArray)
    }
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    const filterArray = array.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Active") return !item.checked;
        if (filter === "Compalte") return item.checked;
        return true;

    })

    return (
        <>
              <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />

            <div>
                <p className='text-center font-bold mt-2 text-2xl'>Todo app</p>
                <div className='text-end p-2 mt-2'>
                    <select className='border rounded' value={filter} onChange={handleFilter} name="" id="">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Compalte">Compalte</option>
                    </select>
                </div>
                <div className='flex justify-center mt-10 gap-2'>
                    <input className='border rounded' value={task} onChange={(e) => setTask(e.target.value)} type="text" id='101' placeholder='Enter a task' required />
                    <button onClick={addTaskButton} className='bg-green-500 p-1 ps-3 pe-3 rounded cursor-pointer'>Add task</button>
                </div>
            </div>

            {filterArray.map((value, index) =>
                <div>
                    <div className='flex justify-around p-1 items-center'>
                    <div className='w-10'>
                        <input type="checkbox" checked={value.checked} onChange={() => toggleCheckbox(index)} name="" id="" />
                    </div>
                    <div className='w-70'>
                        <p className='text-xl font-medium'>{value.text}</p>
                    </div>
                    <div className='w-20'>
                        <button onClick={() => deleteTask(index)} className='bg-red-600 p-1 ps-2 pe-2 text-white rounded'>Delete</button>
                    </div>
                </div>
                <hr className='m-2'/>
                </div>
            )}
        </>
    )
}

export default Todo
