import React, { useState } from 'react';
import  useLocalStorage  from '../customHooks/useLocalStorage';
import Header from './Header';

function Notes() {
  const [inputNote, setInputNote] = useState('');
  const [value,setValue]=useLocalStorage('notes',[]);  
  
  const addHandler = () => {
    if (inputNote !== '') {
      setValue([...value, inputNote]);
      setInputNote('');
    }
  }; 

  const removeHandler = (index) => {
    const filteredNotes = value.filter((note, i) => i !== index);
    setValue(filteredNotes);
  };

  return (
    <>
      <Header />

      {/* Input Section */}
      <div className='w-full bg-gray-100 flex justify-center py-6 px-4'>
        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-3xl items-start sm:items-center'>
          <textarea
            value={inputNote}
            onChange={(e) => setInputNote(e.target.value)}
            className='flex-grow bg-white border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-24 sm:h-20'
            placeholder='Tap to write'
          />
          <button
            onClick={addHandler}
            className='h-10 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition'
          >
            Add
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className='w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {value.map((note, index) => (
          <div key={index} className='bg-yellow-100 shadow-md rounded-lg p-4 relative'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold text-gray-700'>Note {index + 1}</span>
              <button
                onClick={() => removeHandler(index)}
                className='text-red-600 hover:text-red-800 font-bold text-xl leading-none'
              >
                ×
              </button>
            </div>
            <p className='text-gray-800 whitespace-pre-wrap'>{note}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notes;
