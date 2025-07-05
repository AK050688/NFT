import React, { useState } from 'react';
import { FaEthereum, FaTwitter, FaInstagram, FaGlobe, FaHeart, FaShare, FaEye } from 'react-icons/fa';
import { IoPerson, IoStatsChart, IoTime } from 'react-icons/io5';
import NFTCard from '../components/NFTCard';

const ArtistPage = () => {
  const [activeTab, setActiveTab] = useState('collections');
  const [isFollowing, setIsFollowing] = useState(false);

  const artist = {
    name: "Alex Chen",
    username: "@alexchen_art",
    avatar: "/Images/profile.png",
    // coverImage: "/Images/cardImg.jpg",
    bio: "Digital artist specializing in futuristic cyberpunk aesthetics. Creating unique NFTs that blend technology and art. Based in Tokyo, exploring the intersection of AI and human creativity.",
    // followers: 1247,
    // following: 89,
    totalSales: 156.8,
    totalVolume: 89.2,
    floorPrice: 0.85,
    joined: "March 2022",
    verified: true,
    social: {
      twitter: "https://twitter.com/alexchen_art",
      instagram: "https://instagram.com/alexchen_art",
      website: "https://alexchen.art"
    }
  };

  const collections = [
    {
      id: "nft-1",
      name: "Cyberpunk Dreams",
      image: "/Images/card4.png",
      price: "0.85",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 1247,
      views: 8923,
      collection: "Cyberpunk Warriors",
      rarity: "Legendary"
    },
    {
      id: "nft-2",
      name: "Neon Nights",
      image: "/Images/card-5.jpg",
      price: "1.2",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 892,
      views: 5432,
      collection: "Neon Samurais",
      rarity: "Rare"
    },
    {
      id: "nft-3",
      name: "AI Portraits",
      image: "/Images/card6.jpg",
      price: "0.65",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 1567,
      views: 7890,
      collection: "Digital Dreams",
      rarity: "Epic"
    },
    {
      id: "nft-4",
      name: "Metaverse City",
      image: "/Images/card7.png",
      price: "2.1",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 432,
      views: 2345,
      collection: "Pixel Punks",
      rarity: "Common"
    },
    {
      id: "nft-5",
      name: "Digital Souls",
      image: "/Images/card8.png",
      price: "0.95",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 2103,
      views: 12345,
      collection: "Quantum Cats",
      rarity: "Legendary"
    },
    {
      id: "nft-6",
      name: "Future Retro",
      image: "/Images/card9.png",
      price: "1.5",
      currency: "ETH",
      creator: "Alex Chen",
      creatorAvatar: "/Images/profile.png",
      likes: 678,
      views: 3456,
      collection: "Holographic Heroes",
      rarity: "Uncommon"
    }
  ];

  const stats = [
    { label: "Total Sales", value: "156.8 ETH", change: "+12.5%", icon: <FaEthereum /> },
    { label: "Floor Price", value: "0.85 ETH", change: "+8.2%", icon: <IoStatsChart /> },
    { label: "Items Created", value: "89", change: "+15", icon: <IoPerson /> },
    { label: "Avg. Time", value: "2.3 days", change: "-0.5", icon: <IoTime /> }
  ];

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing);
//   };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Cover Image */}
      {/* <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={artist.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div> */}

      {/* Profile Section */}
      <div className="relative px-4 md:px-8 lg:px-12 mt-8">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={artist.avatar} 
              alt={artist.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover"
            />
            {artist.verified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{artist.name}</h1>
                <p className="text-gray-400">{artist.username}</p>
              </div>
              {/* <div className="flex gap-3">
                <button 
                  onClick={handleFollow}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    isFollowing 
                      ? 'bg-gray-700 text-white hover:bg-red-600' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
                <button className="px-6 py-2 rounded-full bg-[#FFFFFF1A] text-white hover:bg-[#FFFFFF2A] transition-all">
                  <FaShare className="inline mr-2" />
                  Share
                </button>
              </div> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"> */}
              {/* <div className="text-center">
                <div className="text-xl font-bold">{artist.followers.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-xl font-bold">{artist.following}</div>
                <div className="text-sm text-gray-400">Following</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-xl font-bold">{artist.totalSales} ETH</div>
                <div className="text-sm text-gray-400">Total Sales</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-xl font-bold">{artist.totalVolume} ETH</div>
                <div className="text-sm text-gray-400">Volume</div>
              </div> */}
            {/* </div> */}

            {/* Social Links */}
            <div className="flex gap-4">
              {artist.social.twitter && (
                <a href={artist.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              )}
              {artist.social.instagram && (
                <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
              )}
              {artist.social.website && (
                <a href={artist.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGlobe className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p className="text-gray-300 leading-relaxed max-w-3xl">{artist.bio}</p>
          <p className="text-sm text-gray-500 mt-2">Joined {artist.joined}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#181818] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-purple-500">{stat.icon}</div>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-sm text-green-500">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'collections', label: 'Collections' },
              { id: 'created', label: 'Created' },
            //   { id: 'collected', label: 'Collected' },
            //   { id: 'activity', label: 'Activity' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-purple-500 border-b-2 border-purple-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
                    {activeTab === 'collections' && (
              <div className="pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collections.slice(0, 6).map((nft) => (
                    <NFTCard key={nft.id} nft={nft} />
                  ))}
                </div>
              </div>
            )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'collections' && (
          <div className="text-center py-12">
            <p className="text-gray-400">Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage; 