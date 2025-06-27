import React, { useState } from "react";

function Weather() {
    const [inputCity, setInputCity] = useState();
    const [data, setData] = useState({});
    const [error, setError] = useState();

    const searchHandler = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=9db3dc169966afb50eaad5cfd3030cd1&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setInputCity("");
            })
            .catch((err) => console.log("error: ", err));
    };

    return (
        <div className="weather flex justify-center p-20">
            <div className="card w-150 shadow-2xl rounded-2xl">
                <div className="flex justify-center pt-10 ">
                    <div className="text-4xl font-bold">Weather</div>
                </div>
                <div className="flex justify-center gap-10 p-10 rounded ">
                    <div className="border-2 bg-white border-gray-500 rounded py-2 px-3">
                        <input
                            value={inputCity}
                            onChange={(e) => setInputCity(e.target.value)}
                            className=" outline-0"
                            placeholder="Enter city"
                            type="text"
                        />
                    </div>
                    <div>
                        <button
                            onClick={searchHandler}
                            className="bg-orange-500 rounded text-white px-3 py-2"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div >

                    <div className="flex text-2xl font-bold justify-center gap-10">
                        {data.name && <div>City : {data.name}</div>}
                        {data.message && <div>{data.message}</div>}
                    </div>
                    {data.main && (
                        <div className="flex text-2xl font-bold mt-10 justify-center gap-10">
                            <div>Temp : {data.main.temp}°C</div>
                            <div>Humidity : {data.main.humidity}%</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Weather;