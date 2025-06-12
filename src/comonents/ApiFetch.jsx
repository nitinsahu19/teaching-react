import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [data,setData] = useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((value)=>{
        setData(value)
    }).catch((err)=>{
        console.log(err,'something went wrong');
        
    })
   },[])
       console.log(data);

    
  return (
    <>
    <div  className=" max-w-7xl  mx-auto p-4 m-5 bg-gray-100 ">
      <h2 className="text-5xl font-bold text-center mb-7 ">Users List</h2>
      <ul className="space-y-4 grid grid-cols-3 gap-4">
        {data.map(user => (
          <li key={user.id} className="bg-white  p-4 rounded-xl ">
            <p className="text-lg  text-blue-600">Name- {user.name}</p>
            <p className="text-sm text-gray-700">Email= {user.email}</p>
            <p className="text-sm text-gray-700">City={user.address.city}</p>
          </li>
        ))}
      </ul>
    </div></>

  )  
} 

export default ApiFetch
