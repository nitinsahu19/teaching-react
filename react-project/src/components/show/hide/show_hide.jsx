
import React, { useState } from 'react';

const ShowHide = () => {
  // Step 1: Create a state to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Toggle function
  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    <h1 className='text-xl text-center mt-4 underline decoration-wavy text-white hover:text-blue-500'>Hide & Show button</h1>
    <div className="p-4 text-center">
      {/* Step 3: Button to toggle */}
      <button
        onClick={toggleText}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
        >
        {isVisible ? 'Hide' : 'Show'} Text
      </button>

      {/* Step 4: Conditionally show text */}
      {isVisible && <p className="mt-4 text-white-500 hover:text-blue-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quos!</p>}
    </div>
          </>
  );
};

export default ShowHide;
