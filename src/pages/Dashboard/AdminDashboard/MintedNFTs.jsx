import React, { useEffect, useState } from 'react';
import { fetchNFTsByListedStatus, listNFTForSell } from '../../../api/nft';
import NFTCard from '../../../components/NFTCard';

export default function MintedNFTs() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [listing, setListing] = useState(null); // tokenId being listed

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchNFTsByListedStatus(false);
        setNfts(Array.isArray(data.result) ? data.result : []);
      } catch (e) {
        setError('Failed to load NFTs');
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleList = async (nftId) => {
    const price = prompt('Enter listing price (ETH):');
    if (!price) return;
    setListing(nftId);
    try {
      await listNFTForSell({ nftId, price });
      setNfts(nfts => nfts.filter(nft => nft._id !== nftId));
    } catch (e) {
      alert('Failed to list NFT');
    }
    setListing(null);
  };

  return (
    <div className="bg-black min-h-screen pt-16 p-2 sm:p-1 w-full">
      <div className="bg-[#181818] rounded-xl p-2 sm:p-4 md:p-8 text-white shadow-md w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Minted NFTs (Not Listed)</h2>
        {loading ? <div>Loading...</div> : error ? <div className="text-red-400">{error}</div> : nfts.length === 0 ? <div>No minted NFTs to list.</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {nfts.map(nft => (
              <div key={nft._id} className="flex flex-col gap-2">
                <NFTCard nft={nft} showListedDate />
                <button
                  className="mt-2 bg-[#D54CFF] text-white rounded-full px-4 py-2 font-semibold hover:bg-[#b13be0] transition"
                  onClick={() => handleList(nft._id)}
                  disabled={listing === nft._id}
                >
                  {listing === nft._id ? 'Listing...' : 'List NFT'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 