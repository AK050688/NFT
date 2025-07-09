import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { IoPerson, IoCube, IoSwapHorizontal, IoClipboard } from 'react-icons/io5';

const metrics = [
  { label: 'Total Users', value: 1234,icon: <IoPerson className="text-2xl text-[#D54CFF]" /> },
  { label: 'NFTs Listed', value: 567, icon: <IoCube className="text-2xl text-[#D54CFF]" /> },
  { label: 'Transactions', value: 2890,icon: <IoSwapHorizontal className="text-2xl text-[#D54CFF]" /> },
  { label: 'Active Bids', value: 42, icon: <IoClipboard className="text-2xl text-[#D54CFF]" /> },
];

const barData = [
  { date: '1 Jul', sales: 20000, bids: 15000 },
  { date: '2 Jul', sales: 30000, bids: 18000 },
  { date: '3 Jul', sales: 25000, bids: 12000 },
  { date: '4 Jul', sales: 40000, bids: 22000 },
  { date: '5 Jul', sales: 52000, bids: 30000 },
  { date: '6 Jul', sales: 35000, bids: 20000 },
  { date: '7 Jul', sales: 42000, bids: 25000 },
  { date: '8 Jul', sales: 38000, bids: 21000 },
  { date: '9 Jul', sales: 44000, bids: 27000 },
  { date: '10 Jul', sales: 50000, bids: 32000 },
  { date: '11 Jul', sales: 60000, bids: 40000 },
  { date: '12 Jul', sales: 65000, bids: 45000 },
];

const donutData = [
  { name: 'Art', value: 25 },
  { name: 'Collectibles', value: 17 },
  { name: 'Music', value: 13 },
  { name: 'Games', value: 12 },
  { name: 'Domain', value: 8 },
  { name: 'Other', value: 25 },
];
const donutColors = ['#D54CFF', '#9747ff', '#5BDA00', '#00CFFF', '#FFB800', '#232046'];

const countryData = [
  { country: 'USA', percent: 21 },
  { country: 'India', percent: 18 },
  { country: 'UK', percent: 15 },
  { country: 'Germany', percent: 12 },
  { country: 'France', percent: 10 },
  { country: 'Japan', percent: 9 },
  { country: 'Brazil', percent: 8 },
];
const bids = [
  {
    id: 1,
    image: "/Images/profile.png",
    title: "Rage Monkey",
    user: "John abraham",
    price: "0.0025 ETH",
    offer: "0.0025 ETH",
    timeLeft: "2h36m40s",
  },
  {
    id: 2,
    image: "/Images/profile.png",
    title: "Rage Monkey",
    user: "John abraham",
    price: "0.0025 ETH",
    offer: "0.0025 ETH",
    timeLeft: "2h36m40s",
  },
  {
    id: 3,
    image: "/Images/profile.png",
    title: "Rage Monkey",
    user: "John abraham",
    price: "0.0025 ETH",
    offer: "0.0025 ETH",
    timeLeft: "2h36m40s",
  },
  {
    id: 4,
    image: "/Images/profile.png",
    title: "Rage Monkey",
    user: "John abraham",
    price: "0.0025 ETH",
    offer: "0.0025 ETH",
    timeLeft: "2h36m40s",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 space-y-6 sm:space-y-10 bg-black">
      {/* Dashboard Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 tracking-tight">Admin Dashboard</h1>
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-6 mb-6 sm:mb-10">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-[#181818] rounded-2xl p-4 sm:p-6 flex flex-col items-start shadow-md min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">{metric.icon}<span className="text-lg font-semibold text-white ml-2">{metric.label}</span></div>
            <div className="text-2xl font-bold text-white mt-2">{metric.value}</div>
          </div>
        ))}
      </div>
      {/* Main Chart */}
      <div className="bg-[#181818] rounded-2xl p-4 sm:p-6 shadow-md mb-6 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">NFT Sales & Bids</h2>
        <ResponsiveContainer width="100%" height={220} minHeight={180} className="sm:h-[300px]">
          <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="date" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ background: '#232046', border: 'none', color: '#fff' }} labelStyle={{ color: '#fff' }} />
            <Bar dataKey="sales" fill="#D54CFF" radius={[6, 6, 0, 0]} name="Sales" />
            <Bar dataKey="bids" fill="#5BDA00" radius={[6, 6, 0, 0]} name="Bids" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-10">
        {/* Donut Chart */}
        <div className="bg-[#181818] rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-4">Sales by NFT Category</h3>
          <PieChart width={180} height={180} className="sm:w-[220px] sm:h-[220px]">
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {donutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={donutColors[index % donutColors.length]} />
              ))}
            </Pie>
          </PieChart>
          <ul className="mt-2 sm:mt-4 space-y-1 text-xs sm:text-sm text-white">
            {donutData.map((entry, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full" style={{ background: donutColors[idx % donutColors.length] }}></span>
                {entry.name} - {entry.value}%
              </li>
            ))}
          </ul>
        </div>
        {/* Country Analytics */}
        <div className="bg-[#181818] rounded-2xl p-4 sm:p-6 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-4">Top Countries</h3>
          <ul className="space-y-2 text-white text-xs sm:text-sm">
            {countryData.map((c, idx) => (
              <li key={idx} className="flex justify-between items-center border-b border-[#232046] pb-2 last:border-b-0">
                <span>{c.country}</span>
                <span className="font-bold">{c.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
       {/*Recent Bids*/}
       <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 tracking-wider">
        RECENT BIDS
      </h2>
      {/* Table Headers - Only visible on medium and up */}
      <div className="hidden md:grid grid-cols-5 text-white text-xs sm:text-sm mb-2 sm:mb-4 px-2 sm:px-6">
        <p className="col-span-1">Item List</p>
        <p className="text-center">Open Price</p>
        <p className="text-center">Your Offer</p>
        <p className="text-center">Recent Offer</p>
        <p className="text-right">Time Left</p>
      </div>
      {/* Bid Items */}
      <div className="space-y-2 sm:space-y-4">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className="bg-[#FFFFFF1A] rounded-2xl px-2 sm:px-4 md:px-6 py-3 sm:py-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg text-white text-xs sm:text-sm"
          >
            {/* Item Info */}
            <div className="flex items-center gap-2 sm:gap-3 md:w-1/5 mb-2 md:mb-0">
              <img
                src={bid.image}
                alt={bid.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{bid.title}</p>
                <p className="text-gray-400 text-[10px] sm:text-xs">{bid.user}</p>
              </div>
            </div>

            {/* Labels and Values */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-4/5 gap-1 md:gap-0">
              <div className="md:w-1/4 text-center md:text-left">
                <span className="md:hidden text-gray-400">Open Price: </span>
                {bid.price}
              </div>
              <div className="md:w-1/4 text-center">
                <span className="md:hidden text-gray-400">Your Offer: </span>
                {bid.offer}
              </div>
              <div className="md:w-1/4 text-center">
                <span className="md:hidden text-gray-400">Recent Offer: </span>
                {bid.offer}
              </div>
              <div className="md:w-1/4 text-right">
                <span className="md:hidden text-gray-400">Time Left: </span>
                {bid.timeLeft}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 