import React, { createContext, useContext, useState } from 'react'

 
const UsestorageContext = (key, token) => {
    const [value, setValue] = useState(() => {
        const localdata = localStorage.getItem(key)
        return localdata ? JSON.parse(localdata) : token

        
    });
    localStorage.setItem(key, JSON.stringify(value))
    return [value, setValue]



}
export default UsestorageContext
