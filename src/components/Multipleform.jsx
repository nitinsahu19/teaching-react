import React, { useReducer } from 'react';
import { formreducer , initialState } from '../reducer/formReducer';
function MultiStepForm() {
  const [state, dispatch] = useReducer(formreducer, initialState);
  const inputStyle = `w-full border border-gray-600 p-2 rounded`;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const handleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    handleReset();
  };

  return (
    <>
      {state.step === 1 && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-10 rounded border border-gray-700 w-full max-w-xl">
            <h1 className="text-2xl text-center mb-6">Form 1</h1>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <input onChange={handleChange} name="name"value={state.name} className={`${inputStyle} mb-1`}type="text" placeholder="Enter Name"/>
                <input onChange={handleChange} name="email" value={state.email} className={`${inputStyle} mb-1`} type="email" placeholder="Enter Email"/>
              </div>
              <div className="flex justify-end">
                <button onClick={handleNext}type="button" className="px-4 py-2 border border-gray-600 rounded"> Next Page </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {state.step === 2 && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-10 rounded border border-gray-700 w-full max-w-xl">
            <h1 className="text-2xl text-center mb-6">Form 2</h1>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="flex gap-4">
                <input onChange={handleChange}name="city" value={state.city} className={inputStyle} type="text"placeholder="Enter City"/>
                <input onChange={handleChange}name="pincode" value={state.pincode} className={inputStyle} type="text"placeholder="Enter Pincode"/>
              </div>
              <div className="flex justify-between">
                <button onClick={handleBack} type="button"className="px-4 py-2 border border-gray-600 rounded">Previous</button>
                <button onClick={handleNext} type="button"className="px-4 py-2 border border-gray-600 rounded">Next</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {state.step === 3 && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-10 rounded border border-gray-700 w-full max-w-xl">
            <h1 className="text-2xl text-center mb-6">Details Page</h1>
            <div className="grid gap-2 text-lg">
              <div className="p-3 border border-gray-600 rounded">
                <p className="text-gray-600">Name</p>
                <p>{state.name}</p>
              </div>
              <div className="p-3 border border-gray-600 rounded">
                <p className="text-gray-600">Email</p>
                <p>{state.email}</p>
              </div>
              <div className="p-3 border border-gray-600 rounded">
                <p className="text-gray-600">City</p>
                <p>{state.city}</p>
              </div>
              <div className="p-3 border border-gray-600 rounded">
                <p className="text-gray-600">PIN</p>
                <p>{state.pincode}</p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={handleBack} type="button"className="px-4 py-2 border border-gray-600 rounded">Previous</button>
              <button onClick={handleSubmit} type="button"className="px-4 py-2 border border-gray-600 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MultiStepForm;
