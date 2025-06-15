import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);   // for todo's
  const [task, setTask] = useState('');    // for input field
  const [filter, setFilter] = useState('All');   //for filer 

  const addTodo = () => {
    if (task === '') return; // Skip if the task is empty
  
    setTodos([...todos, { task, completed: false }]);   // Add new todo to the list
    setTask(''); // Clear the input field
  };

  const completeTodo = (index) => {
    const updated = todos.map((todo, i) =>   //update the todo
      i === index ? { ...todo, completed: true } : todo
    );
    setTodos(updated);  
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index); // Remove the todo at the given index
    setTodos(updatedTodos); // Update the state with the new list
  };
 
  const filteredTodos =
    filter === 'Active'
      ? todos.filter((todo) => !todo.completed)    //if ! (not completed then the todo is active)
      : filter === 'Completed'
      ? todos.filter((todo) => todo.completed)    // for completed todo
      : todos;

  return (

    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Todo App</h2>   

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task" 
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-4">  
        {['All', 'Active', 'Completed'].map((f) => (   //filter buttons
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-5 ${
              filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white'
            } transition`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {filteredTodos.length === 0 ? (      // Check if there are no todos to display
          <li className="text-center text-gray-500 dark:text-gray-400">No tasks found</li>
        ) : (
          filteredTodos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
            >
              <span
                className={`flex-1 ${
                  todo.completed ? 'line-through text-white-500' : ''
                }`}
              >
                {todo.task} 
              </span>
              <div className="flex gap-2 ml-4">
                {!todo.completed && (
                  <button
                    onClick={() => completeTodo(index)}   // complete button
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Complete
                  </button>
                )}
                <button
                  onClick={() => deleteTodo(index)}     //delete button
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
    </div>
  );
};

export default TodoApp;




