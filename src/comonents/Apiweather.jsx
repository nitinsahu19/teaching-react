import React, { useEffect, useState } from 'react'

function Weather() {

    const [data, setData] = useState(null);
    const [apis, setapis] = useState('')

    const Apiweather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${apis}&appid=0e0f3586869126425295c826a8d305c2&units=metric`)
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setData(response)
            })
            .catch((err) => {
                console.log(err, 'something went wrong');
            })
    }

    useEffect(() => {
        Apiweather
    }, [data])

    console.log(data);

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Weather App</h1>

                <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                    <input className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' onChange={(e) => setapis(e.target.value)} type="text" placeholder='Enter your city' />
                    <button
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition" onClick={Apiweather} >Get</button>

                    {data && (
                        <div className="mt-4 text-center">
                            <p className="text-xl font-medium text-gray-700">{data.main.temp} °C</p>
                            <p className="text-gray-600">Max Temp = {data.main.temp_max} °C</p>
                            <p className="text-gray-600">pressure = {data.main.pressure} °C</p>
                            <p className="text-gray-600">humidity = {data.main.humidity} °C</p>
                            <p className="text-gray-600">feels_like = {data.main.feels_like} °C</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Weather
