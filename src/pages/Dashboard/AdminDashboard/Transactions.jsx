import React, { useState } from 'react';

const mockTransactions = [
  { id: 'TXN001', user: 'John Doe', nft: 'Neo Apes #123', type: 'Buy', amount: '2.4 ETH', date: '2024-06-01', status: 'Completed' },
  { id: 'TXN002', user: 'Jane Smith', nft: 'Cyber Squad #45', type: 'Sell', amount: '1.1 ETH', date: '2024-06-02', status: 'Pending' },
  { id: 'TXN003', user: 'Alice', nft: 'Meta Masks #7', type: 'Buy', amount: '0.8 ETH', date: '2024-06-03', status: 'Failed' },
  { id: 'TXN004', user: 'Bob', nft: 'Neo Apes #99', type: 'Sell', amount: '3.0 ETH', date: '2024-06-04', status: 'Completed' },
  { id: 'TXN005', user: 'Charlie', nft: 'Cyber Squad #12', type: 'Buy', amount: '1.7 ETH', date: '2024-06-05', status: 'Completed' },
];

const statusColors = {
  Completed: 'text-green-400',
  Pending: 'text-yellow-400',
  Failed: 'text-red-400',
};

export default function Transactions() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = mockTransactions.filter(tx =>
    (tx.user.toLowerCase().includes(search.toLowerCase()) ||
      tx.nft.toLowerCase().includes(search.toLowerCase()) ||
      tx.id.toLowerCase().includes(search.toLowerCase())) &&
    (typeFilter ? tx.type === typeFilter : true) &&
    (statusFilter ? tx.status === statusFilter : true)
  );

  return (
    <div className="bg-black min-h-screen pt-24 p-2 sm:p-6 w-full">
      <div className="bg-[#181818] rounded-xl p-4 sm:p-8 text-white shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by user, NFT, or ID..."
            className="bg-[#232046] text-white px-4 py-2 rounded-md w-full md:w-1/2 focus:outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="bg-[#232046] text-white px-4 py-2 rounded-md focus:outline-none"
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
          <select
            className="bg-[#232046] text-white px-4 py-2 rounded-md focus:outline-none"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#232046]">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">NFT</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">No transactions found.</td>
                </tr>
              ) : (
                filtered.map((tx, idx) => (
                  <tr key={idx} className="border-b border-[#232046] hover:bg-[#232046] transition">
                    <td className="py-2 px-4">{tx.id}</td>
                    <td className="py-2 px-4">{tx.user}</td>
                    <td className="py-2 px-4">{tx.nft}</td>
                    <td className="py-2 px-4">{tx.type}</td>
                    <td className="py-2 px-4">{tx.amount}</td>
                    <td className="py-2 px-4">{tx.date}</td>
                    <td className={`py-2 px-4 font-bold ${statusColors[tx.status]}`}>{tx.status}</td>
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