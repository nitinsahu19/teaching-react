import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Notes() {
    const [data, setdata] = useState("")
    const [notes, setallnotes] = useState([])
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("todos")) || []
        if (storedNotes) {
            setallnotes(storedNotes)
        }
    }, [])

    const dataset = () => {
        if (data.trim() === "") return
        
        const updatedNotes = [...notes, data]
        setallnotes(updatedNotes)
        localStorage.setItem("todos", JSON.stringify(updatedNotes))
        setdata("")
    }

    return (
        <div className={` ${theme === "light" ? "text-black bg-white" : "text-white bg-black"} min-h-screen flex flex-col items-center justify-start py-10 px-4`}>
            <h1 className={`text-3xl font-bold mb-6 ${theme === "light" ? " text-black " : "text-white " } `}>Notes</h1>

            <div className="flex gap-3 mb-6 w-full max-w-md">
                <input value={data} onChange={(e) => setdata(e.target.value)}
                    className='flex-1 border border-gray-300 rounded px-4 py-2 shadow-sm '
                    type="text" placeholder='Enter Notes...'
                />
                <button onClick={dataset} className='bg-blue-500 text-white px-5 py-2 rounded shadow'>Add</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl'>
                {notes.map((note, index) => (
                    <div key={index} className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} bg-white p-4 rounded-lg shadow-md`}
                    >
                        <p className='text-gray-800 line-clamp-3'>{note}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes
