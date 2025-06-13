import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const localdata = localStorage.getItem('token')
  return localdata ? children : <Navigate to="/login" />
}

export default ProtectedRoute
