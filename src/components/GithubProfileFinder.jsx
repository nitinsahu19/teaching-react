import { useState } from "react";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGithubUser = async () => {
    if (!username) return setError("Please enter a GitHub username");

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        setError("User not found");
        setUserData(null);
      } else {
        setUserData(data);
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch user");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={fetchGithubUser}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {userData && (
        <div className="mt-4 text-left">
          <img
            src={userData.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-full mb-2"
          />
          <p>👤 Name: {userData.name || "N/A"}</p>
          <p>📦 Public Repos: {userData.public_repos}</p>
          <p>👥 Followers: {userData.followers}</p>
          <p>📝 Bio: {userData.bio || "No bio available"}</p>
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
