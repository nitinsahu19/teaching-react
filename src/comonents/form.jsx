import React, { useState } from 'react';
import Tosat from './Tosat';

function Form(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleLoginClick = () => {
    if (username !== "n" || password !== "12") {
      showToastMessage("Wrong Input");
    } else {
      showToastMessage("Login Successful!");
      setTimeout(() => {
        props.clcikfunction(); 
      }, 1000);     }
  };

  return (
    <>
      {showToast && <Tosat message={toastMessage} />}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            onClick={handleLoginClick}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
