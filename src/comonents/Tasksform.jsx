import React, { useReducer, useState } from 'react'
import { FaBackward,   FaArrowRight } from "react-icons/fa";
import { initialState } from './Multipal-form-step';

function Tasksform() {
    
  const [State, dispatch] = useReducer(Tasksform,initialState);
  const handlechange =(e)=>{
    dispatch({
        type:"update_field",
        field:e.target.name ,
        value:e.target.value
    })
  }
//   const [name, setname] = useState();
//   const [email, setemail] = useState();
//   const [city, setcity] = useState();
//   const [pincode, setpincode] = useState();

  
  const handlnext = () => {
    dispatch({   
        type:"nextfield"
    })
  }
  const handlpre = () => {
    dispatch({
        type:"prefield"
    })
  }

  return (
    <>
      {/* Page 1 */}
      { State.page === 1 &&
        <div className='bg-red-300 max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg' >
          <input type="text" placeholder="Name" value={State.name} onChange={handlechange} className="w-full p-2 mb-4 border border-gray-300 rounded"/>
          <input type="text" placeholder="Email" value={State.email} onChange={handlechange} className="w-full p-2 mb-4 border border-gray-300 rounded"/>
          <button className='bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800'onClick={handlnext}>
            Next <FaArrowRight className="inline ml-1" />
          </button>
        </div>
      }

      {/* Page 2 */}
      {State.page === 2 &&
           <div className='bg-red-300 max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg'>
          <input type="text"placeholder="City"value={State.city}onChange={handlechange}className="w-full p-2 mb-4 border border-gray-300 rounded"/>
          <input type="text" required placeholder="Pincode" value={State.pincode} onChange={handlechange} className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="flex justify-between">
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={handlpre} >
              <FaBackward />
            </button>
            <button  className='bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800'onClick={handlnext}>
              NEXT
            </button>
          </div>
        </div>
      }

      {/* Page 3 */}
      { State.page === 3 &&
        <div className='bg-red-300 max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg'>
          <h4 className="mb-2">Your name = {State.name}</h4>
          <h4 className="mb-2">Your email = {State.email}</h4>
          <h4 className="mb-2">Your city = { State.city}</h4>
          <h4 className="mb-4">Your pincode = {State.pincode}</h4>
          <div className="flex justify-between">
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
onClick={handlpre}
            >
              <FaBackward />
            </button>
            <button
              className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
            >
              Submit
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default Tasksform
