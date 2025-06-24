import React, { useState } from 'react'
import Navbar from './Navbar'

const MultipleFrom = (props) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [city,setCity] = useState('')
  const [pincode,setPincode] = useState('')
  const [page,setPage] = useState(1)


  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const handlePage = ()=>{
    if(name===""||email===''){
      alert('please enter value')
      return
    }else{
      setPage(page+1)
    }
  }
  const handlePage2 = ()=>{
    if(city===""||pincode===''){
      alert('please enter value')
      return
    }else{
      setPage(page+1)
    }
  }
  const handlepreview = ()=>{
    setPage(page-1)
  }
  
  return (
    <>
          <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />
    
    
    <div>
      <p className='text-center font-medium text-3xl'>Details From</p>
      <div className='flex justify-center '>
        <form action="" onSubmit={handleSubmit} className='bg-gradient-to-r from-purple-700 via-pink-600 to-red-500  p-3 rounded text-white w-100 mt-4 font-medium '>
        {page===1?<div id='page-1'>
            <div>
            <label htmlFor="">Name</label><br/>
            <input required  value={name} onChange={(e)=>setName(e.target.value)} className='border p-1 rounded w-full' type="text" placeholder='Enter Your Name'/>
          </div>
          <div>
            <label htmlFor="">Email</label><br/>
            <input required  value={email} onChange={(e)=>setEmail(e.target.value)} className='border p-1 rounded w-full' type="email" placeholder='Enter Your Email'/>
          </div>
          <div className='p-2 text-end'>
            <button onClick={handlePage} className='bg-blue-500 ps-3 pe-3 p-1 font-medium rounded text-white mt-3 cursor-pointer'>Next</button>
          </div>
        </div>:''}
        {page===2?<div id='page-2'>
            <div>
            <label htmlFor="">City</label><br/>
            <input required  value={city} onChange={(e)=>setCity(e.target.value)} className='border p-1 rounded w-full' type="text" placeholder='Enter Your City'/>
          </div>
          <div>
            <label htmlFor="">Pincode</label><br/>
            <input required  value={pincode} onChange={(e)=>setPincode(e.target.value)} className='border p-1 rounded w-full' type="number" placeholder='Enter Your Pincode'/>
          </div>
          <div className='flex justify-between p-2 mt-2'>
                        <button onClick={handlepreview} className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Privew</button>
                        <button onClick={handlePage2} className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Next</button>

          </div>
        </div>:""}
        {page===3?<div id='page-3'>
           <div className='p-2'>
            <p className='font-medium text-lg '>{name}</p>
            <p className='font-medium text-lg '>{email}</p>
            <p className='font-medium text-lg '>{city}</p>
            <p className='font-medium text-lg '>{pincode}</p>
                                    <button onClick={handlepreview} className='bg-blue-500 p-1 ps-2 pe-2 font-medium mt-4 rounded text-white cursor-pointer'>Privew</button>
            <button className='bg-blue-500 p-2 rounded w-full mt-3 cursor-pointer'>Submit</button>
           </div>
        </div>:''}
        </form>
      </div>
    </div>
    </>
  )
}

export default MultipleFrom
