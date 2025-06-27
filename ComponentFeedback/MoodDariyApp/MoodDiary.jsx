 import React, { useState } from 'react'
import UseLocalStorage from './UseLocalstroge';
 
 function Mooddiary() {
  const[input,setInput]=useState();
  // const[entry,setEntry]= useState([]);
  const[value, setValue] =UseLocalStorage("Entry",[])

  const submit = ()=>{
setValue([...value, input])
setInput('')
  }


   return (
     <div> 
      <div className='w-full flex  mt-5 '>
          <div className='flex gap-5 align-text-center'>
            <textarea value={input} onChange={(e)=>setInput(e.target.value)}  className='p-2   border-1' name="" placeholder="How are you feeling today?" id=""/> 
           <div> <button onClick={submit}  className='p-2 bg-red-100' >Sumit</button></div>
          </div>
      </div>

      {value.map((a)=>{
       return <div>
        <p className='p-2 mt-2 bg-red-50 text-black'>{a}</p>
        <button></button>
       </div> 
      })}
     </div>
   )
 }
 

 export default Mooddiary