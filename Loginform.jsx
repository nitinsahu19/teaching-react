import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';



const LoginForm = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setlogin] = useState(false)

    const navigate = useNavigate()



    const log = () => {
        if (name === "g" && password === "12345") {
            // setlogin(true)
            navigate('/movie')
            localStorage.setItem('coin', JSON.stringify(true))
        }

        else {

            alert("please enter vailed name and password")


        }
    }


    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login Form</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" placeholder="Enter name" required />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" placeholder="Enter password" required />
                    </div>

                    <button onClick={log}
                        type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded" >Submit</button>

                </form>


            </div>


        </>

    );
};

export default LoginForm;
