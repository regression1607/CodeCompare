import { FaTrophy, FaHome, FaUsers } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full max-w-4xl mb-6 flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="text-yellow-400 font-bold text-xl flex items-center">
        <FaTrophy className="mr-2" /> LeetCode Leaderboard
      </div>
      <div className="flex gap-6 text-gray-300">
        <button className="hover:text-white flex items-center"><FaHome className="mr-1" /> Home</button>
        <button className="hover:text-white flex items-center"><FaUsers className="mr-1" /> Compare</button>
      </div>
    </div>
  );
}

export default Header;
