import React from 'react'

function Toast({color,bgcolor,message}) {
  return (
    <div className={`fixed top-10 right-0 p-5 ${color} ${bgcolor}`}> 
    <span>{message}</span>
    </div>
  )
}

export default Toast
