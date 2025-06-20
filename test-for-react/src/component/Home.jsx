import React, { useContext, useState } from 'react'
import { movies } from '../datas/movies'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Tostyfiy from './Tostyfiy';
import Navbar from './Navbar';
import { useTheme } from '../ContextApi';



const Home = (props) => {
    const [searchparams, setSearchparams] = useSearchParams();
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);


    const {theme, setTheme} = useTheme()
    


    useEffect(() => {
        let getList = JSON.parse(localStorage.getItem('movie')) || [];
        setList(getList)
    }, [])

    const handleAddtoCart = (item) => {
        const isAlreadyAdded = list.some((i) => i.id === item.id);
        if (!isAlreadyAdded) {
            const finalList = [...list, item]
            setList(finalList);
            localStorage.setItem('movie', JSON.stringify(finalList))
            props.ShowMessage('Movie is succesfull added');
        }
    };






    const filterole = searchparams.get("genre") || "All"

    const handleRole = (e) => {
        const genre = e.target.value
        setSearchparams({ genre })
    }
    let filterMovie = filterole === "All" ? movies : movies.filter((item) => item.genre === filterole)


    const filteredMovies = filterMovie.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar  />
            {
                props.message && <Tostyfiy message={props.message} />
            }
            <div className='mt-3 relative'>
                <div>

                    <div className='p-2'>
                        <input
                            type="text"
                            placeholder="Search movie..."
                            className="border p-2 w-full mb-4 shadow"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className='p-2 flex'>
                    <select className={`border ${theme==="light"?'bg-white':"bg-black"}`} name="" value={filterole} onChange={handleRole} id="">
                        <option value="All">All</option>
                        <option value="Action">Action</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Superhero">Superhero</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci‑Fi">Sci‑Fi</option>
                    </select>
                </div>

                <div className='grid md:grid-cols-3 mt-2 gap-3'>
                    {
                        filteredMovies.map((item, index) =>
                            <div key={index} className='border p-2 rounded bg-gray-100'>
                                <img className='h-100 w-100 object-cover' src={item.poster} alt="movies" />
                                <p className='font-semibold text-lg'>Title: {item.title}</p>
                                <p className='font-semibold text-lg'>Realse year: {item.releaseYear}</p>
                                <div className='flex gap-3'>
                                    <button className='bg-green-600 text-white rounded p-1 mt-2' onClick={() => handleAddtoCart(item)}>Add to Watchlist</button>
                                    <button className='bg-green-600  text-white rounded p-1 mt-2'><Link to={`/movie/${item.id}`}>View details</Link></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home
