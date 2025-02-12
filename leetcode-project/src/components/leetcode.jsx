import { useState } from "react";
import { fetchLeetCodeUser } from "../services/leetcodeService";
import Header from "./Header";
import TopThreeWinners from "./TopThreeWinners";
import ComparisonTable from "./ComparisonTable";
import { FaTrophy, FaSearch } from "react-icons/fa";

function LeetCodeProfile() {
  const [usernames, setUsernames] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    setError(null);
    setUsersData([]);
    setLoading(true);

    const usernameArray = usernames.split(",").map(name => name.trim()).filter(name => name);
    if (usernameArray.length === 0) {
      setError("Please enter at least one username.");
      setLoading(false);
      return;
    }

    const results = await Promise.all(usernameArray.map(fetchLeetCodeUser));
    const validUsers = results.filter(user => user !== null);

    if (validUsers.length === 0) {
      setError("No valid users found.");
    } else {
      setUsersData(validUsers.sort((a, b) => a.profile.ranking - b.profile.ranking));
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header className="w-full" />
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl font-bold mt-6 text-yellow-400 flex items-center justify-center">
          <FaTrophy className="mr-2 text-yellow-500" /> LeetCode Profile Comparison
        </h1>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto mt-6">
          <input
            type="text"
            className="border p-3 rounded-lg w-full bg-gray-800 text-white"
            placeholder="Enter usernames (comma-separated)"
            value={usernames}
            onChange={(e) => setUsernames(e.target.value)}
          />
          <button
            onClick={handleCompare}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 flex items-center justify-center"
          >
            <FaSearch className="mr-2" /> Compare
          </button>
        </div>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {loading && <p className="text-gray-400 mt-4 text-center">Loading...</p>}

        {usersData.length > 0 && (
          <div className="mt-8 w-full flex flex-col items-center">
            {usersData.length >= 1 && <TopThreeWinners users={usersData.slice(0, 3)} className="w-full max-w-3xl" />}
            <ComparisonTable users={usersData} className="w-full max-w-3xl mt-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LeetCodeProfile;
