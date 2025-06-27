import React, { useState, useEffect } from 'react';
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.error(err);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.error(err);
        }
    };

    return [storedValue, setValue];
}

function MoodForm() {
    const [mood, setMood] = useState('');
    const [moods, setMoods] = useLocalStorage('moodEntries', []);

    const handleSubmit = (e) => {
        const newMood = {
            text: mood,
        };
        const updatedMoods = [newMood, ...moods];
        setMoods(updatedMoods);
        setMood('');
    };

    const handleDeleteAll = () => {
        setMoods([]);
    };

    return (
        <div >
            <h2>felling</h2>
            <div onSubmit={handleSubmit}>
                <input value={mood} onChange={(e) => setMood(e.target.value)} placeholder="How are you feeling today?"/>
                <button type="submit">Submit</button>
            </div>

            {moods.length > 0 && (
                <>
                    <button onClick={handleDeleteAll} >
                        Delete All
                    </button>
                    <ul >
                        {moods.map((entry, index) => (
                            <li key={index} >
                                <p>Mood: {entry.text}</p>

                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default MoodForm;
