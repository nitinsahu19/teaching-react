import React, { useState } from "react";

function Forms() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState();
  const [email, setEmali] = useState();    
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();

  return (
    <>
      {page == 1 && (
        <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
          <div className="p-1">
            <label className="text-2xl">Name</label>
            <br />
            <input value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-3 p-2 rounded"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="p-1">
            <label className="text-2xl">Email</label>
            <br />
            <input value={email}
              onChange={(e) => setEmali(e.target.value)}
              className="border px-3 p-2 rounded"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex justify-end ">
            <button
              className="bg-green-300 p-2 px-4 rounded-xl"
              onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      )}{page == 2 && (
        <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
          <div className="p-1">
            <label className="text-2xl">City</label>
            <br />
            <input value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border px-3 p-2 rounded"
              type="text"
              placeholder="Enter your city"
            />
          </div>
          <div className="p-1">
            <label className="text-2xl">Pincode</label>
            <br />
            <input value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border px-3 p-2 rounded"
              type="text"
              placeholder="Enter your Pincode"
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-amber-400 p-2 px-4 rounded-xl"
              onClick={() => setPage(page - 1)}
            >
              Pre
            </button>
            <button
              className="bg-green-300 p-2 px-4 rounded-xl"
              onClick={() => setPage(page + 1)}
            >
              {" "}
              Next
            </button>
          </div>
        </div>
      )}{page == 3 && (
        <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
          <div className="p-1">
            <label className="text-2xl">Name:{name}</label>
            <br />
          </div>
          <div className="p-1">
            <label className="text-2xl">Email:{email}</label>
            <br />
          </div>
          <div className="p-1">
            <label className="text-2xl">City:{city}</label>
            <br />
          </div>
          <div className="p-1">
            <label className="text-2xl">Pincode:{pincode}</label>
            <br />
          </div>
          <div className=" flex justify-end">
            <button className="bg-green-300 p-2 px-4 rounded-xl">Submit</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Forms;
