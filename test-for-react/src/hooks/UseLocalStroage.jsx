import { useEffect, useState } from "react"

const uselocalstroage = (key,initailValue) =>{
const [value,setValue] = useState(()=>{
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) :initailValue;
})

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value]);

const addItem = (item)=>{
    setValue((pre)=>[...pre,item])
}
const removeItem = (index) =>{
    let removing = value.filter((i,item)=>{
        return item!==index
    })
    setValue(removing)
}

const clearItem = ()=>{
    setValue([]);
}
return{
    value,setValue,addItem,removeItem,clearItem
}
}


export default uselocalstroage
