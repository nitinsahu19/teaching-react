import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'

const Taskk = () => {

  const dummy = [
    { name: "Rahul", role: "Admin" },
    { name: "Suresh", role: "User" },
    { name: "Vikash", role: "Completed" },
    { name: "Ankit", role: "Active" }
  ]

  const [searchparams, setSearchparams] = useSearchParams()

  const roleFilter = searchparams.get('role') || "All"

  console.log(roleFilter)
  const filteredData = roleFilter === "All" ? dummy : dummy.filter((item) => item.role === roleFilter)

  


  const handleChange = (role) => {
    setSearchparams({ role })
  }
 


  return (
    <>
      <div className='p-5'>
        <div className='flex justify-around'>
          <h1 className='font-bold text-5xl text-center mt-20'>List</h1>
          <select onChange={(event) => handleChange(event.target.value)} className='w-30 mt-20 bg-green-500 border-3' name="" id="">
            <option value="All">All</option>
            <option value="User">User</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          {filteredData.map((item) => <div className='flex gap-1 ml-260 text-red-300 bg-pink-500 w-40 cursor-pointer p-3 mt-10 rounded-2xl'>
            <p>{item.name} :</p>
            <p>{item.role}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default Taskk



