import React, { useState } from 'react'

function MultipalFrom() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [page, setPage] = useState(1)


  const onSubmitBtn = (e) => {
    e.preventDefault()
  }

  const next = () => {
    setPage(page + 1)
  }
  const prev = () => {
    setPage(page - 1)
  }

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmitBtn}>
          {page === 1 ? <div className='mt-30 w-50 mx-auto'>
            <label htmlFor="" className='font-bold text-2xl'>Page Deatils </label><br />
            <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your name' /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 mt-4 px-2 py-1' type="email" placeholder='Enter Your email' />
            <div className='text-end mt-3 font-bold'>
              <button onClick={next} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Next</button>
            </div>
          </div> : ""}
          {page === 2 ? <div className='mt-10 w-50 mx-auto'>
            <label htmlFor="" className='font-bold text-2xl'>City Deatils </label><br />
            <input value={city} onChange={(e) => setCity(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your city' /><br />
            <input value={pincode} onChange={(e) => setPincode(e.target.value)} className='border-2 mt-4 px-2 py-1' type="number" placeholder='Enter Your pincode' />
            <div className='flex justify-between font-bold mt-3'>
              <button onClick={prev} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Back</button>
              <button onClick={next} className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer'>Next</button>
            </div>
          </div> : ""}
          {page === 3 ? <div className='mt-10'>
            <label className='font-bold text-2xl' htmlFor="">Preview</label><br />
            <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your name' /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 mt-4 px-2 py-1' type="email" placeholder='Enter Your email' /><br />
            <input value={city} onChange={(e) => setCity(e.target.value)} className='border-2 mt-4 px-2 py-1' type="text" placeholder='Enter Your city' /><br />
            <input value={pincode} onChange={(e) => setPincode(e.target.value)} className='border-2 mt-4 px-2 py-1' type="number" placeholder='Enter Your pincode' />
            <div>
              <button className='bg-green-600 px-3 py-1 rounded-lg cursor-pointer' onClick={prev}>prev</button>
              <button type='submit' className='bg-blue-600 px-3 py-1 rounded-lg mt-4'>Sumbit</button>
            </div>
          </div> : ""}
        </form>
      </div>
    </>
  )
}

export default MultipalFrom
