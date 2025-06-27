import { useReducer } from "react";
import { feedbackReducer, initialState } from "../reducer/feedbackReducer";

const Feedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const total = state.good + state.netural + state.bad;
  const goodFeedback = total ? (state.good / total) * 100 : 0;
  const neturalFeedback = total ? (state.netural / total) * 100 : 0;
  const badFeedback = total ? (state.bad / total) * 100 : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Feedback</h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Good:</span>
            <span>{state.good} ({goodFeedback.toFixed(2)}%)</span>
          </div>
          <div className="flex justify-between">
            <span>Neutral:</span>
            <span>{state.netural} ({neturalFeedback.toFixed(2)}%)</span>
          </div>
          <div className="flex justify-between">
            <span>Bad:</span>
            <span>{state.bad} ({badFeedback.toFixed(2)}%)</span>
          </div>
          <div className="flex justify-between font-semibold pt-2">
            <span>Total:</span>
            <span>{total}</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={() => dispatch({ type: "good" })}className="px-4 py-2 bg-green-200 rounded hover:bg-green-300 transition">Good</button>
          <button onClick={() => dispatch({ type: "netural" })}className="px-4 py-2 bg-yellow-200 rounded hover:bg-yellow-300 transition">Neutral</button>
          <button onClick={() => dispatch({ type: "bad" })} className="px-4 py-2 bg-red-200 rounded hover:bg-red-300 transition">Bad</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
