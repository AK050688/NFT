import React, { useEffect, useState } from 'react';
import { listAllNFTs, getNFTsByOwner, getNFTsByCreator } from '../api/nft';
import NFTCard from '../components/NFTCard';

const TABS = [
  { key: 'all', label: 'All NFTs' },
  { key: 'owner', label: 'By Owner' },
  { key: 'creator', label: 'By Creator' },
  // { key: 'forSale', label: 'For Sale' }, // Uncomment if you have a dedicated API or flag
];

const MarketPlace = () => {
  const [tab, setTab] = useState('all');
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ownerId, setOwnerId] = useState('');
  const [creatorId, setCreatorId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError('');
      try {
        let data;
        if (tab === 'all') {
          data = await listAllNFTs();
        } else if (tab === 'owner') {
          if (!ownerId) {
            setNfts([]);
            setLoading(false);
            return;
          }
          data = await getNFTsByOwner(ownerId);
        } else if (tab === 'creator') {
          if (!creatorId) {
            setNfts([]);
            setLoading(false);
            return;
          }
          data = await getNFTsByCreator(creatorId);
        }
        setNfts(data.result || []);
      } catch (err) {
        setError('Failed to fetch NFTs.');
        setNfts([]);
      }
      setLoading(false);
    };
    fetchNFTs();
  }, [tab, ownerId, creatorId]);

  return (
    <div className="min-h-screen bg-black pt-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Marketplace</h2>
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-6 py-2 rounded-full font-semibold transition text-sm md:text-base ${
              tab === key ? 'bg-[#D54CFF] text-white' : 'bg-[#232046] text-white/70 hover:bg-[#D54CFF] hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Input for Owner/Creator ID */}
      {tab === 'owner' && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={ownerId}
            onChange={e => setOwnerId(e.target.value)}
            placeholder="Enter Owner ID"
            className="w-full max-w-xs p-2 rounded bg-[#232046] text-white"
          />
        </div>
      )}
      {tab === 'creator' && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={creatorId}
            onChange={e => setCreatorId(e.target.value)}
            placeholder="Enter Creator ID"
            className="w-full max-w-xs p-2 rounded bg-[#232046] text-white"
          />
        </div>
      )}
      {loading ? (
        <div className="text-white text-center mt-10">Loading NFTs...</div>
      ) : error ? (
        <div className="text-red-400 text-center mt-10">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nfts.map(nft => (
              <NFTCard key={nft._id || nft.tokenId} nft={nft} />
            ))}
          </div>
          {nfts.length === 0 && (
            <div className="text-white text-center mt-10">No NFTs found.</div>
          )}
        </>
      )}
    </div>
  );
};

export default MarketPlace;
