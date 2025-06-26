import React, { useReducer } from 'react'
import { fromReducer, intailvalue } from '../reducers/fromreducer'

function MultipalFrom() {


  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [city, setCity] = useState('')
  // const [pincode, setPincode] = useState('')
  // const [page, setPage] = useState(1)

  // const [state, dispatch] = useReducer(formreducer, inState)
  const [state,dispatch] = useReducer(fromReducer,intailvalue)
  const handleChange = (e)=>{
    dispatch({
      type:"update",
      key:e.target.name,
      value:e.target.value
    })
  }
  const handleNext = ()=>{
    dispatch({
      type:"next"
    })
  }


  const handleBack = () =>{
    dispatch({
      type:"pre"
    })
  }
  const handleReset = () =>{
    dispatch({
      type:"reset"
    })
  }
  // const handleChange = (e) => {
  //   dispatch({
  //     type: "UPDATE_FIELD",
  //     field: e.target.name,
  //     value: e.target.value
  //   })
  // }



  const onSubmitBtn = (e) => {
    e.preventDefault()
  }

  const hanlesubmit =()=>{
    handleReset()
    alert('from submited')
  }

  // const next = () => {
  //   setPage(page + 1)
  // }
  // const prev = () => {
  //   setPage(page - 1)
  // }

  // const handleNext = () => dispatch({ type: "NEXT_STEP" })
  // const handleBack = () => dispatch({ type: "PREV_STEP" })
  // const handleReset = () => dispatch({ type: "RESET_STEP" })

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmitBtn}>
          {state.step === 1 ? <div className='mt-10 w-50 mx-auto'>
            <label htmlFor="" className='font-bold text-2xl'>Page Deatils </label><br />
            <input name='name' value={state.name} onChange={handleChange} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your name' /><br />
            <input name='email' value={state.email} onChange={handleChange} className='border-2 mt-4 px-2 py-1' type="email" placeholder='Enter Your email' />
            <div className='text-end mt-3 font-bold'>
              <button onClick={handleNext} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Next</button>
            </div>
          </div> : ""}
          {state.step === 2 ? <div className='mt-10 w-50 mx-auto'>
            <label htmlFor="" className='font-bold text-2xl'>City Deatils </label><br />
            <input name='city' value={state.city} onChange={handleChange} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your city' /><br />
            <input name='pincode' value={state.pincode} onChange={handleChange} className='border-2 mt-4 px-2 py-1' type="number" placeholder='Enter Your pincode' />
            <div className='flex justify-between font-bold mt-3'>
              <button onClick={handleBack} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Back</button>
              <button onClick={handleNext} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Next</button>
            </div>
          </div> : ""}
          {state.step === 3 ? <div className='mt-10 w-70 mx-auto border-2 p-8'>
            <label className='font-bold text-2xl' htmlFor="">Preview</label><br />
            {/* <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your name' /><br /> */}
            <p className='font-bold mt-3'>Name : {state.name}</p>
            {/* <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 mt-4 px-2 py-1' type="email" placeholder='Enter Your email' /><br /> */}
            <p className='font-bold mt-3'>Email : {state.email}</p>
            {/* <input value={city} onChange={(e) => setCity(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your city' /><br /> */}
            <p className='font-bold mt-3'>City : {state.city}</p>
            {/* <input value={pincode} onChange={(e) => setPincode(e.target.value)} className='border-2 mt-4 px-2 py-1' type="number" placeholder='Enter Your pincode' /> */}
            <p className='font-bold mt-3'>Pincode : {state.pincode}</p>
            <div className='flex justify-between'>
              <button className='bg-green-600 px-4 py-1 mt-4 rounded-lg cursor-pointer font-bold' onClick={handleBack}>prev</button>
              <button onClick={hanlesubmit} type='submit' className='bg-blue-600 px-3 py-1 rounded-lg mt-4 cursor-pointer font-bold'>Sumbit</button>
            </div>
          </div> : ""}
        </form>
      </div>
    </>
  )
}

export default MultipalFrom
