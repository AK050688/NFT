import React from 'react'
import { IoTrendingUpOutline } from 'react-icons/io5';
import Sidebar from '../../components/Sidebaar';


const trendingBids = [
  { name: 'Apocalypse Ape', bid: '4.7 ETH', creator: 'ZenMaster' },
  { name: 'Neo Samurai', bid: '3.2 ETH', creator: 'CyberFox' },
  { name: 'Matrix Girl', bid: '2.5 ETH', creator: 'HackQueen' },
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
const TrendingBids = () => {
  return (
    <div>
        <Sidebar/>
          <div>
                <h2 className="text-3xl mt-22 font-semibold mb-4 text-center">TRENDING BIDS</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {trendingBids.map((bid, i) => (
                    <div key={i} className="bg-[#FFFFFF1A] p-4 rounded-xl flex flex-col items-center justify-center gap-6">
                      <p className="text-purple-400 font-bold">{bid.name}</p>
                      <p className="text-white">{bid.bid}</p>
                      <p className="text-gray-400 text-sm">by {bid.creator}</p>
                       <div className="text-green-500 mt-4 text-xs flex gap-2 justify-center items-center"><IoTrendingUpOutline className="text-xl"/>2.4% (24h)</div>
                    </div>
                  ))}
                </div>
                  <div className="p-4 sm:p-8 rounded-lg">
      <h2 className="text-white text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 tracking-wider">
        RECENT BIDS
      </h2>

      {/* Table Headers - Only visible on medium and up */}
      <div className="hidden md:grid grid-cols-5 text-white text-sm mb-4 px-2 sm:px-6">
        <p className="col-span-1">Item List</p>
        <p className="text-center">Open Price</p>
        <p className="text-center">Your Offer</p>
        <p className="text-center">Recent Offer</p>
        <p className="text-right">Time Left</p>
      </div>

      {/* Bid Items */}
      <div className="space-y-4">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className="bg-[#FFFFFF1A] rounded-2xl px-4 sm:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg text-white text-sm"
          >
            {/* Item Info */}
            <div className="flex items-center gap-3 md:w-1/5 mb-3 md:mb-0">
              <img
                src={bid.image}
                alt={bid.title}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{bid.title}</p>
                <p className="text-gray-400 text-xs">{bid.user}</p>
              </div>
            </div>

            {/* Labels and Values */}
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-4/5 gap-2 md:gap-0">
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
              </div>
    </div>
  )
}

export default TrendingBids