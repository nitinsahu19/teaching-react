import { useEffect, useState } from "react"

const useLocalStorage = (key,initialvalue)=>{
    const [value , setvalue] = useState(()=>{
       const storedValue =  localStorage.getItem(key)
       return storedValue ? JSON.parse(storedValue) : initialvalue   ;
       
    })
    
    useEffect(()=>{
    localStorage.setItem(key , JSON.stringify(value))
    },[key,value])
    return [value,setvalue]
}

export default useLocalStorage

