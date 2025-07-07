import React from 'react';
import { NavLink } from 'react-router-dom';
// import Sidebar from '../../../components/Sidebaar';
import NFTCard from '../../../components/NFTCard';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { IoTrendingUpOutline } from 'react-icons/io5';
import Saved from './Saved';
const data = [
  { date: "1 May", price: 220 },
  { date: "2 May", price: 140 },
  { date: "3 May", price: 70 },
  { date: "4 May", price: 180 },
  { date: "5 May", price: 300 },
  { date: "6 May", price: 200 },
  { date: "7 May", price: 90 },
  { date: "8 May", price: 150 },
  { date: "9 May", price: 220 },
];
const dummyCollections = [
  { name: 'Neo Apes', status: 'LIVE', img: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=neoapes' },
  { name: 'Cyber Squad', status: 'LIVE', img: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=cybersquad' },
  { name: 'Meta Masks', status: 'LIVE', img: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=metamasks' },
];

const dummyNFTs = [
  { title: 'Hacker Bot', img: 'https://source.unsplash.com/300x200/?cyberpunk,robot', price: '2.4 ETH' },
  { title: 'Neon Ninja', img: 'https://source.unsplash.com/300x200/?cyberpunk,ninja', price: '3.1 ETH' },
  { title: 'Pixel Punk', img: 'https://source.unsplash.com/300x200/?pixel,nft', price: '1.8 ETH' },
  { title: 'Glitch AI', img: 'https://source.unsplash.com/300x200/?glitch,ai', price: '2.9 ETH' },
  { title: 'Synth Warrior', img: 'https://source.unsplash.com/300x200/?synth,wars', price: '3.7 ETH' },
  { title: 'Quantum Rebel', img: 'https://source.unsplash.com/300x200/?quantum,rebel', price: '2.1 ETH' },
];

const trendingBids = [
  { name: 'Apocalypse Ape', bid: '4.7 ETH', creator: 'ZenMaster' },
  { name: 'Neo Samurai', bid: '3.2 ETH', creator: 'CyberFox' },
  { name: 'Matrix Girl', bid: '2.5 ETH', creator: 'HackQueen' },
];

const topCreators = [
  { name: 'ZenMaster', eth: '420 ETH', img: '/Images/profile.png', email:"admin@", sales:"1234 ETH" },
  { name: 'CyberFox', eth: '390 ETH', img: '/Images/profile1.png', email:"admin@", sales:"1234 ETH" },
  { name: 'HackQueen', eth: '370 ETH', img: '/Images/profile2.png', email:"admin@", sales:"1234 ETH" },
  { name: 'PixelGod', eth: '360 ETH', img: '/Images/profile.png', email:"admin@", sales:"1234 ETH" },
  { name: 'GhostAI', eth: '340 ETH', img: '/Images/profile1.png', email:"admin@", sales:"1234 ETH" },
  { name: 'SynthKid', eth: '320 ETH', img: '/Images/profile2.png', email:"admin@", sales:"1234 ETH" },
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
const nftData = [
  {
    id: 1,
    name: "Monkey rage",
    creator: "Micheal",
    creatorAvatar: "/Images/profile.png",
    price: "12,555 USDT",
    likes: 128,
    views: 1.2,
    image: "/Images/card4.png",
    status: "available",
    rarity: "rare"
  },
  {
    id: 2,
    name: "Monkey rage",
    creator: "Micheal",
    creatorAvatar: "/Images/profile1.png",
    price: "12,555 USDT",
    likes: 89,
    views: 0.8,
    image: "/Images/card-5.jpg",
    status: "available",
    rarity: "epic"
  },
  {
    id: 3,
    name: "Monkey rage",
    creator: "Micheal",
    creatorAvatar: "/Images/profile2.png",
    price: "12,555 USDT",
    likes: 256,
    views: 2.1,
    image: "/Images/card6.jpg",
    status: "available",
    rarity: "legendary"
  },
  {
    id: 4,
    name: "Monkey rage",
    creator: "John Doe",
    creatorAvatar: "/Images/profile.png",
    price: "12,555 USDT",
    likes: 167,
    views: 1.5,
    image: "/Images/card7.png",
    status: "available",
    rarity: "rare"
  },
  {
    id: 5,
    name: "Monkey rage",
    creator: "John Doe",
    creatorAvatar: "/Images/profile1.png",
    price: "12,555 USDT",
    likes: 94,
    views: 0.9,
    image: "/Images/card8.png",
    status: "available",
    rarity: "epic"
  },
  {
    id: 6,
    name: "Monkey rage",
    creator: "John Doe",
    creatorAvatar: "/Images/profile2.png",
    price: "12,555 USDT",
    likes: 203,
    views: 1.8,
    image: "/Images/card9.png",
    status: "available",
    rarity: "rare"
  }
];
const marketplace =[
  {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card-5.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card6.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card7.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card8.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card9.png",
  },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 space-y-10">
      {/* Minimal Header with Profile link and Dashboard label */}
      <div className="flex space-x-6 border-b border-purple-700 mb-8">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `pb-2 text-lg font-semibold border-b-2 transition ${
              isActive ? 'border-[#D54CFF] text-white' : 'border-transparent text-white/70 hover:text-white'
            }`
          }
          end
        >
          Profile
        </NavLink>
        <span className="pb-2 text-lg font-semibold border-b-2 border-[#D54CFF] text-white">Dashboard</span>
      </div>
      {/* NFT Grid */}
      <h1 className="font-[500] text-[24px] w-full text-center md:text-[48px]">TRENDING COLLECTION</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {nftData.slice(0, 6).map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
      {/* Ethereum Price Chart Placeholder */}
      <div className="w-full h-[400px] bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-6">
        <h2 className="text-white text-2xl text-center mb-4 tracking-widest font-semibold">ETHEREUM PRICE</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} domain={[0, 350]} />
            <Tooltip contentStyle={{ backgroundColor: "#111", border: "none" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#fff" }} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorEth)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* Trending Bids */}
      <div>
        <h2 className="text-3xl mt-22 font-semibold mb-4 text-center">TRENDING BIDS</h2>
        <div className="grid grid-cols-3 gap-4">
          {trendingBids.map((bid, i) => (
            <div key={i} className="bg-[#FFFFFF1A] p-4 rounded-xl flex flex-col items-center justify-center gap-6">
              <p className="text-purple-400 font-bold">{bid.name}</p>
              <p className="text-white">{bid.bid}</p>
              <p className="text-gray-400 text-sm">by {bid.creator}</p>
               <div className="text-green-500 mt-4 text-xs flex gap-2 justify-center items-center"><IoTrendingUpOutline className="text-xl"/>2.4% (24h)</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Creators */}
      <div className='relative'>
        <h2 className="text-3xl font-semibold mb-4 text-center">TOP CREATORS</h2>
        <div className="grid grid-cols-3 gap-4">
          {topCreators.map((creator, i) => (
            <div key={i} className="bg-[#FFFFFF1A] p-4 rounded-xl text-center">
              <img
                src={creator.img}
                className="mx-auto relative -top-8  w-10 h-10"
                alt={creator.name}
              />
              <p className="mt-2 font-bold">{creator.name}</p>
              <p className="">{creator.email}</p>
              <p className="">Total sales:{creator.eth}</p>
              <button className='px-6 rounded-3xl mt-4 py-2 bg-[#D54CFF]'> Follow</button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bids */}
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
  );
};

export default Dashboard;
