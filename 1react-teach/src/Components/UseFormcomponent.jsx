import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const schma = z.object({
  name: z.string().min(3, 'Please fill Valid name'),
  email: z.string(),
  password: z.string().min(8, 'please fill the 8 charters')
})
function UseFormComponent() {

  const {
    register, handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schma)
  });


  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
          <h2 className="text-xl font-semibold text-center">Register</h2>
          <input {...register('name')} type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          <input {...register("email")} type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          <input {...register('password')} type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"> Register </button>
        </form>
      </div>

    </>
  )
}

export default UseFormComponent
