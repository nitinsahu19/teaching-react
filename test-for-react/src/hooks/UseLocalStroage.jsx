import { createContext, useState } from "react";

const localStoragecontext = createContext();

export const localStoragecontextProvider = () =>{
    const [value,setValue] = useState('');
}

