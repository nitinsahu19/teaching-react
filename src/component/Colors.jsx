import React, { useState } from 'react';

const BottomButtons = () => {
    const [color , setColor] = useState('black')
    return (
        <div style={{backgroundColor:color}} className="relative min-h-screen bg-gray-100">
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
                <button onClick={() => setColor('red')} className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-red-600">Red</button>
                <button onClick={() => setColor('blue')} className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-600">Blue</button>
                <button onClick={() => setColor('green')} className="bg-green-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-600">Green</button>
                <button onClick={() => setColor('yellow')} className="bg-yellow-400 text-black cursor-pointer px-4 py-2 rounded-lg hover:bg-yellow-500">Yellow</button>
                <button onClick={() => setColor('purple')} className="bg-purple-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-600">Purple</button>
                <button onClick={() => setColor('pink')} className="bg-pink-500 text-white px-4 cursor-pointer py-2 rounded-lg hover:bg-pink-600">Pink</button>
            </div>
        </div>
    );
};

export default BottomButtons;
