import React, { useState, useEffect } from 'react';

function MoodDiaryApp() {
  const [mood, setMood] = useState('');
  const [entries, setEntries] = useState([]);

  
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(savedEntries);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  
  const handleSubmit = () => {
    if (mood.trim() === '') return;

    const newEntry = {
      text: mood,
    
    };

    setEntries([newEntry, ...entries]); 
    setMood('');
  };

 
  const handleDeleteAll = () => {
    setEntries([]);
    localStorage.removeItem('moodEntries');
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Mood Diary Form</h1>

      <input  className='w-full border p-3 rounded mb-2'    placeholder='How are you feeling today?'    value={mood}    onChange={(e) => setMood(e.target.value)}
      />

      <div className='flex gap-2'>
        <button onClick={handleSubmit} className='bg-amber-600 text-white px-4 py-2 rounded'>Submit   </button>
        <button onClick={handleDeleteAll} className='bg-red-600 text-white px-4 py-2 rounded'>    Delete All   </button>
      </div>

      <div className='mt-4'>
        {entries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className='border p-3 my-2 rounded bg-gray-100'>
              <p>{entry.text}</p>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MoodDiaryApp;
