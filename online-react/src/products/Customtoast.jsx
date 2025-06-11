import React from "react";

const Customtoast = ({ message}) => {
  return (
    <div className="absolute top-10 left-[45%] bg-green-500 text-white px-4 py-2 rounded shadow-lg ">
        <span>{message}</span>
    </div>
  );
};

export default Customtoast;
