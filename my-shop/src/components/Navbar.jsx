import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, toggleTheme, openCart }) => {
  return (
    
    <nav className="flex justify-between items-center p-6 bg-white-100 dark:bg-white-800 shadow-md ">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-dark">ReactNavbar</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-500 text-gray-900 dark:text-dark">Home</Link>
          <Link to="/about" className="hover:text-blue-500 text-gray-900 dark:text-dark">About</Link>
          <Link to="/contact" className="hover:text-blue-500 text-gray-900 dark:text-dark">Contact</Link>
          <Link to="/help" className="hover:text-blue-500 text-gray-900 dark:text-dark">Help</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle toggleTheme={() => toggleTheme()} />
        <div className="relative cursor-pointer" onClick={openCart}>
          <ShoppingCart className="hover:text-blue-500 text-gray-900 dark:text-dark" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;