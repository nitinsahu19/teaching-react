import { memo } from "react"
import React  from 'react'

function Second() {
    console.log("second component id renderd")
  return (
    <>
    <div>
        <h1>This is the second component</h1>
    </div>
    </>
  )
}

export default memo(Second)