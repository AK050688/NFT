import React from 'react';

const users = [
  { username: 'user1', email: 'user1@email.com', role: 'User', status: 'Active' },
  { username: 'admin', email: 'admin@email.com', role: 'Admin', status: 'Active' },
  { username: 'user2', email: 'user2@email.com', role: 'User', status: 'Banned' },
  { username: 'user3', email: 'user3@email.com', role: 'User', status: 'Active' },
];

export default function UserDetails() {
  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-24 p-2 sm:p-6">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md max-w-3xl mx-auto flex flex-col min-h-screen">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">User Details</h2>
        {/* Table view for sm and up */}
        <div className="overflow-x-auto hidden sm:block flex-1">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#18122B]">
                <th className="py-2 px-2 sm:px-4">Username</th>
                <th className="py-2 px-2 sm:px-4">Email</th>
                <th className="py-2 px-2 sm:px-4">Role</th>
                <th className="py-2 px-2 sm:px-4">Status</th>
                <th className="py-2 px-2 sm:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b border-[#18122B] hover:bg-[#18122B] transition">
                  <td className="py-2 px-2 sm:px-4">{user.username}</td>
                  <td className="py-2 px-2 sm:px-4">{user.email}</td>
                  <td className="py-2 px-2 sm:px-4">{user.role}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <span className={
                      user.status === 'Active'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-2 sm:px-4">
                    <button className="bg-[#D54CFF] text-white px-3 py-1 rounded mr-2 text-xs">View</button>
                    <button className="bg-[#232046] border border-[#D54CFF] text-[#D54CFF] px-3 py-1 rounded text-xs">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Card view for mobile */}
        <div className="block sm:hidden space-y-4 flex-1">
          {users.map((user, idx) => (
            <div key={idx} className="bg-[#232046] rounded-lg p-4 shadow flex flex-col gap-2">
              <div><span className="font-bold">Username:</span> {user.username}</div>
              <div><span className="font-bold">Email:</span> {user.email}</div>
              <div><span className="font-bold">Role:</span> {user.role}</div>
              <div>
                <span className="font-bold">Status:</span> <span className={user.status === 'Active' ? 'text-green-400' : 'text-red-400'}>{user.status}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#D54CFF] text-white px-3 py-1 rounded text-xs flex-1">View</button>
                <button className="bg-[#232046] border border-[#D54CFF] text-[#D54CFF] px-3 py-1 rounded text-xs flex-1">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 