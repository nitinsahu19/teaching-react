import { useReducer } from "react";
import { Formreduce, initialstate } from "./Formreduce";

function Form3() {
  const [state, dispatch] = useReducer(Formreduce, initialstate);

  const updatehandler = (e) => {
    dispatch({
      type: "UPDATE_DATA",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const nexthandler = () => dispatch({ type: "NEXT_PAGE" });
  const prevhandler = () => dispatch({ type: "PREV_PAGE" });
  const resethandler = () => dispatch({ type: "RESET" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4">
      <h1 className="text-3xl font-bold mb-6 text-amber-700">Multi-Step Form</h1>

      <div className="w-full max-w-md bg-amber-600 text-white rounded-xl shadow-lg p-6 space-y-4">
        {state.page === 1 && (
          <form className="space-y-4">
            <div>
              <label className="block text-left text-lg mb-1">Name:</label>
              <input
                name="name"
                value={state.name}
                onChange={updatehandler}
                className="w-full px-3 py-2 rounded-lg border-none text-black"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-left text-lg mb-1">Email:</label>
              <input
                name="email"
                value={state.email}
                onChange={updatehandler}
                className="w-full px-3 py-2 rounded-lg border-none text-black"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nexthandler();
                }}
                className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {state.page === 2 && (
          <form className="space-y-4">
            <div>
              <label className="block text-left text-lg mb-1">Address:</label>
              <input
                name="address"
                value={state.address}
                onChange={updatehandler}
                className="w-full px-3 py-2 rounded-lg border-none text-black"
                type="text"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-left text-lg mb-1">City:</label>
              <input
                name="city"
                value={state.city}
                onChange={updatehandler}
                className="w-full px-3 py-2 rounded-lg border-none text-black"
                type="text"
                placeholder="Enter your city"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevhandler();
                }}
                className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                Prev
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nexthandler();
                }}
                className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {state.page === 3 && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-4">Review Your Details:</h2>
            <p><strong>Name:</strong> {state.name}</p>
            <p><strong>Email:</strong> {state.email}</p>
            <p><strong>Address:</strong> {state.address}</p>
            <p><strong>City:</strong> {state.city}</p>
            <div className="flex justify-between pt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevhandler();
                }}
                className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                Prev
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("YOUR FORM SUBMITTED SUCCESSFULLY");
                  resethandler();
                }}
                className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100 transition"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form3;
