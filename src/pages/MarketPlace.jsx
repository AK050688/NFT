import React, { useEffect, useState } from 'react';
import { fetchMarketplaceNFTs } from '../api/nft';
import NFTCard from '../components/NFTCard';

const listData = [
  "ALL",
  "ART",
  "GAMING",
  "METAVERSE",
  "DIGHTALART",
  "AI",
  "FUTURISTIC",
  "RARE",
];
export default function MarketPlace() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchMarketplaceNFTs();
        setNfts(Array.isArray(data.result) ? data.result : []);
      } catch (e) {
        setError('Failed to load NFTs');
      }
      setLoading(false);
    };
    load();
  }, []);

  // Filter NFTs by selected category (case-insensitive)
  const filteredNFTs = selectedCategory === 'ALL'
    ? nfts
    : nfts.filter(nft => {
        const cat = nft.category ? nft.category.toUpperCase() : 'UNCATEGORIZED';
        return cat === selectedCategory;
      });

  return (
    <div className="min-h-screen bg-black pt-22 px-4">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md max-w-5xl mx-auto">
        <h1 className="text-[20px] md:text-[64px] font-[500] w-full text-center mb-8">EXPLORE MARKETPLACE</h1>
        {/* Category Filter Bar */}
        <div className="w-full mb-10 flex flex-col items-center">
          <div className="hidden md:flex flex-wrap justify-center gap-x-4 gap-y-3">
            {listData.map((list, index) => (
              <button
                key={index}
                className={`bg-[#FFFFFF1A] text-[16px] font-[600] px-4 py-2 rounded-3xl transition-colors duration-200 ${selectedCategory === list ? 'bg-[#D54CFF] text-white' : 'text-white'}`}
                onClick={() => setSelectedCategory(list)}
              >
                {list}
              </button>
            ))}
          </div>
          {/* Mobile filter bar */}
          <div className="flex md:hidden gap-2 overflow-x-auto py-2 px-2 w-full">
            {listData.map((list, index) => (
              <button
                key={index}
                className={`bg-[#FFFFFF1A] text-[14px] font-[600] px-3 py-1 rounded-3xl whitespace-nowrap transition-colors duration-200 mx-1 ${selectedCategory === list ? 'bg-[#D54CFF] text-white' : 'text-white'}`}
                onClick={() => setSelectedCategory(list)}
              >
                {list}
              </button>
            ))}
          </div>
        </div>
        {/* NFT Grid */}
        {loading ? <div className="text-white text-center mt-10">Loading NFTs...</div> : error ? <div className="text-red-400 text-center mt-10">{error}</div> : filteredNFTs.length === 0 ? <div className="text-white text-center mt-10">No NFTs found.</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredNFTs.map(nft => (
              <NFTCard key={nft._id} nft={nft} showPrice showListedDate />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
