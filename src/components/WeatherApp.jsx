import React, { useEffect, useState } from 'react'

function WeatherApp() {
    const [api, setapi] = useState('')
    const [cityname, setCityName] = useState('')

    const getweather = () => {
       
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=192a5f42dcef69d49a124cf0e8c0a7cc&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                setapi(res)
            })
            .catch((err) => console.err("the approch has wrong", err))
    }
    useEffect(() => {
        getweather
    }, [api])
    // console.log(api)
    return (

        <>
            <input type="text" placeholder='Enter city name' value={cityname} onChange={(e) => setCityName(e.target.value)} className='text-center border-4 rounded p-3' />

            <button className='border rounded m-2 p-2' onClick={getweather}>Get weather</button>

            {api && <div>

                <div>
                    <h1 className='m-3'>⭐Temperature :- {api.main.temp}</h1>
                    <h1 className='m-3'>Pressure :- {api.main.pressure}</h1>
                    <h1 className='m-3'>Humidity :- {api.main.humidity}</h1>
                </div>


            </div>}
            

            { api.cod !== 200 && <div>
                <p className='text-red-500 '>Not a city name</p>
            </div>}

        </>
    )
}

export default WeatherApp