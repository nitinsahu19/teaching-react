import React from 'react';

const Tostify = ({ message }) => {
    const isError = message.toLowerCase().includes('check');
    return (
        <div>
            <p className={`w-75 h-10 flex justify-center items-center rounded-2xl absolute top-4 z-5 right-18 text-white px-4 ${isError ? 'bg-red-500' : 'bg-green-500'}`}>{message}fgdfg</p>
        </div>
    );
};

export default Tostify;
