import React, { useState } from "react";
import Header from "./Header";

function GitHub() {
  const [inpUser, setInputUser] = useState("");
  const [data, setData] = useState(null);

  const searchHandler = () => {
    if (!inpUser) return;
    fetch(`https://api.github.com/users/${inpUser}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    setInputUser("");
  };

  return (
    <>
      <Header />

      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-xl mx-auto bg-gray-200 p-6 rounded-xl shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">GitHub Profile Finder</h2>

          <div className="flex gap-3 mb-6">
            <input
              value={inpUser}
              onChange={(e) => setInputUser(e.target.value)}
              className="flex-grow px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter GitHub username"
            />
            <button
              onClick={searchHandler}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>

          {data && data.login ? (
            <div className="text-center">
              <img
                src={data.avatar_url}
                alt="Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300"
              />
              <h3 className="text-xl font-semibold text-gray-700">{data.name || "No name provided"}</h3>
              <p className="text-gray-500 mb-2">@{data.login}</p>
              <div className="grid grid-cols-3 gap-4 text-sm mt-4">
                <div>
                  <span className="block font-bold">{data.followers}</span>
                  <span className="text-gray-600">Followers</span>
                </div>
                <div>
                  <span className="block font-bold">{data.following}</span>
                  <span className="text-gray-600">Following</span>
                </div>
                <div>
                  <span className="block font-bold">{data.public_repos}</span>
                  <span className="text-gray-600">Repos</span>
                </div>
              </div>
            </div>
          ) : data ? (
            <p className="text-center text-red-500 font-medium">User not found</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default GitHub;
