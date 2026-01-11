import React from "react";
import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import { Plus, Minus } from "lucide-react";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <h2 className="text-3xl font-semibold">Count: {state.count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="border px-4 py-2 rounded-md shadow hover:scale-105 transition-all"
        >
          <Plus size={24} />
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="border px-4 py-2 rounded-md shadow hover:scale-105 transition-all"
        >
          <Minus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
