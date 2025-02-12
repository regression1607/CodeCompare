function TopThreeWinners({ users }) {
    return (
      <div className="mt-6 bg-yellow-500 p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h2 className="text-xl font-bold text-yellow-900 mb-2">🏆 Top Performers</h2>
        <div className="flex justify-center gap-6">
          {users.map((user, index) => (
            <div key={user.username} className="flex flex-col items-center">
              <img src={user.profile.userAvatar} alt={user.username} className="w-20 h-20 rounded-full border-4 border-yellow-700" />
              <p className="font-bold text-gray-900">{index + 1}. {user.username}</p>
              <p className="text-sm text-gray-800">Rank: {user.profile.ranking}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TopThreeWinners;
  