import React, { useState } from 'react';

const mockBids = [
  { id: 'BID001', user: 'John Doe', nft: 'Neo Apes #123', amount: '2.4 ETH', date: '2024-06-01', status: 'Active' },
  { id: 'BID002', user: 'Jane Smith', nft: 'Cyber Squad #45', amount: '1.1 ETH', date: '2024-06-02', status: 'Won' },
  { id: 'BID003', user: 'Alice', nft: 'Meta Masks #7', amount: '0.8 ETH', date: '2024-06-03', status: 'Lost' },
  { id: 'BID004', user: 'Bob', nft: 'Neo Apes #99', amount: '3.0 ETH', date: '2024-06-04', status: 'Active' },
  { id: 'BID005', user: 'Charlie', nft: 'Cyber Squad #12', amount: '1.7 ETH', date: '2024-06-05', status: 'Won' },
];

const statusColors = {
  Active: 'text-yellow-400',
  Won: 'text-green-400',
  Lost: 'text-red-400',
};

export default function BidDetails() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = mockBids.filter(bid =>
    (bid.user.toLowerCase().includes(search.toLowerCase()) ||
      bid.nft.toLowerCase().includes(search.toLowerCase()) ||
      bid.id.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter ? bid.status === statusFilter : true)
  );

  return (
    <div className="bg-black min-h-screen pt-24 p-6">
      <div className="bg-[#181818] rounded-xl p-8 text-white shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Bid Details</h2>
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by user, NFT, or Bid ID..."
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
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </select>
        </div>
        {/* Bids Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#232046]">
                <th className="py-2 px-4">Bid ID</th>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">NFT</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">No bids found.</td>
                </tr>
              ) : (
                filtered.map((bid, idx) => (
                  <tr key={idx} className="border-b border-[#232046] hover:bg-[#232046] transition">
                    <td className="py-2 px-4">{bid.id}</td>
                    <td className="py-2 px-4">{bid.user}</td>
                    <td className="py-2 px-4">{bid.nft}</td>
                    <td className="py-2 px-4">{bid.amount}</td>
                    <td className="py-2 px-4">{bid.date}</td>
                    <td className={`py-2 px-4 font-bold ${statusColors[bid.status]}`}>{bid.status}</td>
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