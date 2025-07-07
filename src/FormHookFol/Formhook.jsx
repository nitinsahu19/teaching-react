import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'




const Structur = z.object({
    name: z.string().min(2, "please enter vailed name"),
    email: z.string().email(8, "please enter vailed email"),
    mobilenum: z.string().min(10, "please enter vailed mobilenumber"),

})

function Formhook() {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(Structur), })


    const Submit = (data) => {
        console.log(data)
        toast.success("login successfull")        
        setTimeout(() => {
            navigate('/OtherSomething') 
        }, 1500); 

    }
    return (
        <>
            <div>
                <div className='text-center bg-amber-700 border rounded m-2'>
                    <form onSubmit={handleSubmit(Submit)}>
                        <input {...register('name')} type="text" placeholder='Enter your name' className='border rounded m-2 p-2' /><br />
                        {errors.name && <p className='text-red-400 text-sm'>{errors.name.message}</p>}

                        <input {...register('email')} type="email" placeholder='Enter your email' className='border rounded m-2 p-2' /><br />
                        {errors.email && <p className='text-red-400 text-sm'>{errors.email.message}</p>}

                        <input {...register('mobilenum')} type="text" placeholder='Enter your mobile number ' className='border rounded m-2 p-2' /><br />
                        {errors.mobilenum && <p className='text-red-400 text-sm'>{errors.mobilenum.message}</p>}

                        <button type='sumbmit' class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 cursor-pointer">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent roup-hover:dark:bg-transparent">Submit   </span>
                        </button>


                    </form>
                </div>
            </div>
            <ToastContainer />

        </>

    )
}

export default Formhook