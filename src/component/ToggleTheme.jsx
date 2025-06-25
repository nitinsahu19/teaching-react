import React, {createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useTheme = () => useContext(MyContext)

export const MyProvider = ({ children }) => {
const [darkMode, setDarkMode] = useState(false);

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>{children}</MyContext.Provider>
  );
};
 
