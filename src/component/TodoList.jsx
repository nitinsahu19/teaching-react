import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import uselocalstorage from '../hooks/uselocalstorage'

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = uselocalstorage("fdfgdfgd" , [])
    const [filter, setFilter] = useState('All')
    const [darkMode, setDarkMode] = useState(false)
    const [color, setColor] = useState('white') 
 

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

            <div  style={{backgroundColor:color}} className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition duration-700`}>

                <div className='flex justify-between items-center text-5xl p-4 font-bold italic bg-red-700'>
                    <h1 className='text-center flex-1'>TodoList</h1>
                    <button onClick={Themsmode} className='text-3xl cursor-pointer ml-4'>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                <div className='flex items-center justify-around mt-10 p-4 gap-4'>
                    <div className="bg-white shadow-md shadow-green-700 rounded-2xl p-4">
                        <input className=" text-green-600 border p-2 w-60 h-8 rounded-2xl" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your task" />
                        <button onClick={handleClick} className="bg-cyan-500 text-white w-25 h-9 ml-5 rounded-2xl font-bold cursor-pointer">Add</button>
                    </div>

                    <div className='mt-2 md:mt-0'>
                        <select className='border-2 p-2 rounded-xl text-black bg-green-500 border-none' value={filter} onChange={(e) => setFilter(e.target.value)} >
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                </div>

                <div className='mt-8 px-6'>
                    {finalaray.length === 0 ? (
                        <p className='text-2xl text-red-500 text-center font-bold'>Please enter a task!</p>
                    ) : (
                        finalaray.map((item, index) => (
                            <div key={index} className='flex items-center justify-between bg-gray-100 p-3  rounded-lg shadow-sm'>
                                <div className="flex items-center gap-4">
                                    <p>{index + 1}</p>
                                    <input type="checkbox" checked={item.checked} onChange={() => HndleFilter(index)} className="w-5 h-5" />
                                    <li className={`list-none ${item.checked ? 'line-through text-gray-400' : 'text-red-800'}`}>{item.text}
                                    </li>
                                </div>
                                <button onClick={() => handleDelete(index)} className='text-2xl text-red-500 cursor-pointer' >
                                    <MdDeleteForever />
                                </button>
                            </div>
                        ))
                    )}
                </div>

            </div>

          <div>
              <div className="fixed bottom-5 left-0 right-0 flex justify-center gap-4">
                <button onClick={() => setColor("red")} className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" > Red</button>
                <button onClick={() => setColor("blue")} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >Blue</button>
                <button onClick={() => setColor("green")} className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" >Green</button>
                <button onClick={() => setColor("yellow")} className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500" > Yellow</button>
                <button onClick={() => setColor("purple")} className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600" > Purple</button>
                <button onClick={() => setColor("pink")} className="cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600" >Pink</button>
            </div>
          </div>


        </>
    );
};

export default TodoList;


