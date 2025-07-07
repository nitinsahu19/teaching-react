// import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UsestorageContext from './LocalstorageContext';

// const Todo = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [filter, setfilter] = useState('All');

//   const handleAdd = () => {
//     if (inputValue !== '') {
//       const newtodo = {
//         text: inputValue,
//         checked: false,
//       };
//       setTodos([...todos, newtodo]);
//       setInputValue('');
//     } else {
//       toast.warning('Please enter anything');
//     }
//   };

//   const remove = (indexToRemove) => {
//     const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
//     setTodos(updatedTodos);
//   };

//   const handlefilter = (indexToToggle) => {
//     console.log("******************************", indexToToggle)
//     const updatedTodos = todos.map((todo, index) =>
//       index === indexToToggle ? { ...todo, checked: !todo.checked } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const finalarray = todos.filter((item) => {
//     if (filter === 'All') return true;
//     if (filter === 'Active') return !item.checked;
//     if (filter === 'Complete') return item.checked;
//     return true;
//   });

//   return (
//     <>
//       <div className="text-center">
//         <h1 className="mt-20 text-2xl text-red-500 bg-amber-950">Todo List</h1>

//         <input type="text" className="border text-center text-cyan-700 rounded p-2 mt-2" placeholder="Enter something" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />

//         <button  className="border rounded ms-2 bg-amber-950 text-amber-100 p-2"
//           onClick={handleAdd}   >  Add   </button>

//         <select value={filter} onChange={(e) => setfilter(e.target.value)} className="border rounded ms-4"  >
//           <option value="All">All</option>
//           <option value="Active">Active</option>
//           <option value="Complete">Complete</option>
//         </select>

//         <ul className="mt-5 text-amber-800">
//           {finalarray.map((todo, index) => (
//             <div key={index} className="flex justify-center mt-2">
//               <h1>{index + 1}</h1>
//               <input    type="checkbox" checked={todo.checked} onChange={() => handlefilter(index)}  />
//               <li className="text-amber-900 text-2xl ps-2">{todo.text}</li>
//               <button onClick={() => remove(index)}  className="border rounded ms-2 text-xs px-2 bg-cyan-900 text-cyan-400"   >  Remove
//               </button>
//             </div>
//           ))}
//         </ul>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

import React, { useState } from 'react';

const Todo = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = UsestorageContext("list",[]);
  const [filter, setFilter] = useState('All');

  const addTodo = () => {
    if (input.trim() === '') return alert("Please enter something");

    const newTodo = { text: input, checked: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };


  const removeTodo = (index) => {
    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  };


  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updated);
  };


  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.checked;
    if (filter === 'Complete') return todo.checked;
    return true; 
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>  Todo List</h1>

      <input
        type="text" className='border rounded mt-3 text-black'
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className='border rounded ms-2 bg-amber-800 p-2' onClick={addTodo}>Add</button>

      <select className='border rounded-2xl' value={filter} onChange={(e) => setFilter(e.target.value)} style={{ marginLeft: '10px' }}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Complete">Complete</option>
      </select>

      <ul style={{ marginTop: '20px', listStyle: 'none' }}>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodo(index)}
            />
            <span style={{ textDecoration: todo.checked ? 'line-through' : 'none', marginLeft: '8px' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)} style={{ marginLeft: '10px' }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default SimpleTodo;


export default Todo;
