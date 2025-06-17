import React from 'react'

const Login = () => {
    return (
        <>

            <div className='border w-80 p-10 mt-10 ml-10 h-80'>
                <input className='border w-40 h-10 rounded-2xl p-2' type="text" placeholder='Enter The Page' />
                <input className='border w-40 h-10 rounded-2xl p-2 mt-3' type="password" placeholder='Enter The password' />
                <div>
                    <button className='bg-amber-300 w-25 h-10 rounded-2xl mt-10'>Click me</button>
                </div>
            </div>
        </>
    )
}

export default Login
