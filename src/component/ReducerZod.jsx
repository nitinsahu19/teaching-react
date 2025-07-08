import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import uselocalstorage from '../hooks/uselocalstorage'

const ReducerZod = () => {

  const [todo, setTodo] = uselocalstorage("Datas", [])

  const schema = z.object({
    name: z.string().min(2, "Current Name!"),
    email: z.string().min(2, "Current Email"),
    password: z.string().min(2, "Current Password:"),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data, "Data Resolve")
    setTodo([...todo, data])
    reset()
  }


  const handldelete = (index) => {
    const deleteTodo = todo.filter((i, item) => {
      return item !== index
    })
    setTodo(deleteTodo)
  }


  return (
    <>
      <div className='flex gap-100'>
        <form className='w-100 mt-10 ml-10 p-5 h-90 border-2' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register('name')} className='w-90 h-10 rounded-2xl p-2 border mt-5' placeholder='Enter Name' />

            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

          </div>
          <div>
            <input {...register('email')} className='w-90 h-10 rounded-2xl p-2 border mt-5' placeholder='Enter email' />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div>
            <input {...register('password')} className='w-90 h-10 rounded-2xl p-2 border mt-5' placeholder='Enter password' />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <button type='submit' className='w-90 mt-5 cursor-pointer rounded-2xl h-10 bg-green-500'>Sumbit</button> 
        </form>


        {todo.length > 0 &&
          <div className='w-90 mt-10 border-2 p-4 overflow-y-auto max-h-110'>
            <h2 className='text-xl font-bold mb-2'>Todo List</h2>

            {todo.map((item, index) => (
              <div key={index} className='p-3 border-b mb-2 flex justify-between items-start'>
                <div>
                  <p className='font-bold'>{index + 1}</p>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Password: {item.password}</p>
                </div>
                <button className='bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-red-600'
                  onClick={() => handldelete(index)}> Remove </button>
              </div>
            ))}
          </div>
        }

      </div>
    </>
  )
}

export default ReducerZod





