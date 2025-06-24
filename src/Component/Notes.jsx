import React, { useState } from "react";
import UseLocalStorage from "../../Hooks/UseLocalStorage";

function Notes() {
  const [text, setText] = useState("");
  const [value, setValue] = UseLocalStorage('todo',[])

  const addvalue = () => {
    if (text.trim() !== "") {
      setValue([...value, text]);
      setText("");
    }
  };

  const removeHandler = (index) => {
    const updated = value.filter((text, i) => i !== index);
    setValue(updated);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto mb-10">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Notes App
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          placeholder="Write your note here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        ></textarea>

        <button
          onClick={addvalue}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Add Note
        </button>
      </div>

      {/* Notes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {value.map((note, index) => (
          <div
            key={index}
            className="bg-yellow-100 shadow-md rounded-lg p-4 relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">
                Note {index + 1}
              </span>
              <button
                onClick={() => removeHandler(index)}
                className="text-red-600 hover:text-red-800 font-bold text-xl leading-none">X</button>
            </div>
            <p className="text-gray-800 whitespace-pre-wrap">{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
