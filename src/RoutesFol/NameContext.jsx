import {  createContext, useState } from "react";

const NameContext = createContext();


export const NameContextFun=({children})=> {
    const[names,setNames]=useState("My name is gulshan jaat");
  return (
  
    <NameContext.Provider value={{names,setNames}}>{children}</NameContext.Provider>

    
 
    
  );
};

export default NameContext;