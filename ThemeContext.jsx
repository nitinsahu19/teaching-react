import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


export  const useTheme=()=> useContext(ThemeContext)
  
export const ThemeContextFun = ({ children }) => {
    const [theme, setTheme] = useState(false);

    
    return (
        
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>   
        
        
        
    );
};

export default ThemeContext;