
import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (task !== "") {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompleted = (index) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  const filteredTasks = taskList.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className='flex justify-center'>

    <div className="p-4 ">
      <h2 className="text-lg font-bold mb-4 text-center">To-Do App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="border px-2 py-1 mr-2 w-75"
        />
      <button
        onClick={addTask}
        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
        Add Task
      </button>

      <div className="mt-4 space-x-2">
        <button onClick={() => setFilter("all")} className="px-3 py-1 bg-blue-500 rounded">All</button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 bg-blue-500 rounded">Completed</button>
        <button onClick={() => setFilter("incomplete")} className="px-3 py-1 bg-blue-500 rounded">Incomplete</button>
      </div>

      <ul className="mt-4 list-disc list-inside">
        {filteredTasks.map((item, index) => (
          <li
          key={index}
          onClick={() => toggleCompleted(taskList.indexOf(item))}
          className={item.completed ? "line-through text-gray-500 cursor-pointer" : "cursor-pointer"}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
        </div>
  );
};

export default TodoApp;
