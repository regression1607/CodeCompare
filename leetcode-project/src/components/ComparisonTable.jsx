import TableRow from "./TableRow";
import UserAvatar from "./UserAvatar";

function ComparisonTable({ users }) {
  return (
    <div className="mt-6 w-full max-w-4xl overflow-x-auto">
      <table className="w-full bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4">Profile</th>
            {users.map(user => <th key={user.username} className="p-4">{user.username}</th>)}
          </tr>
        </thead>
        <tbody>
          <TableRow title="Avatar" contents={users.map(user => <UserAvatar key={user.username} data={user} />)} />
          <TableRow title="Rank" contents={users.map(user => user.profile.ranking)} />
          <TableRow title="Easy Solved" contents={users.map(user => user.submitStatsGlobal.acSubmissionNum[1].count)} />
          <TableRow title="Medium Solved" contents={users.map(user => user.submitStatsGlobal.acSubmissionNum[2].count)} />
          <TableRow title="Hard Solved" contents={users.map(user => user.submitStatsGlobal.acSubmissionNum[3].count)} />
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
