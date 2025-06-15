import React, { useState } from 'react';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div
            style={{
                backgroundColor: isDarkTheme ? '#333' : '#fff',
                color: isDarkTheme ? '#fff' : '#000',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
               
            }}
        >
            <button
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: isDarkTheme ? '#555' : '#ddd',
                    color: isDarkTheme ? '#fff' : '#000',
                }}
            >
                {isDarkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
        </div>
    );
};

export default ThemeToggle;