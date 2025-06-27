import React from 'react'
import { useParams } from 'react-router-dom'

function Prectise() {
    const {id}=useParams()
  return (
    <>
    <h1>You are now the prectise page {id}</h1>
    
    </>
  )
}

export default Prectise