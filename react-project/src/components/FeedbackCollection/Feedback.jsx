import React from "react";
import { useReducer } from "react";
import { feedbackReducer, initialState } from "../../reducer/FormFeedback";

const Feedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback =  Math.floor((state.good / totalFeedback) * 100);

  return (
    <div className="text-center">
      <h1 className="mt-2 text-xl underline decoration-wavy mb-2">Feedback Collector</h1>
      <button
        onClick={() => dispatch({ type: "GOOD" })}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"> Good </button>

      <button
        onClick={() => dispatch({ type: "NEUTRAL" })}
        className="bg-yellow-500 text-white px-4 py-2 rounded m-2"> Neutral </button>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch({ type: "BAD" })}> Bad </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        onClick={() => dispatch({ type: "RESET" })}>Reset </button>
          <div>
                <h2 className="text-xl underline decoration-dotted">Result</h2>
                <p>Total Feedback: {totalFeedback}</p>
                <p>Positive Percentage: {positiveFeedback} %</p>
  
            </div>
    </div>
    
  );
};

export default Feedback;
