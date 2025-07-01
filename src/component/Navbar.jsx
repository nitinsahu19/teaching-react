import { Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav  className='flex text-xl justify-around p-4 bg-gray-600'>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='user'><button className='w-25 h-9 bg-green-700 rounded-2xl cursor-pointer hover:bg-green-500'>User</button></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='header'><button className='w-25 h-9 bg-red-700 rounded-2xl cursor-pointer hover:bg-red-500'>TodoList</button></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='cart'><button className='w-25 h-9 bg-pink-100 rounded-2xl cursor-pointer hover:bg-pink-300'>Cart</button></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='data'><button className='w-25 h-9 bg-blue-700 rounded-2xl cursor-pointer hover:bg-blue-500'>Data</button></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='weather'><button className='w-25 h-9 bg-yellow-700 rounded-2xl cursor-pointer hover:bg-yellow-500'>Weather</button></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='formpage'><button className='w-40 h-10 bg-red-700 rounded-2xl cursor-pointer hover:bg-gray-500'>FromReducer</button></NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='feedback'><button className='w-25 h-9 bg-green-700 rounded-2xl cursor-pointer hover:bg-green-500'>FeedBack</button></NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='Colors'><button className='w-25 h-9 bg-gray-700 rounded-2xl cursor-pointer hover:bg-gray-500'>Colors</button></NavLink> 
  
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
