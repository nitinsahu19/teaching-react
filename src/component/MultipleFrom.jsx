import React, { useState } from 'react'

const MultipleFrom = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [city,setCity] = useState('')
  const [pincode,setPincode] = useState('')
  const [page,setPage] = useState(1)


  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const handlePage = ()=>{
    setPage(page+1)
  }
  const handlepreview = ()=>{
    setPage(page-1)
  }
  
  return (
    <div>
      <p className='text-center font-medium text-3xl'>Details From</p>
      <div className='flex justify-center '>
        <form action="" onSubmit={handleSubmit} className='bg-gray-700 p-3 text-white'>
        {page===1?<div id='page-1'>
            <div>
            <label htmlFor="">Name</label><br/>
            <input required  value={name} onChange={(e)=>setName(e.target.value)} className='border p-1 rounded' type="text" placeholder='Enter Your Name'/>
          </div>
          <div>
            <label htmlFor="">Email</label><br/>
            <input required  value={email} onChange={(e)=>setEmail(e.target.value)} className='border p-1 rounded' type="email" placeholder='Enter Your Email'/>
          </div>
          <div className='p-2 text-end'>
            <button onClick={handlePage} className='bg-blue-400 p-1 rounded text-white'>Next</button>
          </div>
        </div>:''}
        {page===2?<div id='page-2'>
            <div>
            <label htmlFor="">City</label><br/>
            <input required  value={city} onChange={(e)=>setCity(e.target.value)} className='border p-1 rounded' type="text" placeholder='Enter Your City'/>
          </div>
          <div>
            <label htmlFor="">Pincode</label><br/>
            <input required  value={pincode} onChange={(e)=>setPincode(e.target.value)} className='border p-1 rounded' type="number" placeholder='Enter Your Pincode'/>
          </div>
          <div className='flex justify-between'>
                        <button onClick={handlepreview} className='bg-blue-400 p-1 rounded text-white'>Privew</button>
                        <button onClick={handlePage} className='bg-blue-400 p-1 rounded text-white'>Next</button>

          </div>
        </div>:""}
        {page===3?<div id='page-3'>
           <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{city}</p>
            <p>{pincode}</p>
                                    <button onClick={handlepreview} className='bg-blue-400 p-1 rounded text-white'>Privew</button>
            <button className='bg-blue-500 p-2 rounded'>Submit</button>
           </div>
        </div>:''}
        </form>
      </div>
    </div>
  )
}

export default MultipleFrom
