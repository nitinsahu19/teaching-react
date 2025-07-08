import React, { useState } from 'react';

function Github() {
    const [username, setUsername] = useState('');
    const [data, setData] = useState(null);

    const submitBtn = () => {
        fetch(`https://api.github.com/users/${username}`)
            .then((resp) => resp.json())
            .then((datas) => {
                console.log(datas);
                setData(datas);
                setUsername('')
            })
            .catch((err) => console.log(err, 'Something went wrong'));

    }; 


    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[30vh] gap-5 bg-gray-100 p-6 rounded-2xl shadow-lg w-full mx-auto">
                <h2 className="text-2xl font-bold text-gray-700">GitHub Profile Checker</h2>

                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your GitHub ID" className="w-90 h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200" />

                <button onClick={submitBtn} className="w-90 h-11 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200"> Submit</button>
            </div>

            {data && (
                <div className="mt-8 text-center">
                    <img src={data.avatar_url} className="w-32 h-32 rounded-full mx-auto" />
                    <p className="text-lg font-bold mt-4">Username: {data.login}</p>
                    <p>ID: {data.id}</p>
                    <p>Location: {data.location}</p>
                    <p>Profile: <a href={data.html_url} className="text-blue-500 underline">{data.html_url}</a></p>
                </div>
            )}
        </>
    );
}

export default Github;
