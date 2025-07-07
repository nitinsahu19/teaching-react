import React, { useReducer, useState } from 'react'
import { FormReducer, initialState } from './FormReducer'



function ReducerForm() {
  const [state,dispatch]=useReducer(FormReducer,initialState)

const handelchange=(e)=>{
  dispatch({
    type:"update_field",
    field:e.target.name,
    value:e.target.value

  })
}

const handelnext=()=>{
  dispatch({
    type:"nextfield"
   

  })
}

const handelpre=()=>{
  dispatch({
    type:"prefield"
   

  })
}


  return (
    <>

      {state.page === 1 && 
      <>

        <div className='bg-red-600 border rounded w-100 text-center'>

          <input name='name' type="text" value={state.name} onChange={handelchange} className='p-2 border rounded m-2' placeholder='Enter Name' /> <br />

          <input name='email' type="email" value={state.email} onChange={handelchange} className='p-2 border rounded m-2' placeholder='Enter Email' /><br />
          <button  className='p-2 bg-black text-white border rounded m-2' onClick={handelnext}>Next Page</button>
        </div>
      </> }
      
      { state.page === 2 &&
        <>
          <div className='bg-red-600 mt-2 border rounded w-100 text-center'>

            <input name='city' type="text" value={state.city} onChange={handelchange} className='p-2 border rounded m-2' placeholder='Enter City' /> <br />

            <input name='pincode' type="text" value={state.pincode} onChange={handelchange} className='p-2 border rounded m-2' placeholder='Enter Pincode' /><br />
            <div className='flex gap-40'>
              <button className='p-2 bg-black text-white border rounded m-2' onClick={handelpre}>Pre.Page</button>
              <button className='p-2 bg-black text-white border rounded m-2' onClick={handelnext}>Next Page</button>
            </div>
          </div>

        </> } 

        { state.page==3 &&
        <>
          <div className='bg-red-600 mt-2 border rounded w-100 text-center'>

            <h1> your name: {state.name} </h1>
            <h1> your email: {state.email} </h1>
            <h1> your city: {state.city} </h1>
            <h1> your pincode: {state.pincode} </h1>
            <div className='flex gap-40'>
              <button className='p-2 bg-black text-white border rounded m-2' onClick={handelpre}>Pre.Page</button>
              <button className='p-2 bg-black text-white border rounded m-2' >submit</button>
            </div>
          </div>
        </>}

    </>
  )
}

export default ReducerForm