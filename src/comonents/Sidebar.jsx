import React from 'react';
import Addtocard from './data/Addtocard';

const Sidebar = ({ closeSidebar, addcart }) => (
  <div
    id="cartSidebar"
    className="fixed top-0 right-[-100%] w-[300px] h-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg transition-all duration-300 z-50 overflow-y-auto"
  >
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-bold">Your Cart</h2>
      <button onClick={closeSidebar} className="text-red-500 font-bold text-lg">X</button>
    </div>
    <Addtocard addcart={addcart} />
  </div>
);

export default Sidebar;