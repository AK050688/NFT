import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEthereum, FaTwitter, FaInstagram, FaGlobe, FaHeart, FaShare, FaEye } from 'react-icons/fa';
import { IoPerson, IoStatsChart, IoTime } from 'react-icons/io5';
import NFTCard from '../components/NFTCard';
import { getNFTsByCreator } from '../api/nft';

const ArtistPage = () => {
  const { id } = useParams();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const nftRes = await getNFTsByCreator(id);
        const nftList = Array.isArray(nftRes.result) ? nftRes.result : [];
        setNfts(nftList);
        setCreator(nftList[0]?.creator || null);
      } catch (err) {
        setNfts([]);
        setCreator(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

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
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={creator?.avatar || '/Images/profile.png'} 
              alt={creator?.userName || creator?.firstName || 'Artist'}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover"
            />
            {creator?.verified && (
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
                <h1 className="text-2xl md:text-3xl font-bold">{creator?.userName || creator?.firstName || 'Unknown Artist'}</h1>
                <p className="text-gray-400">{creator?.email}</p>
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
              {creator?.social?.twitter && (
                <a href={creator.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              )}
              {creator?.social?.instagram && (
                <a href={creator.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
              )}
              {creator?.social?.website && (
                <a href={creator.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGlobe className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p className="text-gray-300 leading-relaxed max-w-3xl">{creator?.bio}</p>
          <p className="text-sm text-gray-500 mt-2">Joined {creator?.joined}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Stats are not available in the new_code, so this section is removed */}
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
                // onClick={() => setActiveTab(tab.id)} // This state is removed
                className={`pb-4 px-2 font-semibold transition-colors whitespace-nowrap ${
                  // activeTab === tab.id // This state is removed
                  true // Always active for now
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#D54CFF]">NFTs by this Creator</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="text-white">Loading NFTs...</div>
            ) : nfts.length === 0 ? (
              <div className="text-gray-400 col-span-3 text-center">No NFTs found for this creator.</div>
            ) : (
              nfts.map(nft => (
                <NFTCard key={nft._id} nft={nft} />
              ))
            )}
          </div>
        </div>

        {/* Placeholder for other tabs */}
        {/* This section is removed as per the new_code */}
      </div>
    </div>
  );
};

export default ArtistPage; 