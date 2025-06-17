import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const validation = () => {
        if (password === "") {
            alert('Please Enter Password')
            
        }else {

        }
    }
    return (
        <>
            <div className='flex justify-center items-center mt-20'>
                <div className='border-2 p-5 py-8'>
                    <h1 className='font-bold text-xl'> Log in</h1>
                    <form action="">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className='outline-0 mt-3 w-70 border-2 rounded px-3 py-1' type="text" placeholder='Username ' /> <br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-0 w-70 mt-4 border-2 rounded px-3 py-1' type="text" placeholder='Password ' /><br />
                        <button onClick={validation} className='bg-green-600 px-4 py-1 rounded-lg mt-5 cursor-pointer'>Sumbit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
