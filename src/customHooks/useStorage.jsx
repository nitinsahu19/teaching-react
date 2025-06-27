import { useEffect, useState } from "react";

export const useStorage=(key,initialvalue)=> {
  const [value,setValue]=useState(()=>{
    const savedValue = localStorage.getItem(key)
    return savedValue?JSON.parse(savedValue):initialvalue;
  })
    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(value))
    },[value,key])
  
    return [value,setValue]
}