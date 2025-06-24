import React, { useEffect, useState } from 'react';
import downloadImg from "../../assets/download.jpeg";

const GithubUser = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const search = async (username) => {
    try {
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };

  useEffect(() => {
    search("neetukumawat"); 
  }, []);

  return (
    <div className={`p-6 flex flex-col items-center min-h-screen transition-colors duration-300 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      
      <div className="flex gap-5 items-center justify-between w-full max-w-3xl mb-6">
        <h1 className="text-3xl text-indigo-500">GitHub User</h1>

        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md shadow text-sm transition ${
            isDarkTheme ? 'bg-gray-700 text-white':'bg-gray-200 text-black' 
          }`}
        >
          {isDarkTheme ?  '☀️ Light Mode':'🌙 Dark Mode'}
        </button>
      </div>

      <div className="flex gap-4 mb-6 mt-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={() => search(username)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      {userData && (
        <div className={`rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 w-full max-w-3xl ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <div className="w-32 h-32 overflow-hidden rounded-full border">
            <img src={userData.avatar_url || downloadImg} alt="User" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">{userData.name || "Name not available"}</h2>
              <h3 className="text-sm text-gray-500">@{userData.login || "Unknown"}</h3>
            </div>

            <p className="mb-4">
              {userData.bio || "No bio available."}
            </p>

            <div className="flex gap-8 text-center">
              <div>
                <h2 className="text-md font-semibold">Repos</h2>
                <h3 className="text-lg font-bold text-indigo-600">{userData.public_repos}</h3>
              </div>
              <div>
                <h2 className="text-md font-semibold">Followers</h2>
                <h3 className="text-lg font-bold text-indigo-600">{userData.followers}</h3>
              </div>
              <div>
                <h2 className="text-md font-semibold">Following</h2>
                <h3 className="text-lg font-bold text-indigo-600">{userData.following}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
