import React, { useState } from 'react';

const mockReferrals = [
  { id: 'REF001', user: 'John Doe', referred: 'Alice', date: '2024-06-01', status: 'Active', reward: '0.5 ETH' },
  { id: 'REF002', user: 'Jane Smith', referred: 'Bob', date: '2024-06-02', status: 'Pending', reward: '0.3 ETH' },
  { id: 'REF003', user: 'Alice', referred: 'Charlie', date: '2024-06-03', status: 'Active', reward: '0.2 ETH' },
  { id: 'REF004', user: 'Bob', referred: 'David', date: '2024-06-04', status: 'Inactive', reward: '0.0 ETH' },
  { id: 'REF005', user: 'Charlie', referred: 'Eve', date: '2024-06-05', status: 'Active', reward: '0.4 ETH' },
];

const statusColors = {
  Active: 'text-green-400',
  Pending: 'text-yellow-400',
  Inactive: 'text-red-400',
};

export default function ReferralDetails() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = mockReferrals.filter(ref =>
    (ref.user.toLowerCase().includes(search.toLowerCase()) ||
      ref.referred.toLowerCase().includes(search.toLowerCase()) ||
      ref.id.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter ? ref.status === statusFilter : true)
  );

  return (
    <div className="bg-black min-h-screen pt-24 p-6">
      <div className="bg-[#181818] rounded-xl p-8 text-white shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Referral Details</h2>
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by user, referred, or Referral ID..."
            className="bg-[#232046] text-white px-4 py-2 rounded-md w-full md:w-1/2 focus:outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="bg-[#232046] text-white px-4 py-2 rounded-md focus:outline-none"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        {/* Referrals Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#232046]">
                <th className="py-2 px-4">Referral ID</th>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">Referred</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Reward</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">No referrals found.</td>
                </tr>
              ) : (
                filtered.map((ref, idx) => (
                  <tr key={idx} className="border-b border-[#232046] hover:bg-[#232046] transition">
                    <td className="py-2 px-4">{ref.id}</td>
                    <td className="py-2 px-4">{ref.user}</td>
                    <td className="py-2 px-4">{ref.referred}</td>
                    <td className="py-2 px-4">{ref.date}</td>
                    <td className={`py-2 px-4 font-bold ${statusColors[ref.status]}`}>{ref.status}</td>
                    <td className="py-2 px-4">{ref.reward}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 