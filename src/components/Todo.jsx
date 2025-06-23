import React, { useContext } from 'react'
import useLocalStorage from '../context/useLocalStorage'
import { ThemeContext } from '../context/ThemeContext'
import { useState } from 'react'

function Todo() {

    const [data, setdata] = useState()
    const [value, setvalue] = useLocalStorage("Todo", [])
    const { theme, setTheme } = useContext(ThemeContext)

    const handleTodo = () => {
        if (data === "") return
        else {
            setvalue([...value, data])
            setdata('')
        }
    }

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
            <div className={`w-full max-w-md p-4 rounded shadow ${theme === "dark" ? "bg-black border-2" : "bg-white"}`}>
                <input value={data} onChange={(e) => setdata(e.target.value)} className={`w-full border rounded px-3 py-2 mb-3 ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
                type="text" placeholder="Add a todo"/>
                <button onClick={handleTodo} className={`w-full py-2 rounded ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>Click me</button>
                <div className="mt-4 space-y-2">
                    {value.map((item, key) =>
                        <div key={key} className={`p-2 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
                            <p>{item}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Todo
