import React, { useReducer, useState } from 'react'
import Navbar from './Navbar'
import { fromReducer, initialState } from '../reducer/resduserfun'

const MultipleFrom = (props) => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [city, setCity] = useState('')
  // const [pincode, setPincode] = useState('')
  // const [page, setPage] = useState(1)


  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // const handlePage = () => {
  //   if (name === "" || email === '') {
  //     alert('please enter value')
  //     return
  //   } else {
  //     setPage(page + 1)
  //   }
  // }
  // const handlePage2 = () => {
  //   if (city === "" || pincode === '') {
  //     alert('please enter value')
  //     return
  //   } else {
  //     setPage(page + 1)
  //   }
  // }
  // const handlepreview = () => {
  //   setPage(page - 1)
  // }
const [state,dispatch] = useReducer(fromReducer, initialState)
const handlechange  = (e)=>{
  dispatch({  
    type:"updated-filed",
    field:e.target.name,
    value:e.target.value
  })
}
  // const handlenext=()=>{
  //   dispatch({type:"next-step"})
  // }

  const handlenext = () => {
    if (state.name === "" || state.email === '') {
      alert('please enter value')
      return
    } else {
 dispatch({type:"next-step"})    }
  }
  const handlenext2 = () => {
    if (state.city === "" || state.pincode === '') {
      alert('please enter value')
      return
    } else {
 dispatch({type:"next-step"})    }
  }
  const handlepre=()=>{
    dispatch({type:"pre-step"})
  }
  const handlereset=()=>{
    dispatch({type:"reset"})
  }

const handlesubmit = ()=>{
  handlereset();
  alert('from submited')
}
  return (
    <>
      <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />


      {/* <div>
        <p className='text-center font-medium text-3xl'>Details From</p>
        <div className='flex justify-center '>
          <form action="" onSubmit={handleSubmit} className='bg-gradient-to-r from-purple-700 via-pink-600 to-red-500  p-3 rounded text-white w-100 mt-4 font-medium '>
            {page === 1 ? <div id='page-1'>
              <div>
                <label htmlFor="">Name</label><br />
                <input required value={name} onChange={(e) => setName(e.target.value)} className='border p-1 rounded w-full' type="text" placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="">Email</label><br />
                <input required value={email} onChange={(e) => setEmail(e.target.value)} className='border p-1 rounded w-full' type="email" placeholder='Enter Your Email' />
              </div>
              <div className='p-2 text-end'>
                <button onClick={handlePage} className='bg-blue-500 ps-3 pe-3 p-1 font-medium rounded text-white mt-3 cursor-pointer'>Next</button>
              </div>
            </div> : ''}
            {page === 2 ? <div id='page-2'>
              <div>
                <label htmlFor="">City</label><br />
                <input required value={city} onChange={(e) => setCity(e.target.value)} className='border p-1 rounded w-full' type="text" placeholder='Enter Your City' />
              </div>
              <div>
                <label htmlFor="">Pincode</label><br />
                <input required value={pincode} onChange={(e) => setPincode(e.target.value)} className='border p-1 rounded w-full' type="number" placeholder='Enter Your Pincode' />
              </div>
              <div className='flex justify-between p-2 mt-2'>
                <button onClick={handlepreview} className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Privew</button>
                <button onClick={handlePage2} className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Next</button>

              </div>
            </div> : ""}
            {page === 3 ? <div id='page-3'>
              <div className='p-2'>
                <p className='font-medium text-lg '>Name:- {name}</p>
                <p className='font-medium text-lg '>Email:-{email}</p>
                <p className='font-medium text-lg '>City:- {city}</p>
                <p className='font-medium text-lg '>PinCode:- {pincode}</p>
                <button onClick={handlepreview} className='bg-blue-500 p-1 ps-2 pe-2 font-medium mt-4 rounded text-white cursor-pointer'>Privew</button>
                <button className='bg-blue-500 p-2 rounded w-full mt-3 cursor-pointer'>Submit</button>
              </div>
            </div> : ''}
          </form>
        </div>
      </div> */}




<div>
        <p className='text-center font-medium text-3xl'>Details From</p>
        <div className='flex justify-center '>
          <form action="" onSubmit={handleSubmit} className='bg-gradient-to-r from-purple-700 via-pink-600 to-red-500  p-3 rounded text-white w-100 mt-4 font-medium '>
            {state.step === 1 ? <div id='page-1'>
              <div>
                <label htmlFor="">Name</label><br />
                <input required value={state.name} onChange={handlechange}  name='name' className='border p-1 rounded w-full' type="text" placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="">Email</label><br />
                <input required value={state.email} onChange={handlechange} name='email'  className='border p-1 rounded w-full' type="email" placeholder='Enter Your Email' />
              </div>
              <div className='p-2 text-end'>
                <button  onClick={handlenext} className='bg-blue-500 ps-3 pe-3 p-1 font-medium rounded text-white mt-3 cursor-pointer'>Next</button>
              </div>
            </div> : ''}
            {state.step === 2 ? <div id='page-2'>
              <div>
                <label htmlFor="">City</label><br />
                <input required  value={state.city} onChange={handlechange} name='city'   className='border p-1 rounded w-full' type="text" placeholder='Enter Your City' />
              </div>
              <div>
                <label htmlFor="">Pincode</label><br />
                <input required value={state.pincode} onChange={handlechange} name='pincode'   className='border p-1 rounded w-full' type="number" placeholder='Enter Your Pincode' />
              </div>
              <div className='flex justify-between p-2 mt-2'>
                <button  onClick={handlepre} className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Privew</button>
                <button onClick={handlenext2}  className='bg-blue-500 p-1 rounded text-white font-medium ps-2 pe-2 cursor-pointer'>Next</button>

              </div>
            </div> : ""}
            {state.step === 3 ? <div id='page-3'>
              <div className='p-2'>
                 <h3 className="font-medium text-2xl mb-3">Confirm your details:</h3>
                <p className='font-semibold text-lg '><span className='font-bold'>Name :- </span>{state.name}</p>
                <p className='font-semibold text-lg '><span className='font-bold'>Email :- </span>{state.email}</p>
                <p className='font-semibold text-lg '><span className='font-bold'>City :- </span>{state.city}</p>
                <p className='font-semibold text-lg '><span className='font-bold'>PinCode :- </span> {state.pincode}</p>
                <button  className='bg-blue-500 p-1 ps-2 pe-2 font-medium mt-4 rounded text-white cursor-pointer' onClick={handlepre}>Privew</button>
                <button className='bg-blue-500 p-2 rounded w-full mt-3 cursor-pointer' onClick={handlesubmit}>Submit</button>
              </div>
            </div> : ''}
          </form>
        </div>
      </div> 
    </>
  )
}

export default MultipleFrom
