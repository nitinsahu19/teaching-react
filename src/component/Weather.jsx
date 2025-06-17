import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Weather = () => {
const apiKey = import.meta.env.VITE_API_KEY
const [cityname,setCityName] = useState('');
const [data,setData] = useState(null)
const [message,setMessage] = useState('')


const getweather = ()=>{
   
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
      fetch(url)
      .then((res)=>res.json())
      .then((response)=>{
        if(response.cod===200){
          setData(response)
          setMessage('')
        }else{
          setMessage(response.message)
          setData(null)
        }
      })
     .catch((error)=> {
      console.log(error)
      setMessage(error)

    });
}
  
  setTimeout(() => {
    setMessage("")
  }, 3000);

  const submitButton=()=>{
    if(cityname.trim()===''){
      alert('please enter a value')
    }else{
      setCityName('')
      getweather()
    }
  }
  
  const keypressEvent = (e) =>{
    if(e.key==="Enter"){
      getweather();
      setCityName("");
    }
  }

  return (
    <div className=' img'>
      <p className='text-center font-medium text-2xl p-3'>Weather-app</p>
      <div  className='flex justify-center mt-6'>
      <div className='bg-white p-2 rounded'>
         <div className='flex gap-2'>
        <input type="search" className='border rounded h-8 w-70 p-1' onKeyDown={keypressEvent} value={cityname} onChange={(e)=>setCityName(e.target.value)} name="" id="input-wather" placeholder='Enter a CityName' />
        <button className='bg-green-800 h-8 rounded p-1 text-white cursor-pointer' onClick={submitButton}>Get Weather</button>
      </div>
      {
        message &&( <div><p className='font-semibold text-lg text-red-500'>{message}</p></div>)
      }
        {data && 
        <div className='p-3'>
          <p className='font-medium text-lg'>Temp : {data.main.temp}</p>
          <p className='font-medium text-lg'>Humidity : {data.main.humidity}</p>
          <p className='font-medium text-lg'>Air speed : {data.wind.speed}</p>
          <p className='font-medium text-lg'>lat : {data.coord.lat}</p>
          <p className='font-medium text-lg'>lon : {data.coord.lon}</p>
          <p className='font-medium text-lg'>city : {data.name}</p>
        
        </div>
      }
      </div>
      </div>

    
    </div>
  )
}

export default Weather
