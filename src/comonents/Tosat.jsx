
import React from 'react';

function Toast({ message, onClose }) {
  return (
    <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 flex items-center justify-between gap-4">
      <p>{message}</p>
      <button onClick={onClose} className="font-bold text-lg">×</button>
    </div>
  );
}

export default Toast;