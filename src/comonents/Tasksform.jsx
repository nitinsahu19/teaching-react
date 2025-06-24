import React, { useState } from 'react'
import { FaBackward } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function Tasksform() {
  const [page, setpage] = useState(1);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [city, setcity] = useState();
  const [pincode, setpincode] = useState();



  const click = () => {
    setpage(page + 1)
  }
  const clicke = () => {
    setpage(page - 1)
  }
  return (<>
    {/* page1 */}
    {page === 1 ? <div className='border bg-red-300 w-50 m-5  rounded-2xl'>
      <div className=''>
        <input type="text"  placeholder="name" value={name} onChange={(e) => setname(e.target.value)} className="w-25 p-2 m-3 mb-4 border border-gray-300 rounded" />
      </div>
      <input type="text" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} className="w-25 p-2 mb-4 m-3 border border-gray-300 rounded"
      />
      <div>
        <button className=' bg-red-700 m-3 text-white p-2 rounded  ' onClick={click} >Next
 </button>
      </div>  
       </div> :"" }
       {page === 2 ? 
        <div className='border bg-red-300 w-50 mt-5 m-5  rounded-2xl'>
          <div className=''>
            <input type="text" placeholder="city" value={city} onChange={(e) => setcity(e.target.value)} className="w-25 p-2 m-3 mb-4 border border-gray-300 rounded" />
          </div>
          <input type="text" placeholder="pincode" value={pincode} onChange={(e) => setpincode(e.target.value)} className="w-25 p-2 m-3 mb-4 border border-gray-300 rounded"
          />
          <div>
            <button className=' bg-blue-500 text-white m-3 p-2 rounded ' onClick={clicke}> <FaBackward /> </button>
            <button className=' bg-red-700 text-white text-size-12 m-3 p-2 rounded ' onClick={click}>NEXT
</button>
          </div>   </div>
      
       : ""}
        {page===3?<div className='border bg-red-300 w-50 mt-9 m-5 p-4  rounded-2xl'>
          <h4>Your name = {name}</h4>
          <h4>Your email = {email}</h4>
          <h4>Your city = {city}</h4>
          <h4>Your pincode = {pincode}</h4>
          <div>
            <button className='  bg-blue-500 text-white p-2 m-3 rounded ' onClick={clicke}><FaBackward /></button>
            <button className=' bg-green-600 text-white p-2 m-3 rounded '>submit</button>
          </div>   </div>:""}  




  </>)
}

export default Tasksform
