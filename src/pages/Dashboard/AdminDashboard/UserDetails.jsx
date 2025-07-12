import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../api/admin';

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllUsers({ page: 1, limit: 20 });
        
        // Ensure users is always an array
        const usersArray = Array.isArray(data.result?.docs) ? data.result.docs : 
                          Array.isArray(data.result) ? data.result : 
                          Array.isArray(data) ? data : 
                          Array.isArray(data.users) ? data.users : 
                          Array.isArray(data.data) ? data.data : [];
        
        setUsers(usersArray);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
        setUsers([]); // Set empty array on error
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="text-white text-center mt-10">Loading users...</div>;
  if (error) return <div className="text-red-400 text-center mt-10">{error}</div>;
  
  // Ensure users is an array before rendering
  const usersArray = Array.isArray(users) ? users : [];

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-24 p-2 sm:p-6">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md max-w-3xl mx-auto flex flex-col min-h-screen">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">User Details</h2>
        {/* Table view for sm and up */}
        <div className="overflow-x-auto hidden sm:block flex-1">
          {usersArray.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p>No users found</p>
            </div>
          ) : (
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
                {usersArray.map((user, idx) => (
                <tr key={user._id || idx} className="border-b border-[#18122B] hover:bg-[#18122B] transition">
                  <td className="py-2 px-2 sm:px-4">{user.userName || user.username}</td>
                  <td className="py-2 px-2 sm:px-4">{user.email}</td>
                  <td className="py-2 px-2 sm:px-4">{user.userType || user.role}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <span className={user.status === 'Active' ? 'text-green-400' : 'text-red-400'}>
                      {user.status || (user.isActive ? 'Active' : 'Inactive')}
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
          )}
        </div>
        {/* Card view for mobile */}
        <div className="block sm:hidden space-y-4 flex-1">
          {usersArray.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p>No users found</p>
            </div>
          ) : (
            usersArray.map((user, idx) => (
            <div key={user._id || idx} className="bg-[#232046] rounded-lg p-4 shadow flex flex-col gap-2">
              <div><span className="font-bold">Username:</span> {user.userName || user.username}</div>
              <div><span className="font-bold">Email:</span> {user.email}</div>
              <div><span className="font-bold">Role:</span> {user.userType || user.role}</div>
              <div>
                <span className="font-bold">Status:</span> <span className={user.status === 'Active' ? 'text-green-400' : 'text-red-400'}>{user.status || (user.isActive ? 'Active' : 'Inactive')}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#D54CFF] text-white px-3 py-1 rounded text-xs flex-1">View</button>
                <button className="bg-[#232046] border border-[#D54CFF] text-[#D54CFF] px-3 py-1 rounded text-xs flex-1">Edit</button>
              </div>
            </div>
          ))
          )}
        </div>
      </div>
    </div>
  );
} 