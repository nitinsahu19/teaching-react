import { useState } from "react"

export const useLocalStorage = (key , invalue) => {
    const [value , setValue] = useState(()=>{

        const storge = localStorage.getItem(key)
        return storge?JSON.parse(storge) : invalue
    })

    localStorage.setItem(key , JSON.stringify(value))
    return [value , setValue]
}  

