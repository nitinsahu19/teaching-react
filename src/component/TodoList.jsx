import React, { useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleClick = () => {
        if (task.trim() !== "") {
            setTodoList([...todoList, task]);
            setTask("");
        }
    };

    const handleDelete = (id) => {
        const editbtn = todoList.filter(item => item.id !== id);
        setTodoList(editbtn);
        alert('hello')
    };


    return (
        <>
            <div className="flex gap-4 p-4 bg-white shadow-md shadow-green-700 rounded-2xl w-90">
                <input className="flex-1 border-2 border-gray-300 rounded-lg p-2 text-gray-700" type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your task" />

                <button onClick={handleClick} className="bg-cyan-500  text-white w-20 rounded-2xl font-bold cursor-pointer">Add</button>
            </div>

            <div className='ml-10 mt-10 flex gap-20'>
                <ul>{todoList.map((item) => (
                    <li className='mb-2 text-red-800 flex items-center gap-4'>{item}
                        <button onClick={handleDelete} className='bg-red-600  w-20 text-amber-300 h-8 rounded-2xl cursor-pointer'>Delete</button>
                    </li>
                ))}
                </ul>
            </div>

        </>
    );
};

export default TodoList;





