import React ,{useState} from "react"

const uselocalstorage = (key , initialvalue) => {
  const [value , setvalue] = useState(()=>{
   const localdat =  localStorage.getItem(key)
   return localdat ? JSON.parse(localdat) : initialvalue 
  })

  localStorage.setItem(key , JSON.stringify(value))

  return[value , setvalue]
}

export default uselocalstorage 