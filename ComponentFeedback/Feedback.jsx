import React, { useReducer } from "react";
import FeedbackReducer, { initialState } from "./FeedbackReduce";

function Feedback() {
  const [state, dispatch] = useReducer(FeedbackReducer, initialState);

  const total = state.good + state.neutral + state.bad;
  const good =state.good;
  const positivePercent = total === 0 ? 0 : (good/total) * 100;

  
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-700 text-white rounded-lg text-center">
      <h1 className="text-xl font-bold mb-4">Feedback App</h1>

      <div className="flex justify-center gap-2 mb-4">
        <button
          className="bg-green-600 px-3 py-1 rounded"
          onClick={() => dispatch({ type: "GOOD" })}>Good
        </button>
        <button
          className="bg-yellow-500 px-3 py-1 rounded"
          onClick={() => dispatch({ type: "NEUTRAL" })}>Neutral
          </button>
        <button
          className="bg-red-600 px-3 py-1 rounded"
          onClick={() => dispatch({ type: "BAD" })}>Bad
        </button>
      </div>

      <div className="text-sm mb-4 space-y-1">
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p> 
        <p>Positive: {positivePercent}%</p>
      </div>

      <button
        className="bg-red-500 px-4 py-1 rounded"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default Feedback;
