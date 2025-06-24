import React, { useState } from "react";
import Header from "./Header";

function Form() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  
  return (
    <>
      <Header />
      <div className="w-full p-10">
        {page == 1 && (
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="email"
              placeholder="email"
            />
            <div className="flex justify-end ">
              <button
                onClick={() => setPage(page + 1)}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {page == 2 && (
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <input
              onChange={(e) => setCity(e.target.value)}
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="city"
            />
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="address"
            />
            <div className="flex justify-between ">
              <button
                onClick={() => setPage(page - 1)}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Back
              </button>
              <button
                onClick={() => setPage(page + 1)}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {page == 3 &&(
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <div className="mb-2 p-2 bg-white rounded">Name : {name}</div>
            <div className="mb-2 p-2 bg-white rounded">Email : {email}</div>
            <div className="mb-2 p-2 bg-white rounded">City : {city}</div>
            <div className="mb-2 p-2 bg-white rounded">Address : {address}</div>
            <div className="flex justify-between">
              <button
                onClick={() => setPage(page - 1)}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Back
              </button>
              <button className="bg-blue-500 rounded text-white px-3 py-2">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
