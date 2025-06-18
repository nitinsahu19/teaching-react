import React from 'react' 
import { Navigate } from 'react-router-dom'

const Protectrouter = ({children}) => {
  const localdata = localStorage.getItem('token')
  return localdata ? children : <Navigate to='/login'/>
}

export default Protectrouter
