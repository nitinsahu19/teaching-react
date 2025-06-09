import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setfilter] = useState('All');

  const handleAdd = () => {
    if (inputValue !== '') {
      const newtodo = {
        text: inputValue,
        checked: false,
      };
      setTodos([...todos, newtodo]);
      setInputValue('');
    } else {
      toast.warning('Please enter anything');
    }
  };

  const remove = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  const handlefilter = (indexToToggle) => {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToToggle ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const finalarray = todos.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !item.checked;
    if (filter === 'Complete') return item.checked;
    return true;
  });

  return (
    <>
      <div className="text-center">
        <h1 className="mt-20 text-2xl text-red-500 bg-amber-950">Todo List</h1>

        <input
          type="text"
          className="border text-center text-cyan-700 rounded p-2 mt-2"
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="border rounded ms-2 bg-amber-950 text-amber-100 p-2"
          onClick={handleAdd}
        >
          Add
        </button>

        <select
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
          className="border rounded ms-4"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Complete">Complete</option>
        </select>

        <ul className="mt-5 text-amber-800">
          {finalarray.map((todo, index) => (
            <div key={index} className="flex justify-center mt-2">
              <h1>{index + 1}</h1>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handlefilter(index)}
              />
              <li className="text-amber-900 text-2xl ps-2">{todo.text}</li>
              <button
                onClick={() => remove(index)}
                className="border rounded ms-2 text-xs px-2 bg-cyan-900 text-cyan-400"
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};

export default Todo;
