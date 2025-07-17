import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../../api/auth";
import { FaEthereum } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

const transactions = [
  { date: "10/06/2023", action: "Buy", token: "Cosmic eye #2150", price: "1.27 ETH" },
  { date: "09/06/2023", action: "Sell", token: "Cosmic eye #2150", price: "1.30 ETH" },
  { date: "08/06/2023", action: "Buy", token: "Cosmic eye #2150", price: "1.25 ETH" },
  { date: "07/06/2023", action: "Buy", token: "Cosmic eye #2150", price: "1.27 ETH" },
  { date: "06/06/2023", action: "Buy", token: "Cosmic eye #2150", price: "1.23 ETH" },
  { date: "05/06/2023", action: "Sell", token: "Cosmic eye #2150", price: "1.20 ETH" },
];

export default function UserDashboardHome() {
  const reduxUser = useSelector(state => state.auth.user);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProfile();
        setUser(data.result);
      } catch (err) {
        setError("Failed to fetch profile from API. Showing cached info.");
        setUser(reduxUser);
      }
      setLoading(false);
    };
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white text-xl">Loading profile...</div>;
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center text-white text-xl">No user profile found.</div>;
  }

  // Helper for address
  const fullAddress = [user.addressLine, user.city, user.state, user.zipCode, user.countryCode].filter(Boolean).join(", ");

  return (
    <div className="min-h-screen bg-black pt-8 pb-16 px-2 md:px-10">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto bg-[#1a1a2e] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center mb-10">
        <img
          src={user.profileImage || "/Images/profile.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
        />
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{user.firstName} {user.lastName} <span className="text-purple-400 text-lg font-normal">({user.userName})</span></h1>
              <p className="text-gray-400 text-sm mt-1">{user.email}</p>
              <p className="text-gray-400 text-sm">Wallet Address: <span className="text-white font-mono">{user.walletAddress || "-"}</span></p>
              <p className="text-gray-400 text-sm">USDT Wallet: <span className="text-white">{user.usdtWallet}</span></p>
              <p className="text-gray-400 text-sm">Referral Code: <span className="text-white">{user.referralCode}</span></p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === "ACTIVE" ? "bg-green-700 text-green-200" : "bg-red-700 text-red-200"}`}>{user.status}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.isVerified ? "bg-blue-700 text-blue-200" : "bg-yellow-700 text-yellow-200"}`}>{user.isVerified ? "Verified" : "Not Verified"}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-700 text-purple-200">{user.userType}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-gray-300 text-sm">
            <div><span className="font-semibold text-white">Phone:</span> {user.mobileNumber || "-"}</div>
            <div><span className="font-semibold text-white">DOB:</span> {user.dateOfBirth || "-"}</div>
            <div><span className="font-semibold text-white">Joined:</span> {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}</div>
          </div>
          <div className="mt-2 text-gray-300 text-sm"><span className="font-semibold text-white">Address:</span> {fullAddress || "-"}</div>
        </div>
      </div>

      {error && <div className="text-red-400 text-center mt-4">{error}</div>}

      {/* Wallet & Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Wallet Balance */}
        <div className="bg-[#23234a] p-6 rounded-xl text-center shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">Wallet Balance</h2>
          <div className="text-2xl mt-4 font-bold text-white">{user.wallet} ETH</div>
          <div className="text-sm mt-2 text-gray-400">USDT: {user.usdtWallet}</div>
          <div className="text-green-500 mt-4 text-xs flex gap-2 justify-center items-center"><IoTrendingUpOutline className="text-xl"/>2.4% (24h)</div>
        </div>
        {/* Total Volume (Placeholder) */}
        <div className="bg-[#23234a] p-6 rounded-xl text-center shadow">
          <h2 className="text-sm text-gray-400">Total Volume</h2>
          <div className="text-xl font-bold text-white flex items-center gap-2 justify-center">
            <FaEthereum /> {user.totalVolume ? `${user.totalVolume} ETH` : "-"}
          </div>
          <div className="text-green-500 text-sm mt-1">+2.4%</div>
        </div>
        {/* NFTs Traded (Placeholder) */}
        <div className="bg-[#23234a] p-6 rounded-xl text-center shadow">
          <h2 className="text-sm text-gray-400">NFTs Traded</h2>
          <div className="text-xl font-bold text-white">{user.nftsTraded || "-"}</div>
          <div className="text-green-500 text-sm mt-1">+6.4%</div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="max-w-4xl mx-auto bg-[#1a1a2e] p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-white">Transaction History</h2>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 text-gray-400">Date</th>
              <th className="text-left py-2 text-gray-400">Action</th>
              <th className="text-left py-2 text-gray-400">Token</th>
              <th className="text-left py-2 text-gray-400">Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b border-gray-800 last:border-0">
                <td className="py-2 text-gray-400">{tx.date}</td>
                <td className={`py-2 font-bold ${tx.action === "Buy" ? "text-green-500" : "text-red-500"}`}>{tx.action}</td>
                <td className="py-2 text-gray-300">{tx.token}</td>
                <td className="py-2 text-white">{tx.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 