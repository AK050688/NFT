import React from "react";
import { FaUserCircle } from "react-icons/fa";
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

const wallets = [
  { name: "METAMASK", walletAddress: "0x093f91n", balance: "2.4356 ETH" },
  { name: "WALLET CONNECT", walletAddress: "0x093f91n", balance: "2.4356 ETH" },
];

export default function UserDashboardHome() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 bg-[#FFFFFF1A] p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <img src="/Images/profile.png" alt="img" className="w-[17%]" />
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold p-1">NFT PROJECT</h1>
            <h1 className="text-xs text-gray-400 p-1">@nft project</h1>
            <p className="text-sm text-gray-400 p-1">Digital artist and NFT collector. Creating unique pieces in the metaverse.</p>
            <p className="text-xs text-gray-500 mt-1 p-1">Joined March 2022</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Transaction History */}
        <div className="bg-[#FFFFFF1A] p-4 rounded-xl col-span-2">
          <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
          <table className="w-full text-sm">
            <thead className="">
              <tr>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Action</th>
                <th className="text-left py-2">Token</th>
                <th className="text-left py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className=" ">
                  <td className="py-2 text-gray-400">{tx.date}</td>
                  <td className={`py-2 font-bold ${tx.action === "Buy" ? "  text-green-500" : "text-red-500"}`}>{tx.action}</td>
                  <td className="py-2 text-gray-300">{tx.token}</td>
                  <td className="py-2 text-white">{tx.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Wallet Balance */}
        <div className="bg-[#FFFFFF1A] p-4 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Wallet Balance</h2>
          <div className="text-2xl mt-8 font-bold text-white">2.4356 ETH</div>
          <div className="text-sm mt-4 text-gray-400">$2,368 USD</div>
          <div className="text-green-500 mt-4 text-xs flex gap-2 justify-center items-center"><IoTrendingUpOutline className="text-xl"/>2.4% (24h)</div>
        </div>

        {/* Total Volume */}
        <div className="bg-[#FFFFFF1A] p-4 rounded-xl">
          <h2 className="text-sm text-gray-400">Total Volume</h2>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <FaEthereum /> 2.4356 ETH
          </div>
          <div className="text-green-500 text-sm mt-1">+2.4%</div>
        </div>

        {/* Total Transactions */}
        <div className="bg-[#FFFFFF1A]  p-4 rounded-xl">
          <h2 className="text-sm text-gray-400">NFTs Traded</h2>
          <div className="text-xl font-bold text-white">89</div>
          <div className="text-green-500 text-sm mt-1">+6.4%</div>
        </div>

        {/* Linked Wallets */}
        <div className="bg-[#FFFFFF1A]  p-4 rounded-xl md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Linked Wallets</h2>
          {wallets.map((wallet, index) => (
            <div key={index} className="mb-3 bg-[#FFFFFF33] flex w-full justify-between items-center  px-10 py-6 rounded-2xl">
              <div className="">
                <div className="flex flex-col">
                  <p className="text-sm text-white font-semibold">{wallet.name}</p>
                  <p className="text-xs text-gray-400">{wallet.walletAddress}</p>
                </div>
                <p className="text-sm font-bold text-white">{wallet.balance}</p>
              </div>
              <IoCopyOutline  className="text-2xl"/>
            </div>
          ))}
          <button className="mt-4 flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-2xl text-sm">
            <FaPlus className="text-lg" /> Link new wallet
          </button>
        </div>
      </div>
    </>
  );
} 