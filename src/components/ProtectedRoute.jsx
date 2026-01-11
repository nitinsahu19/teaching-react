import React from "react";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isLogin = localStorage.getItem("token");

//   return isLogin === true ? children : <Navigate to="/login" />;
// };
// const ProtectedRoute = (WrappedComponent) => {
//   const Component = (props) => {
//     const token = localStorage.getItem("token");

//     if (token !== "true") {
//       return <Navigate to="/login" replace />;
//     }

//     return <WrappedComponent {...props} />;
//   };

//   return Component;
// };

const ProtectedRoute = (WrappedComponent) => {
  const Component = (props) => {
    const isAuth = localStorage.getItem("token");
    if (isAuth !== "true") {
      return <Navigate to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
  return Component;
};

export default ProtectedRoute;
