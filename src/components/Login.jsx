import React, { useState } from 'react'
import Theme from './Theme'
import { Navigate, useNavigate} from 'react-router-dom'

function Login({setlogins}) {

    const [gmail , setgmail] = useState("")
    const [password , setpassword] = useState("")

    const navigate = useNavigate()
    const validation = ()=>{
        if((gmail === "jangidaryan58@gmail.com")&&(password === "12345")){
            alert("details are correct")
            setlogins(true)
            navigate("/movies")
        }

        else{
            alert("details are not correct ")
            navigate("/login")
        }
    }

  return (
    <>
    <Theme/>
    <div className='bg-amber-100' style={{display:'flex' , justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
        <div className="inner bg-black text-white p-20 rounded">
        <form>
        <input value={gmail} onChange={(e)=>setgmail(e.target.value)} className='border-2 pt-1 pb-1 m-2 rounded pe-15 placeholder:text-white' type="email" name="" placeholder='Enter Email' id="1" /> <br />
        <input value={password} onChange={(e)=>setpassword(e.target.value)} className='border-2 pt-1 pb-1 m-2 pe-15 rounded placeholder:text-white' type="password" name="" placeholder='Enter Password' id="2" /> <br />
        <button onClick={()=>validation()} className='border-2 m-2 ps-2 pe-2 rounded' >Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login