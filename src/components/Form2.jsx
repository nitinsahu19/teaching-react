import React, { useState } from "react";
import Header from "./Header";
import { useReducer } from "react";
import { initialstate, ReducerFunction } from "../reducers/ReducerFunction";

function Form2() {
  const [state, dispatch] = useReducer(ReducerFunction, initialstate);

  const updateHandler = (e) => { 
    dispatch({
      type: "UPDATE_DATA",
      key: e.target.name,
      value: e.target.value,
    });
  };
  const nextHandler = () => dispatch({ type: "NEXT_PAGE" });
  const prevHandler = () => dispatch({ type: "PREV_PAGE" });
  const resetHandler = () => dispatch({ type: "RESET" });
  return (
    <>
      <Header />
      <div className="w-full p-10">
        {state.page == 1 && (
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <input
              onChange={updateHandler}
              value={state.name}
              name="name"
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="name"
            />
            <input
              onChange={updateHandler}
              value={state.email}
              name="email"
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="email"
              placeholder="email"
            />
            <div className="flex justify-between ">
              <button
                onClick={() => resetHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Reset
              </button>
              <button
                onClick={() => nextHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {state.page == 2 && (
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <input
              name="city"
              onChange={updateHandler}
              value={state.city}
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="city"
            />
            <input
              onChange={updateHandler}
              value={state.address}
              name="address"
              className="w-1/1 bg-white mb-5 p-2 rounded"
              type="text"
              placeholder="address"
            />
            <div className="flex justify-between ">
              <button
                onClick={() => resetHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Reset
              </button>
              <button
                onClick={() => prevHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Back
              </button>
              <button
                onClick={() => nextHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {state.page == 3 && (
          <div className="p-5 bg-gray-200 mb-5 m-auto w-150 rounded shadow">
            <div className="mb-2 p-2 bg-white rounded">Name : {state.name}</div>
            <div className="mb-2 p-2 bg-white rounded">
              Email : {state.email}
            </div>
            <div className="mb-2 p-2 bg-white rounded">City : {state.city}</div>
            <div className="mb-2 p-2 bg-white rounded">
              Address : {state.address}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => resetHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Reset
              </button>
              <button
                onClick={() => prevHandler()}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Back
              </button>
              <button
                onClick={() => {
                  alert("Form submitted");
                  resetHandler();
                }}
                className="bg-blue-500 rounded text-white px-3 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form2;
