import React, { useState } from 'react'

const Formpages = () => {
    const [page, setpage] = useState(1)
    const [Form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        pincode: ''
    })

    return (
        <>
            {page === 1 && <div className= 'w-90 h-80 border p-5 mt-10 flex justify-center ml-10' >
                <div>
                    <div className='mt-5'>
                        <label>Name:</label>
                        <input value={Form.name} onChange={(e) => setForm({ ...Form, name: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter your name!' />
                    </div>
                    <div className='mt-5'>
                        <label>Email:</label>
                        <input value={Form.email} onChange={(e) => setForm({ ...Form, email: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="email" placeholder='Enter your Email!' />
                    </div>
                    <div className='mt-5'>
                        <label>Password:</label>
                        <input value={Form.password} onChange={(e) => setForm({ ...Form, password: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter your Password!' />
                    </div>
                    <button onClick={() => setpage(page + 1)} className= 'w-25 h-9 rounded-2xl bg-red-600 cursor-pointer mt-5'>Next</button>
                </div>
            </div>}

            {page === 2 &&<div className='w-80 h-70 border p-10 flex justify-center mt-10 ml-10' >
                <div>
                    <div className='mt-5'>
                        <label>city:</label>
                        <input value={Form.city} onChange={(e) => setForm({ ...Form, city: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter Your City Name!' />
                    </div>
                    <div className='mt-5'>
                        <label>PinCode:</label>
                        <input value={Form.pincode} onChange={(e) => setForm({ ...Form, pincode: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter Your PinCode Name!' />
                    </div>
                    <div className='flex gap-10'>
                        <button onClick={() => setpage(page - 1)} className='bg-red-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Back</button>
                        <button onClick={() => setpage(page + 1)} className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>}
            
           {page ===3 && <div className='w-100 h-100 border p-10 flex justify-center mt-10 ml-10'>
                <form>
                    <button onClick={() => setpage(page - 1)} className='bg-red-400 w-25 h-9 rounded-2xl cursor-pointer'>Back</button>
                    <div className='mt-5 flex gap-1'>
                        <label>Name:-</label>
                        <h1>{Form.name}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>Email:-</label>
                        <h1>{Form.email}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>Password:-</label>
                        <h1>{Form.password}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>city:-</label>
                        <h1>{Form.city}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>PinCode:-</label>
                        <h1>{Form.pincode}</h1>
                    </div>
                    <button className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Save</button>
                </form>
            </div>}
        </>
    )
}

export default Formpages
