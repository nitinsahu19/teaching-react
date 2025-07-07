// import React, { useState } from 'react'

// function NewTodo() {
//   const [todo,setTodo]=useState('')
//   const[value,setValue]=useState([])

//   const handleAddTodo = (e) => {

//     if (todo.trim() === '') {
//       alert("Please enter something");
//       return;
//     }
//     else {
//       setValue([...value, todo]);
//       setTodo('');
//     }
//   }

    
//   return (
//    <>
//    <div>
//     <input type="text" value={todo}   onChange={e=>{setTodo(e.target.value)}} placeholder='Enter something' className='border rounded p-2 m-2'/>
//    <button className='border rounded p-2' onClick={handleAddTodo}>Add todo</button>
//    </div>
//    <div>
//     {value.map((item)=>
//     <h1>{item}</h1>
//     )}
//    </div>
   

// {/* <h1>{todo}</h1> */}
   
//    </>)
// }

// export default NewTodo
