import React, { useState, useEffect } from "react";

const Test2 = () => {
  const [mood, setMood] = useState(""); // State to store the current mood input
    const [moods, setMoods] = useState([]); // State to store the list of moods
  
    const handleSubmit = (e) => {
        e.preventDefault();  //form submit hone pr page reload nhi hoga
        if (mood) {    //check if mood is not empty
          const moods = JSON.parse(localStorage.getItem("moods")) || [];  //get moods from localStorage or initialize as empty array
          moods.push(mood);  //add new mood to the array
          localStorage.setItem("moods", JSON.stringify(moods));  //save updated moods to localStorage
          setMood(""); //clear the input field
        }
      };
  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    setMoods(storedMoods); 
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label className="block mb-2 text-white">Mood Diary</label>
        <textarea
          className="border-2 border-gray-300 rounded p-2"
          placeholder="How are you feeling today?"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />

        </div>
        <button
          className="bg-blue-500 mt-2 mb-2 text-white rounded p-2 hover:bg-blue-600"
        >
          Submit Mood
        </button>
      </form>
      <div>
        <h2 className="underline decoration-wavy">Mood Entries</h2>
      <ul>
        {moods.map((mood, index) => (
          <li key={index} className="text-white">{mood}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Test2;