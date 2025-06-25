import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const btn = e.target.value;

    if (btn === "AC") {
      setValue("");
    } else if (btn === "DE") {
      setValue(value.slice(0, -1));
    } else if (btn === "=") {
      setValue(eval(value)); 
    } else {
      setValue(value + btn);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80">
        <h1 className="text-center text-2xl font-bold mb-4 text-white">Calculator</h1>

        <div className="mb-4">
          <input
            type="text"
            value={value}
            placeholder="Enter number"
            className="w-full text-right text-xl border border-gray-600 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-4 gap-3">
          <input type="button" value="AC" onClick={handleClick} className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg " />
          <input type="button" value="DE" onClick={handleClick} className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg " />
          <input type="button" value="." onClick={handleClick} className="bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-lg " />
          <input type="button" value="/" onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg " />

          <input type="button" value="7" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="8" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="9" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="*" onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg " />

          <input type="button" value="4" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="5" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="6" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="+" onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg " />

          <input type="button" value="1" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="2" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="3" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="-" onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg " />

          <input type="button" value="00" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="0" onClick={handleClick} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg " />
          <input type="button" value="=" onClick={handleClick} className="col-span-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg " />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
