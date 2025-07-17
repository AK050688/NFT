import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getNFTsByOwner } from '../../../api/nft';
import NFTCard from '../../../components/NFTCard';

function Owned() {
  const user = useSelector(state => state.auth.user);
  const walletAddress = useSelector(state => state.wallet.walletAddress);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      try {
        const ownerKey = walletAddress || user?._id;
        console.log('Fetching NFTs for owner:', ownerKey);
        const data = await getNFTsByOwner(ownerKey);
        console.log('NFTs response:', data);
        setNfts(Array.isArray(data.result) ? data.result : []);
      } catch (err) {
        console.error('Error fetching NFTs:', err);
        setNfts([]);
      }
      setLoading(false);
    };
    if (walletAddress || user?._id) fetchNFTs();
  }, [user, walletAddress]);

  return (
    <div className="min-h-screen bg-black pt-16 p-4">
      <h1 className="text-3xl font-bold text-white mb-8">My NFTs</h1>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : nfts.length === 0 ? (
        <div className="text-gray-400">You don't own any NFTs yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nfts.map(nft => (
            <NFTCard key={nft._id} nft={nft} showPrice showListedDate />
          ))}
        </div>
      )}
    </div>
  );
}

export default Owned;