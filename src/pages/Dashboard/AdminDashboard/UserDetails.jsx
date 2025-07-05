import React from 'react';

const users = [
  { username: 'user1', email: 'user1@email.com', role: 'User', status: 'Active' },
  { username: 'admin', email: 'admin@email.com', role: 'Admin', status: 'Active' },
  { username: 'user2', email: 'user2@email.com', role: 'User', status: 'Banned' },
  { username: 'user3', email: 'user3@email.com', role: 'User', status: 'Active' },
];

export default function UserDetails() {
  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="bg-[#181818] rounded-xl p-8 text-white shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#18122B]">
                <th className="py-2 px-4">Username</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b border-[#18122B] hover:bg-[#18122B] transition">
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <span className={
                      user.status === 'Active'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="bg-[#D54CFF] text-white px-3 py-1 rounded mr-2 text-xs">View</button>
                    <button className="bg-[#232046] border border-[#D54CFF] text-[#D54CFF] px-3 py-1 rounded text-xs">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 