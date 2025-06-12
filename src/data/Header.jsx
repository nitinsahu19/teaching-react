import React from 'react';
import { MdOutlineShoppingCart, MdLogout } from "react-icons/md";
import { FaAffiliatetheme } from "react-icons/fa";

const Header = ({ toggleTheme, openSidebar }) => (
  <div className="flex justify-end gap-4 p-4 bg-gray-100 dark:bg-gray-800">
    <button onClick={toggleTheme} className="bg-black text-white p-3 rounded">
      <FaAffiliatetheme />
    </button>
    <button className="bg-black text-white p-3 rounded">
      <MdLogout />
    </button>
    <button onClick={openSidebar} className="bg-black text-white p-3 rounded">
      <MdOutlineShoppingCart />
    </button>
  </div>
);

export default Header;

