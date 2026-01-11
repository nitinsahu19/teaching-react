import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Todo = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const [value, setValue] = useLocalStorage("todos", []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleNewTodo();
    }
  };

  const handleNewTodo = () => {
    if (input.trim() === "") {
      setError("Todo description required");
      return;
    }
    setValue([...value, input]);
    setInput("");
  };

  const handleText = (event) => {
    setInput(event.target.value);
    setError("");
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <label htmlFor="todo" className="text-lg font-medium">
        Note down your new task:
      </label>

      <textarea
        onChange={handleText}
        value={input}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 rounded-md p-2 resize-y focus:outline-none focus:ring-2 focus:ring-gray-400"
        id="todo"
        name="todo"
        rows="3"
        cols="20"
      />
      {error && <span className="text-red-700 font-medium">{error}</span>}

      <button
        className="self-start px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={handleNewTodo}
      >
        Add todo
      </button>

      <button
        className="self-start px-4 py-2 bg-red-100 border border-red-400 rounded-md hover:bg-red-200 text-red-700"
        onClick={() => setValue([])}
      >
        Clear All
      </button>

      <h2 className="text-xl font-semibold mt-6">Your todos</h2>
      <ul className="flex flex-col gap-2">
        {value?.map((item, index) => (
          <li key={index} className="border-b border-gray-200 pb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
