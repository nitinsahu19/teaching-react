import React, { useState, useEffect } from "react";

const Test2 = () => {
  const [mood, setMood] = useState(""); // Current mood input
  const [moods, setMoods] = useState([]); // All mood entries

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood.trim() !== "") {
      const updatedMoods = [...moods, mood];
      localStorage.setItem("moods", JSON.stringify(updatedMoods));
      setMoods(updatedMoods); // Update state immediately to reflect on screen
      setMood(""); // Clear input
    }
  };

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    setMoods(storedMoods);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-white text-xl font-semibold text-center">
            Mood Diary
          </label>
          <textarea
            className="w-full border-2 border-gray-400 rounded p-2 text-white"
            placeholder="How are you feeling today?"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 mt-3 text-white rounded p-2 hover:bg-blue-600"
          >
            Submit Mood
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-white text-lg underline decoration-wavy text-center mb-2">
            Mood Entries
          </h2>
          <ul className="list-disc pl-5 text-white space-y-1">
            {moods.map((mood, index) => (
              <li key={index}>{mood}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test2;
