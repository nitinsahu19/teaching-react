import React, { useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const SearchGithub = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    setInput("");
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-amber-50 items-center">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-amber-700">
            GitHub Profile
          </h1>

          <div className="flex gap-2 mb-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter GitHub username"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={SearchGithub}
              className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition-all"
            >
              Search
            </button>
          </div>

          {data.name && (
            <div className="text-center mt-6">
              <div className="flex justify-center">
                <img
                  src={data.avatar_url}
                  alt="GitHub Avatar"
                  className="w-24 h-24 rounded-full border-4 border-amber-300 shadow-md"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">{data.name}</h2>
              <p className="text-gray-600 mt-1">{data.login}</p>
              <div className="mt-4 flex justify-around text-sm text-gray-700">
                <p>
                  <span className="font-bold">{data.followers}</span> Followers
                </p>
                <p>
                  <span className="font-bold">{data.following}</span> Following
                </p>
                <p>
                  <span className="font-bold">{data.public_repos}</span> Repos
                </p>
              </div>
              <div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Github;
