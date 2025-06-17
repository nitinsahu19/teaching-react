import React, { useState, useEffect } from 'react';
import logo from '../image/logo.png';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Datas = () => {
    const [apis, setApis] = useState([]);
    const [error, seterror] = useState(null);
    const [count, setcount] = useState(3);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((result) => {
                setApis(result);
            }).catch((err) => {
                seterror("Something went wrong. Please try again!");
                console.log("Page not found", err);
            });
    }, []);

    const ubdateData = () => {
        setcount(count + 3);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const ubdateval = apis.slice(0, count);
    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition duration-1000 `}>

            <div className='flex justify-end '>
                <button onClick={toggleTheme} className='text-3xl cursor-pointer'>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            <div className='grid grid-cols-3 gap-6 p-2'>
                {error && <p className='text-center text-red-600 text-3xl'>{error}</p>}

                {ubdateval.map((value) => (
                    <div key={value.id} className={`border p-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                        <p>{value.id}</p>
                        <p className='font-bold'>{value.title}</p>
                        <p>{value.body}</p>
                        <img className='w-20 h-20' src={logo} alt="logo" />
                    </div>
                ))}
            </div>

            {count < apis.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        onClick={ubdateData}
                        className='bg-amber-300 font-medium px-6 py-2 rounded cursor-pointer hover:bg-amber-400 transition'>
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Datas;


