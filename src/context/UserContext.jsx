import { useState, createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("Jai Shree Ram");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
