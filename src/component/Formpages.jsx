import React, { useState , useReducer } from 'react'
import Formreduce , {initialState} from '../component/Formreduce'

const Formpages = () => { 
    const [state, dispatch] = useReducer(Formreduce, initialState)

    const Nexthandler = () => dispatch({ type: 'Next_Page' })
    const Prevhandler = () => dispatch({ type: 'Prev_Page' })
    const Resethandler = () => dispatch({ type: 'Reset' })

    const handlchange = (e) => {
        dispatch({
            type: 'Ubdate_Data',
            name: e.target.name,
            value: e.target.value
        })
    }

    return (
        <>
            {state.page === 1 && <div className='w-110 h-70 border-red-600 rounded-4xl border hover:border-8  hover:border-amber-500 p-5 mt-10 flex justify-center ml-10' >
                <div>
                    <div className='mt-5'>
                        <label>Name:</label>
                        <input name="name" value={state.name} onChange={handlchange} className="border w-60 h-8 rounded-2xl p-3 ml-1" type="text" placeholder="Enter your name!"/>

                    </div>
                    <div className='mt-5'>
                        <label>Email:</label>
                        <input name='email' onChange={handlchange} value={state.email} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="email" placeholder='Enter your Email!' />
                    </div>
                    <div className='mt-5'>
                        <label>Password:</label>
                        <input name='password' onChange={handlchange} value={state.password} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="number" placeholder='Enter your Password!' />
                    </div>
                    <button onClick={Nexthandler} className='w-25 h-9 rounded-2xl bg-red-600 cursor-pointer mt-5'>Next</button>
                </div>
            </div>}

            {state.page === 2 && <div className='w-80 h-70 border p-10 flex justify-center mt-10 ml-10' >
                <div>
                    <div className='mt-5'>
                        <label>city:</label>
                        <input name='city' onChange={handlchange} value={state.city} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="text" placeholder='Enter Your City Name!' />
                    </div>
                    <div className='mt-5'>
                        <label>PinCode:</label>
                        <input name='pincode' onChange={handlchange} value={state.pincode} className='border w-60 h-8 rounded-2xl p-3 ml-1' type="number" placeholder='Enter Your PinCode Name!' />
                    </div>
                    <div className='flex gap-10'>
                        <button onClick={Prevhandler} className='bg-red-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Back</button>
                        <button onClick={Nexthandler} className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>}

            {state.page === 3 && <div className='w-100 h-100 border p-10 flex justify-center mt-10 ml-10'>
                <form>
                    <button onClick={Prevhandler} className='bg-red-400 w-25 h-9 rounded-2xl cursor-pointer'>Back</button>
                    <div className='mt-5 flex gap-1'>
                        <label>Name:-</label>
                        <h1>{state.name}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>Email:-</label>
                        <h1>{state.email}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>Password:-</label>
                        <h1>{state.password}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>city:-</label>
                        <h1>{state.city}</h1>
                    </div>
                    <div className='mt-5 flex gap-1'>
                        <label>PinCode:-</label>
                        <h1>{state.pincode}</h1>
                    </div>
                    <button onClick={Resethandler} className='bg-green-500 w-25 h-9 mt-5 rounded-2xl cursor-pointer'>Sumbit</button>
                </form>
            </div>}
        </>
    )
}

export default Formpages
