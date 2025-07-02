import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import Navbar from './Navbar';
// import { email, number } from 'zod/v4-mini';

const UseForm = (props) => {
    const schema = z.object({
        email: z.string().email("please enter valid email"),
        name: z.string().min(5, "name valid 5 character"),
        password: z.string().min(8, "valid password 8 later").max(15),
        number: z.string().length(10, "Number must be exactly 10 digits").regex(/^\d+$/, "Only digits allowed"),
    })
    const { register, handleSubmit, formState: { errors },reset } = useForm({ resolver: zodResolver(schema) })
    const handleForm = (data, e) => {
        console.log(data); 
        reset();
    }
    return (
        <div>
                  <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />
            
            <div className="min-h-screen  flex items-center justify-center p-4">
                <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6" onSubmit={handleSubmit(handleForm)}>
                    <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Name</label>
                        <input
                            {...register("name")}
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className='text-red-600 font-semibold text-lg'>{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Email</label>
                        <input
                            name='email'
                            {...register("email")}

                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className='text-red-600 font-semibold text-lg'>{errors.email.message}</p>}

                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Password</label>
                        <input
                            name='password'
                            {...register("password")}

                            type="password"
                            placeholder="Enter your password"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className='text-red-600 font-semibold text-lg'>{errors.password.message}</p>}

                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Phone Number</label>
                        <input
                            name='number'
                            {...register("number")}

                            type="number"
                            placeholder="Enter your number"
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.number && <p className='text-red-600 font-semibold text-lg'>{errors.number.message}</p>}

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UseForm
