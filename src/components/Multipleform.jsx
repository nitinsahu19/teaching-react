import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
function Multipleform() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [city, setcity] = useState('');
  const [pin, setpin] = useState('');
  const [page, setpage] = useState(0);
  const { theme } = useContext(ThemeContext)



  return (
    <>
      {page === 0 && (
        <div className={`flex justify-center items-center min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
          <div className="p-10 rounded border border-gray-700 w-full max-w-md">
            <h1 className="text-2xl text-center mb-6">Form 1</h1>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input onChange={(e) => setname(e.target.value)} className={` ${theme === "light" ? "bg-white text-black placeholder:text-black" : "bg-black text-white placeholder:text-white"} w-full border border-gray-600 p-2 rounded bg-transparent `} type="text" placeholder="Enter Name" />
              <input onChange={(e) => setemail(e.target.value)} className={` ${theme === "light" ? "bg-white text-black placeholder:text-black" : "bg-black text-white placeholder:text-white"} w-full border border-gray-600 p-2 rounded bg-transparent `} type="email" placeholder="Enter Email" />
              <div className="flex justify-end">
                <button type="button" onClick={() => setpage(1)} className="px-4 py-2 border border-gray-600 rounded">Next Page</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {page === 1 &&
        (
          <div className={`flex justify-center items-center min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} `}>
            <div className="p-10 rounded border border-gray-700 w-full max-w-md">
              <h1 className="text-2xl text-center mb-6">Form 2</h1>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input onChange={(e) => setcity(e.target.value)} className={`w-full border border-gray-600 p-2 rounded ${theme === "light" ? "bg-white text-black placeholder:text-black" : "bg-black text-white placeholder:text-white"}`} type="text" placeholder="Enter City" />
                <input onChange={(e) => setpin(e.target.value)} className={`w-full border border-gray-600 p-2 rounded ${theme === "light" ? "bg-white text-black placeholder:text-black" : "bg-black text-white placeholder:text-white"}`} type="text" placeholder="Enter Pincode" />
                <div className="flex justify-between">
                  <button type="button" onClick={() => setpage(0)} className="px-4 py-2 border border-gray-600 rounded">Previous</button>
                  <button type="button" onClick={() => setpage(2)} className="px-4 py-2 border border-gray-600 rounded">Next</button>
                </div>
              </form>
            </div>
          </div>
        )
      }
      {page === 2 &&
        (
          <div className={`flex justify-center items-center min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} `}>
            <div className="p-10 rounded border border-gray-700 w-full max-w-md">
              <h1 className="text-2xl text-center mb-6">Details Page</h1>
              <div className={`space-y-4 text-sm ${theme === "light" ? "bg-white text-black " : "bg-black text-white "}`}>
                <div className={`p-3 border border-gray-600 rounded `}>
                  <p className="text-gray-600">Name</p>
                  <p>{name}</p>
                </div>
                <div className="p-3 border border-gray-600 rounded">
                  <p className="text-gray-600">Email</p>
                  <p>{email}</p>
                </div>
                <div className="p-3 border border-gray-600 rounded">
                  <p className="text-gray-600">City</p>
                  <p>{city}</p>
                </div>
                <div className="p-3 border border-gray-600 rounded">
                  <p className="text-gray-600">PIN</p>
                  <p>{pin}</p>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setpage(1)} className="px-4 py-2 border border-gray-600 rounded">Previous</button>
                <button type="submit" className="px-4 py-2 border border-gray-600 rounded">Submit</button>
              </div>
            </div>
          </div>
        )
      }


    </>
  );
}

export default Multipleform;
