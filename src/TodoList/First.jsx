import React from 'react'
import { memo } from 'react'

function First() {
    console.log("first component render")
  return (
    <>
    <div><h1>This is the first component run</h1></div>
    
    </>
  )
}

export default memo(First)