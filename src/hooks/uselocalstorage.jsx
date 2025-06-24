// import React, { useState } from "react";

import { useState } from "react"

const uselocalstorage = (key , initialValue) => {
    const [value , setValue] = useState(()=>{
        const localdata = localStorage.getItem(key)
        return localdata ? JSON.parse(localdata) : initialValue
    })

    localStorage.setItem(key , JSON.stringify(value))

    return [value , setValue]
}

export default uselocalstorage


 