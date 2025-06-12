import React, { useState } from 'react';

import { Outlet } from 'react-router-dom'

function Todolist() {
    const [Task, setTask] = useState('');
    const [Tasks, setTasks] = useState([])
    const [filter, setFilter] = useState('all');
    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const handleAdd = () => {
        if (Task !== '') {
            const newtodo = {
                text: Task,
                checked: false
            }
            setTasks([...Tasks, newtodo]);

            setTask("");
        }
    }
    const handleChecked = (ind) => {
        const upadtedaray = Tasks.map((item, index) => {
            return ind === index ? { ...item, checked: !item.checked } : item
        })
        setTasks(upadtedaray)
    }
    const removeItem = (item) => {
        const remove = Tasks.filter((key, index) => {
            return index !== item
        })
        setTasks(remove)
    }

    const finalarray = Tasks.filter((item) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return !item.checked
        } else {
            return item.checked
        }
    })


    return (
        <>


            <div className="text-center ">
                <h1 className="text-2xl font-bold mb-4">Todo List</h1>

                <div  >
                    <div className='flex justify-center gap-5'>
                        <div className="flex gap-5   bg-white p-4 rounded-lg  w-fit border">
                            <input className="text-xl font-semibold text-center rounded border px-2" type="text" value={Task} onChange={(e) => setTask(e.target.value)}
                                placeholder="Enter your name"
                            />
                            <button onClick={handleAdd} className="bg-emerald-300 text-white px-4 py-2 rounded">Submit</button>
                        </div>
                        <div className='rounded  '>
                            <select value={filter} onChange={handleChange} className="border h-25 " name='' id="">
                                <option value="all">all</option>
                                <option value="active">active</option>
                                <option value="complate">complate</option>
                            </select>

                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="mt-5 w-50  ">
                            {finalarray.map((item, index) => (
                                <div className='flex justify-between mt-2' key={index}>
                                    <input type="checkbox" name='sds' id='101' checked={item.checked} onChange={() => handleChecked(index)} />
                                    <p className="text-lg">
                                        {item.text}
                                    </p>

                                    <button onClick={() => removeItem(index)} className='bg-amber-950 text-white rounded p-2'>remove</button>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>);
}


export default Todolist;


