import React from 'react'
import { useState, useEffect } from 'react'

const Weather = () => {
    const [cityweather, setCityweather] = useState('')
    const [Apis , setApis] = useState('')

    const fetchcity = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Apis}&appid=a65c31188fb818a04bb6cc14ac838c6d&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setCityweather(res)
            })
            .catch((err) => console.log("invalid", err))
    }


    
    useEffect(() => {
        fetchcity
    }, [cityweather])
    console.log(cityweather)

    return (
        <>

            <h1 className='text-3xl font-bold mt-10 text-center'>Weather App</h1>
            <div className='w-80 h-50 border p-10 mt-10 ml-10'>
                <div>
                    <input onChange={(e) => setApis(e.target.value)} className='border mt-5 ml-5 w-50 h-10 rounded-2xl' type="text" placeholder='Enter Your City' />
                </div>
                <button onClick={fetchcity} className='w-30 h-10 bg-amber-400 rounded-2xl mt-6 ml-10 cursor-pointer'>Click</button>
            </div>

           {cityweather && <div>
                <p>{cityweather.main.temp}</p>
                <p>{cityweather.main.grnd_level}</p>
            </div>}
            
           {cityweather.cod !==  200 &&<h1>
            <p className='text-red-500 ml-10 mt-5 font-bold'>invalid code please try again Api </p>
            </h1>}
        </>
    )
}

export default Weather
