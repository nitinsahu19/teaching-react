import React from 'react';

const Toastify = ({ massage, error }) => {

    setTimeout(() => {
        massage
        console.log(massage , "sdfsdf")
    }, 1000);
  return (
    <div>
      {massage && <p className="w-75 h-10 flex justify-center items-center rounded-2xl absolute top-4 right-18 z-50 text-white px-4 bg-green-500">
        {massage}<li>Add The Product Sucessfully <span className='text-red-500 cursor-pointer'>X</span></li></p>}

      {error && <p className="w-75 h-10 flex justify-center items-center rounded-2xl absolute top-20 right-18 z-50 text-white px-4 bg-red-500">
        {error}<li>Something Went Wrong Try Again <span className='text-red-500 cursor-pointer'>X</span></li></p>}
    </div>
  );
};

export default Toastify;
