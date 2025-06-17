import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({childer}) {
  return localStorage.getItem("token")?childer:<Navigate to="/login"/>
}

export default ProtectedRoute
