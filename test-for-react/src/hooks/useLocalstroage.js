import { useEffect, useState } from "react"

const useLocalstroage = (key,intial) =>{
const [value,setValue] = useState(()=>{
    const storeValue = localStorage.getItem(key)
    return storeValue?JSON.parse(storeValue):intial;
})
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[value,key])
return [value,setValue]
}

export default useLocalstroage;