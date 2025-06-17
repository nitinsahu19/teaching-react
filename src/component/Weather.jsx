import React from 'react'
import { useState, useEffect } from 'react'

const Weather = () => {
    const [cityweather, setCityweather] = useState('')
    const [Apis, setApis] = useState('')


    const fetchcity = () => {
        if (Apis === "") {
            alert("Please enter a city name")
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Apis}&appid=a65c31188fb818a04bb6cc14ac838c6d&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setCityweather(res)
            })
            .catch((err) => console.log("invalid", err) ,  alert("Please enter a valid city name"))
    }
    

    useEffect(() => {
        fetchcity
    }, [cityweather])
    console.log(cityweather)
    console.log(Apis)

    return (
        <>
            <div className='classs'>

                <h1 className='text-3xl font-bold text-center'>Weather App</h1>

                <div className='w-full flex justify-center mt-10'>
                    <div className='w-96 border rounded-xl p-6 shadow-lg'>
                        <input onChange={(e) => setApis(e.target.value)} className='border w-full h-10 px-4 rounded-xl mb-4' type="text" placeholder='Enter Your City' />
                        <button onClick={fetchcity} className='w-full h-10 bg-amber-400 rounded-xl font-semibold hover:bg-amber-500 cursor-pointer' >
                            Get Weather
                        </button>
                    </div>
                </div>


                {cityweather && <div className='text-center mt-10'>
                    <p className='py-2'>🏙️ City: {cityweather.name}</p>
                    <p className='py-2'>🌡️ Temp: {cityweather.main.temp}°C</p>
                    <p className='py-2'>💧 Humidity: {cityweather.main.humidity}%</p>
                    <p className='py-2'>🔽Pressure: {cityweather.main.pressure} hPa</p>
                </div>}

                {cityweather.cod !== 200 && <h1 className='text-center'>
                    <p className='text-red-500 ml-10 mt-5 font-bold'>❌कृपया मान्य शहर का नाम दर्ज करें और फिर से प्रयास करें।</p>
                </h1>}
            </div>
        </>
    )
}

export default Weather
