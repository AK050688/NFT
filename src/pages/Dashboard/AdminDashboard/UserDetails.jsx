import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../api/admin';

function UserModal({ user, open, onClose, onSave, isEdit }) {
  const [editUser, setEditUser] = useState(user || {});
  useEffect(() => { setEditUser(user || {}); }, [user]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#181818] rounded-xl p-6 w-full max-w-md text-white relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit User' : 'User Details'}</h2>
        <div className="space-y-2">
          <div><b>Email:</b> {user.email}</div>
          <div><b>Role:</b> {isEdit ? (
            <select className="bg-[#232046] rounded px-2 py-1" value={editUser.userType || ''} onChange={e => setEditUser(u => ({...u, userType: e.target.value}))}>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          ) : user.userType || user.role}</div>
          <div><b>Status:</b> {isEdit ? (
            <select className="bg-[#232046] rounded px-2 py-1" value={editUser.status || ''} onChange={e => setEditUser(u => ({...u, status: e.target.value}))}>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          ) : (user.status || (user.isActive ? 'Active' : 'Inactive'))}</div>
          <div><b>Username:</b> {user.userName || user.username}</div>
          <div><b>Referred By:</b> {user.referredBy ? (typeof user.referredBy === 'object' ? (user.referredBy.userName || 'N/A') : user.referredBy) : 'N/A'}</div>
          <div><b>Created:</b> {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}</div>
        </div>
        {isEdit && (
          <button onClick={() => onSave(editUser)} className="mt-6 w-full bg-[#D54CFF] py-2 rounded-full text-white font-bold hover:bg-[#b13be0] transition">Save</button>
        )}
      </div>
    </div>
  );
}

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalUser, setModalUser] = useState(null);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllUsers({ page: 1, limit: 20 });
        const usersArray = Array.isArray(data.result?.docs) ? data.result.docs : 
                          Array.isArray(data.result) ? data.result : 
                          Array.isArray(data) ? data : 
                          Array.isArray(data.users) ? data.users : 
                          Array.isArray(data.data) ? data.data : [];
        setUsers(usersArray);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
        setUsers([]);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const openModal = (user, isEdit) => {
    setModalUser(user);
    setModalEdit(isEdit);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const handleSave = (updatedUser) => {
    // TODO: Call API to update user, then refresh list
    setUsers(users => users.map(u => u._id === updatedUser._id ? updatedUser : u));
    setModalOpen(false);
  };

  if (loading) return <div className="text-white text-center mt-10">Loading users...</div>;
  if (error) return <div className="text-red-400 text-center mt-10">{error}</div>;

  const usersArray = Array.isArray(users) ? users : [];

  return (
    <div className="bg-black min-h-screen pt-16 p-2 sm:p-6">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md w-full flex flex-col min-h-screen">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">User Details</h2>
        <div className="overflow-x-auto flex-1">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#18122B]">
                <th className="py-2 px-2 sm:px-4">Email</th>
                <th className="py-2 px-2 sm:px-4">Role</th>
                <th className="py-2 px-2 sm:px-4">Status</th>
                <th className="py-2 px-2 sm:px-4">Battles</th>
                <th className="py-2 px-2 sm:px-4">Rewards</th>
                <th className="py-2 px-2 sm:px-4">Referred By</th>
                <th className="py-2 px-2 sm:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersArray.map((user, idx) => (
                <tr key={user._id || idx} className="border-b border-[#18122B] hover:bg-[#18122B] transition">
                  <td className="py-2 px-2 sm:px-4">{user.email}</td>
                  <td className="py-2 px-2 sm:px-4">{user.userType || user.role}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <span className={user.status === 'ACTIVE' || user.status === 'Active' ? 'text-green-400' : 'text-red-400'}>
                      {user.status || (user.isActive ? 'Active' : 'Inactive')}
                    </span>
                  </td>
                  <td className="py-2 px-2 sm:px-4">{Array.isArray(user.battlesParticipated) ? user.battlesParticipated.length : 0}</td>
                  <td className="py-2 px-2 sm:px-4">{Array.isArray(user.rewards) ? user.rewards.length : 0}</td>
                  <td className="py-2 px-2 sm:px-4">{user.referredBy ? (typeof user.referredBy === 'object' ? (user.referredBy.userName || 'N/A') : user.referredBy) : 'N/A'}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <button className="bg-[#D54CFF] text-white px-3 py-1 rounded mr-2 text-xs" onClick={() => openModal(user, false)}>View</button>
                    <button className="bg-[#232046] border border-[#D54CFF] text-[#D54CFF] px-3 py-1 rounded text-xs" onClick={() => openModal(user, true)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserModal user={modalUser} open={modalOpen} onClose={closeModal} onSave={handleSave} isEdit={modalEdit} />
    </div>
  );
} 