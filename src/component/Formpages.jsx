import React, { useState } from 'react'

const Formpages = () => {
    const [page, setpage] = useState(1)
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        pincode: ''
    })


    return (
        <>
            <div className={page == 1 ? 'w-90 h-80 border-5 border-green-600  hover:border-red-600 rounded-2xl p-5 mt-10 flex justify-center ml-10' : "hidden"}>
                <div>
                    <div className='mt-5'>
                        <label>Name:</label>
                        <input value={form.name} onChange={(e) => setForm({ name: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter your name!' />
                    </div>
                    <div className='mt-5'>
                        <label>Email:</label>
                        <input value={form.email} onChange={(e) => setForm({ email: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="email" placeholder='Enter your Email!' />
                    </div>
                    <div className='mt-5'>
                        <label>Password:</label>
                        <input value={form.password} onChange={(e) => setForm({ password: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter your Password!' />
                    </div>
                    <button onClick={() => setpage(page + 1)} className='w-25 h-10 rounded-2xl mt-5 ml-5 cursor-pointer bg-green-600'>Next</button>
                </div>
            </div>

            <div className={page == 2 ? 'w-80 h-70 border-5 border-red-600  hover:border-green-600 rounded-2xl p-10 flex justify-center mt-10 ml-10' : "hidden"}>
                <div>
                    <div className='mt-5'>
                        <label>city:</label>
                        <input value={form.city} onChange={(e) => setForm({ city: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter Your City Name!' />
                    </div>
                    <div className='mt-5'>
                        <label>PinCode:</label>
                        <input value={form.pincode} onChange={(e) => setForm({ pincode: e.target.value })} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter Your PinCode Name!' />
                    </div>
                    <div className='flex gap-10'>
                        <button onClick={() => setpage(page - 1)} className='bg-red-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Back</button>
                        <button onClick={() => setpage(page + 1)} className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>

            <div className={page == 3 ? 'w-110 h-110 border-5 border-pink-600  hover:border-yellow-600 rounded-2xl p-10 flex justify-center mt-10 ml-10 ' : "hidden"}>
                <form action="">
                    <button className='bg-red-400 w-25 h-9 rounded-2xl cursor-pointer'>Back</button>
                    <div className='mt-5'>
                        <label>Name:</label>
                        <input value={form.name} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter your name!' />
                    </div>
                    <div className='mt-5'>
                        <label>Email:</label>
                        <input value={form.email} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="email" placeholder='Enter your Email!' />
                    </div>
                    <div className='mt-5'>
                        <label>Password:</label>
                        <input value={form.password} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter your Password!' />
                    </div>
                    <div className='mt-5'>
                        <label>city:</label>
                        <input value={form.city} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter Your City Name!' />
                    </div>
                    <div className='mt-5'>
                        <label>PinCode:</label>
                        <input value={form.pincode} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="password" placeholder='Enter Your PinCode Name!' />
                    </div>
                    <button className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Save</button>
                </form>
            </div>
        </>
    )
}

export default Formpages
