import { createContext, useContext, useState } from "react";

export const ToggleTheam = createContext();
export const useToggleTheam = () => useContext(ToggleTheam);


export const ToggleTheamFun = ({ children }) => {
    // const [names, setNames] = useState("My name is Vikas Yadav");
    const [theam, setTheam] = useState(true)
    return (
        // <NameContext.Provider value={{ names, setNames }}>{children}</NameContext.Provider>
        <ToggleTheam.Provider value={{ theam, setTheam }}>{children}</ToggleTheam.Provider>
    );
};

export default ToggleTheam;