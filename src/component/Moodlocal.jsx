import React, { useState } from 'react'

const Moodlocal = (key , intionvalue) => {
   const [input , setInput] = useState(()=>{
    const localdata = localStorage.getItem(key)
    return localdata ? JSON.parse(localdata) : intionvalue
   })
 
    localStorage.setItem(key , JSON.stringify(input))

   return [input , setInput]
}

export default Moodlocal
