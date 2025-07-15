import React from 'react';
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

const topCreators = [
  { name: 'ZenMaster', eth: '420 ETH', img: '/Images/profile.png', email:"admin@", sales:"1234 ETH" },
  { name: 'CyberFox', eth: '390 ETH', img: '/Images/profile1.png', email:"admin@", sales:"1234 ETH" },
  { name: 'HackQueen', eth: '370 ETH', img: '/Images/profile2.png', email:"admin@", sales:"1234 ETH" },
  { name: 'PixelGod', eth: '360 ETH', img: '/Images/profile.png', email:"admin@", sales:"1234 ETH" },
  { name: 'GhostAI', eth: '340 ETH', img: '/Images/profile1.png', email:"admin@", sales:"1234 ETH" },
  { name: 'SynthKid', eth: '320 ETH', img: '/Images/profile2.png', email:"admin@", sales:"1234 ETH" },
];

// Local NFT data for this component
const nftData = [
  {
    id: 1,
    name: "Cyber Punk #001",
    creator: "ZenMaster",
    creatorAvatar: "/Images/profile.png",
    price: "2.4 ETH",
    likes: 128,
    views: 1.2,
    image: "/Images/card4.png",
    status: "LIVE",
    rarity: "RARE",
    timeLeft: "2h 36m 40s",
    description: "A futuristic cyberpunk character with neon aesthetics"
  },
  {
    id: 2,
    name: "Neo Samurai #042",
    creator: "CyberFox",
    creatorAvatar: "/Images/profile1.png",
    price: "3.1 ETH",
    likes: 89,
    views: 0.8,
    image: "/Images/card-5.jpg",
    status: "LIVE",
    rarity: "EPIC",
    timeLeft: "1h 15m 22s",
    description: "Traditional samurai with modern cyber enhancements"
  },
  {
    id: 3,
    name: "Matrix Girl #133",
    creator: "HackQueen",
    creatorAvatar: "/Images/profile2.png",
    price: "1.8 ETH",
    likes: 256,
    views: 2.1,
    image: "/Images/card6.jpg",
    status: "LIVE",
    rarity: "LEGENDARY",
    timeLeft: "4h 52m 18s",
    description: "Digital warrior from the matrix realm"
  },
  {
    id: 4,
    name: "Pixel Punk #007",
    creator: "PixelGod",
    creatorAvatar: "/Images/profile.png",
    price: "2.9 ETH",
    likes: 167,
    views: 1.5,
    image: "/Images/card7.png",
    status: "LIVE",
    rarity: "RARE",
    timeLeft: "3h 28m 45s",
    description: "Retro pixel art with punk attitude"
  },
  {
    id: 5,
    name: "Synth Warrior #089",
    creator: "GhostAI",
    creatorAvatar: "/Images/profile1.png",
    price: "3.7 ETH",
    likes: 94,
    views: 0.9,
    image: "/Images/card8.png",
    status: "LIVE",
    rarity: "EPIC",
    timeLeft: "5h 12m 33s",
    description: "Synthetic warrior with advanced AI capabilities"
  },
  {
    id: 6,
    name: "Quantum Rebel #156",
    creator: "SynthKid",
    creatorAvatar: "/Images/profile2.png",
    price: "2.1 ETH",
    likes: 203,
    views: 1.8,
    image: "/Images/card9.png",
    status: "LIVE",
    rarity: "RARE",
    timeLeft: "2h 45m 12s",
    description: "Quantum-powered rebel with reality-bending abilities"
  }
];

export default function ProfileDashboard() {
  return (
    <div className="min-h-screen p-6 space-y-10">
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
    </div>
  );
} 