import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState('All')
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        if (task !== "") {
            const newTodo = {
                text: task,
                checked: false
            }
            setTodoList([...todoList, newTodo]);
            setTask("");
            console.log(todoList);

        } else {
            alert("please try again")
        }
    };



    const Themsmode = () => {
        setDarkMode(!darkMode)
    }


    const handleDelete = (items) => {
        const editbtn = todoList.filter((i, index) => {
            return items !== index
        });
        setTodoList(editbtn);
    };

    const HndleFilter = (index) => {
        const updatedArray = todoList.map((item, ind) => {
            return index === ind ? { ...item, checked: !item.checked } : item;
        });
        setTodoList(updatedArray);
    };

    const finalaray = todoList.filter((item, ind) => {
        if (filter === "All") return true;
        if (filter === "Active") return !item.checked;
        if (filter === "Complete") return item.checked;
        return true;
    });


    console.log(finalaray);

    return (
        <>
            <div>
                <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition duration-800`}>

                    <div className='text-5xl p-2 font-bold italic bg-red-700'>
                        <h1 className='flex justify-center'>TodoList</h1>
                        <button onClick={Themsmode} className='text-3xl cursor-pointer'>
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>
 

                <div className='flex justify-around'>

                    <div className="flex justify-center gap-4 mt-50 p-4 bg-white shadow-md shadow-green-700 rounded-2xl">
                        <input className="flex-1 border-2 border-gray-300 rounded-lg p-2 text-gray-700" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your task" />

                        <button onClick={handleClick} className="bg-cyan-500  text-white w-20 rounded-2xl font-bold cursor-pointer">Add</button>
                    </div>
                    <div className='mt-60'>
                        <select className='border-2 p-1 rounded-xl' name="" value={filter} onChange={(e) => setFilter(e.target.value)} id="">
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                </div>
                <div className='mt-6'>
                    {finalaray.length === 0 ? (
                        <p className='text-2xl text-red-500 text-center font-bold'>Please Enter task !</p>
                    ) : (
                        finalaray.map((item, index) => (
                            <div className='flex gap-50 ml-65 items-center p-2'>
                                <p>{index + 1}</p>
                                <input value={filter} checked={item.checked} onChange={() => HndleFilter(index)} type="checkbox" />
                                <li className='text-red-800 flex items-center gap-4'>{item.text}</li>
                                <button onClick={() => handleDelete(index)} className='text-2xl text-red-600 font-bold cursor-pointer'><MdDeleteForever /></button>
                            </div>
                        ))
                    )}
                </div>


            </div>

        </>
    );
};

export default TodoList;


