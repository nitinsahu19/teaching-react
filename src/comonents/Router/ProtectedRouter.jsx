import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
    const isLoggedIn =(localStorage.getItem('localStorage'))
    // const navigatre =navigate('')
  
    return isLoggedIn ===true ?children: <Navigate to="/home" />; 
  

};

export default ProtectedRouter;
