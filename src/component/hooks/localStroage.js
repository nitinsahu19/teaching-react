import { useEffect, useState } from "react"

const useLocalStroage = (key,intialValue)=>{
const [value,setValue] = useState(()=>{
    const storeValue = localStorage.getItem(key);
   return storeValue?JSON.parse(storeValue):intialValue
})

useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
},[key,value])

const clearValue = ()=>{
    setValue([]);
}
return [value,setValue,clearValue]
}
export default useLocalStroage