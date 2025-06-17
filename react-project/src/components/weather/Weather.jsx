import React, { useEffect, useState } from 'react'
import ClearIcon from '../../assets/clear.png'
import HumidityIcon from '../../assets/humidity.png'
import WindIcon from '../../assets/wind.png'



const Weather = () => {

  const [weatherData, setWeatherData] = useState(false);
  const search = async (city)=>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed854c2b5be1b2c5ea3389ad4c66691c&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setWeatherData({
        temp: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        
      });
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  }
useEffect(()=>{
  search("Thane");
},[])
  const [city, setCity] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="p-6 bg-white/20 bg-opacity-20 rounded-lg shadow-lg w-90">
        <h1 className="text-center text-2xl font-bold mb-4">Weather App</h1>
        <div className="search-bar flex items-center justify-center mb-6 bg-white text-black">
          <input
            type="text"
            placeholder="Search for a city..."
            className="border rounded-lg px-4 py-2 w-full  "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          </div>
        <div className='text-center'>

        <button
          className="bg-gradient-to-l from-blue-500 to-purple-500 text-white p-2  hover:bg-gradient-to-r from-blue-500 to-purple-500"
          onClick={() => search(city)}
        >
          Get Weather
        </button>
        </div>
        <div className="text-center mb-6">
          <img
            src={weatherData.icon || ClearIcon}
            alt="Weather Icon"
            className="mx-auto w-16 h-16"
          />
          <p className="text-xl font-semibold">{weatherData.temp}°C</p>
          <p className="text-lg">{weatherData.location}</p>
        </div>
        <div className="weather_data grid grid-cols-2 gap-4">
          <div className="col flex items-center bg-white/20 p-3 rounded-lg shadow-md">
            <img
              src={HumidityIcon}
              alt="Humidity Icon"
              className="w-8 h-8 mr-2"
            />
            <div>
              <p className="text-lg font-semibold">{weatherData.humidity} %</p>
              <span className="text-xs">Humidity</span>
            </div>
          </div>
          <div className="col flex items-center bg-white/20 p-3 rounded-lg shadow-md">
            <img src={WindIcon} alt="Wind Icon" className="w-8 h-8 mr-2" />
            <div>
              <p className="text-lg font-semibold">{weatherData.windSpeed} km/h</p>
              <span className="text-xs">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather
