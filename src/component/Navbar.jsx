import { Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav  className='flex text-xl justify-around p-4 bg-gray-600'>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='Login'>Login</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='user'>User</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='header'>TodoList</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='cart'>Cart</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='data'>Data</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='weather'>Weather</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='formpage'>FromReducer</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='feedback'>FeedBack</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='Colors'>Colors</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='github'>Github</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='zod'>ReducerZod</NavLink> 
                <NavLink className={({ isActive }) => isActive ? 'text-red-500 rounded-xl p-3 text-xl mt-2 font-bold' : 'text-xl font-bold mt-5'} to='count'>Redux</NavLink> 
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;