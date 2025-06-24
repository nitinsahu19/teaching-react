import React, { useState } from 'react'

function MultipleForm() {

  const[page,setpage]=useState(0)
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[city,setcity]=useState('')
  const[pincode,setpincode]=useState('')
 

  const click = ()=>{
    setpage(page + 1)
  }
  const clickpre = ()=>{
    setpage(page -1)
  }
  

  return(
    <>

{page === 0 ? <>

<div className='bg-red-600 border rounded w-100 text-center'>

        <input value={name} type="text"  onChange={(e)=>setname(e.target.value)}   className='p-2 border rounded m-2' placeholder='Enter Name' /> <br/>
        <input value={email} type="email" onChange={(e)=>setemail(e.target.value)}  className='p-2 border rounded m-2'  placeholder='Enter Email' /><br/>
        <button className='p-2 bg-black text-white border rounded m-2' onClick={click}>Next Page</button> 
    </div>
</>  :  page===1 ? 
<>
<div className='bg-red-600 mt-2 border rounded w-100 text-center'>

        <input value={city} type="text"  onChange={(e)=>setcity(e.target.value)}   className='p-2 border rounded m-2' placeholder='Enter City' /> <br/>
        <input value={pincode} type="text"  onChange={(e)=>setpincode(e.target.value)} className='p-2 border rounded m-2'  placeholder='Enter Pincode' /><br/>
       <div className='flex gap-40'>
         <button className='p-2 bg-black text-white border rounded m-2' onClick={clickpre}>Pre.Page</button> 
         <button className='p-2 bg-black text-white border rounded m-2' onClick={click}>Next Page</button> 
       </div>
    </div>

</> : 
<>
<div className='bg-red-600 mt-2 border rounded w-100 text-center'>

        <h1> your name: {name} </h1>
        <h1> your email: {email} </h1>
        <h1> your city: {city} </h1>
        <h1> your pincode: {pincode} </h1>
        <div className='flex gap-40'>
         <button className='p-2 bg-black text-white border rounded m-2' onClick={clickpre}>Pre.Page</button> 
         <button className='p-2 bg-black text-white border rounded m-2' >submit</button> 
       </div>
    </div>

</>}
    
    



    



    





    
   
  
  </>
  )
}

export default MultipleForm