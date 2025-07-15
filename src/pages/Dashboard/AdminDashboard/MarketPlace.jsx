import React, { useEffect, useState } from 'react';
import { fetchNFTsByListedStatus } from '../../../api/nft';
import NFTCard from '../../../components/NFTCard';

export default function MarketPlace() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchNFTsByListedStatus(true);
        setNfts(Array.isArray(data.result) ? data.result : []);
      } catch (e) {
        setError('Failed to load NFTs');
      }
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-16 p-2 sm:p-6 w-full">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Market Place</h2>
        {loading ? <div>Loading...</div> : error ? <div className="text-red-400">{error}</div> : nfts.length === 0 ? <div>No NFTs listed for sale.</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {nfts.map(nft => (
              <NFTCard key={nft._id} nft={nft} showPrice showListedDate />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 