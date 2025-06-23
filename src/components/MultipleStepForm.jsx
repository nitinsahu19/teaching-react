import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducers/formReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNext = () => dispatch({ type: "NEXT_STEP" });
  const handleBack = () => dispatch({ type: "PREV_STEP" });
  const handleReset = () => dispatch({ type: "RESET" });

  const handleSubmit = () => {
    alert("Form submitted!");
    handleReset();
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Step {state.step} of 3</h2>

      {state.step === 1 && (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      )}

      {state.step === 2 && (
        <div className="space-y-4">
          <input
            type="text"
            name="city"
            value={state.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="pincode"
            value={state.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-between">
            <button onClick={handleBack} className="btn">
              Back
            </button>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </div>
      )}

      {state.step === 3 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Confirm your details:</h3>
          <p>
            <b>Name:</b> {state.name}
          </p>
          <p>
            <b>Email:</b> {state.email}
          </p>
          <p>
            <b>City:</b> {state.city}
          </p>
          <p>
            <b>Pincode:</b> {state.pincode}
          </p>

          <div className="flex justify-between mt-4">
            <button onClick={handleBack} className="btn">
              Back
            </button>
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
