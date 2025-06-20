import { useContext } from "react";
import { createContext,  useState } from "react";


export const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider =({children})=>{
    const [theme,setTheme] = useState('light');
    


    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}