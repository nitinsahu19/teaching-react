// import React, { useState } from 'react';

// const MultipleForm = () => {
//   const [step, setStep] = useState(1);

//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [password, setPassword] = useState('');


//   const nextStep = () => setStep(prev => prev + 1);
//   const prevStep = () => setStep(prev => prev - 1);

//   const handleSubmit = () => {
//     alert("Form Submitted");
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-transparent border shadow rounded mt-10 text-white">
//       {step === 1 && (
//         <>
//           <h2 className="text-xl mb-4 font-bold text-center">personal Info</h2>
//           <label htmlFor="">email</label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={email}
//              onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border mb-3"
//           />
//           <label htmlFor="">username</label>

//           <input
//             type="username"
//             name="username"
//             placeholder="username"
//             value={username}
//              onChange={(e) => setUsername(e.target.value)}
//              className="w-full p-2 border mb-4"
//              />
//           <label htmlFor="">Password</label>

//           <input
//             type="Password"
//             name="Password"
//             placeholder="Password"
//             value={password}
//              onChange={(e) => setPassword(e.target.value)}
//              className="w-full p-2 border mb-4"
//              />
//           <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <h2 className="text-xl mb-4 font-bold text-center">Address Info</h2>
//           <label htmlFor="">City</label>
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="w-full p-2 border mb-3"
//           />
          
//           <label htmlFor="">Pincode</label>
//           <input
//             type="text"
//             name="pincode"
//             placeholder="Pincode"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}

//             className="w-full p-2 border mb-4"
//           />
//           <div className="flex justify-between">
//             <button onClick={prevStep} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
//             <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
//           </div>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <h2 className="text-xl mb-4 font-bold text-center"> Preview</h2>
//           <div className="mb-4">
//             <p><b>Email:</b> {email}</p>
//             <p><b>username:</b> {username}</p>
//             <p><b>Password:</b> {password}</p>
//             <p><b>City:</b> {city}</p>
//             <p><b>Pincode:</b> {pincode}</p>
//           </div>
//           <div className="flex justify-between">
//             <button onClick={prevStep} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
//             <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MultipleForm;



import React from 'react'
import { useReducer } from 'react';
import { FormReducer, intialvalue } from '../../reducer/FormReducer';

const MultipleForm = () => {
  const [state, dispatch] = useReducer(FormReducer, intialvalue);

  const handleChange = (e) => {
    dispatch({
      type: "UpdateField",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNext = () => {
    dispatch({ type: "NextStep" });
  };
  const handlePrevious = () => {
    dispatch({ type: "PreviousStep" });
  };
  const handleReset = () => {
    dispatch({ type: "Reset" });
  };
  const handleSubmit = (e) => {
    alert("Form Submitted");
    handleReset();

  };


   return (
    <div className="max-w-md mx-auto p-6 bg-transparent border shadow rounded mt-10 text-white">
      {state.step === 1 && (
        <>
          <h2 className="text-xl mb-4 font-bold text-center">personal Info</h2>
          <label htmlFor="">email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={state.email}
             onChange={handleChange}
            className="w-full p-2 border mb-3"
          />
          <label htmlFor="">username</label>

          <input
            type="username"
            name="username"
            placeholder="username"
            value={state.username}
             onChange= {handleChange}
             className="w-full p-2 border mb-4"
             />
          <label htmlFor="">Password</label>

         <input 
         type = "password"
         name = "password"
         placeholder='password'
          value={state.password}
          onChange={handleChange}
          className="w-full p-2 border mb-4"
         />
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </>
      )}

      {state.step === 2 && (
        <>
          <h2 className="text-xl mb-4 font-bold text-center">Address Info</h2>
          <label htmlFor="">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={state.city}
            onChange={handleChange}
            className="w-full p-2 border mb-3"
          />
          
          <label htmlFor="">Pincode</label>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={state.pincode}
            onChange={handleChange}

            className="w-full p-2 border mb-4"
          />
          <div className="flex justify-between">
            <button onClick={handlePrevious} className="bg-blue-500 text-white px-4 py-2 rounded"> Back</button>
            <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
            <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        </>
      )}

      {state.step === 3 && (
        <>
          <h2 className="text-xl mb-4 font-bold text-center"> Preview</h2>
          <div className="mb-4">
            <p><b>Email:</b> {state.email}</p>
            <p><b>username:</b> {state.username}</p>
            <p><b>Password:</b> {state.password}</p>
            <p><b>City:</b> {state.city}</p>
            <p><b>Pincode:</b> {state.pincode}</p>
          </div>
          <div className="flex justify-between">
            <button onClick={handlePrevious} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
            <button onClick={handleReset} className="bg-green-500 text-white px-4 py-2 rounded">Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MultipleForm;