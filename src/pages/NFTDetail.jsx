import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaEthereum, FaHeart, FaShare, FaEye, FaClock, FaTag, FaUser, FaHistory, FaGavel } from 'react-icons/fa';
import { IoStatsChart, IoTime } from 'react-icons/io5';
import NFTCard from '../components/NFTCard';
import { getNFTDetail } from '../api/nft';
import { useSelector } from 'react-redux';
import { ethers, BrowserProvider } from "ethers";
import { TRADE_ARENA_NFT_ADDRESS, TRADE_ARENA_NFT_ABI, USDT_TOKEN_ADDRESS } from "../contract/nftContract";

const USDT_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)"
];

const NFTDetail = () => {
  const { id } = useParams();
  const [nft, setNft] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState(false);
  const [unlisting, setUnlisting] = useState(false);
  const walletAddress = useSelector(state => state.wallet.walletAddress);

  useEffect(() => {
    const fetchNFT = async () => {
      setLoading(true);
      try {
        const nftObj = await getNFTDetail(id);
        setNft(nftObj); // Set the NFT object directly
      } catch (err) {
        setNft(null);
      }
      setLoading(false);
    };
    fetchNFT();
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // TODO: Implement like functionality
  };

  const handleBuyNow = async () => {
    setBuying(true);
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask!");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // ethers v6+: use BrowserProvider
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // 1. Approve USDT for the NFT price (assume USDT has 6 decimals)
      const usdt = new ethers.Contract(USDT_TOKEN_ADDRESS, USDT_ABI, signer);
      const price = ethers.BigNumber.from(nft.listedPrice.toString());
      const approveTx = await usdt.approve(TRADE_ARENA_NFT_ADDRESS, price);
      await approveTx.wait();

      // 2. Call buyNFT on the contract
      const contract = new ethers.Contract(TRADE_ARENA_NFT_ADDRESS, TRADE_ARENA_NFT_ABI, signer);
      const buyTx = await contract.buyNFT(nft.tokenId);
      await buyTx.wait();

      alert("Purchase successful!");
      // Refresh NFT data
      const nftObj = await getNFTDetail(id);
      setNft(nftObj);
    } catch (err) {
      alert("Purchase failed: " + (err.reason || err.message));
    }
    setBuying(false);
  };

  const handleUnlist = async () => {
    setUnlisting(true);
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask!");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(TRADE_ARENA_NFT_ADDRESS, TRADE_ARENA_NFT_ABI, signer);
      const tx = await contract.delistNFT(nft.tokenId);
      await tx.wait();
      alert("NFT unlisted successfully!");
      const nftObj = await getNFTDetail(id);
      setNft(nftObj);
    } catch (err) {
      alert("Unlisting failed: " + (err.reason || err.message));
    }
    setUnlisting(false);
  };

  const formatPrice = (price, currency) => {
    return `${price} ${currency}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading NFT...</div>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">NFT not found</div>
      </div>
    );
  }

  // Map backend NFT fields to UI fields
  const attributes = [
    { trait: 'Strength', value: nft.traits?.strength },
    { trait: 'Intelligence', value: nft.traits?.intelligence },
    { trait: 'Luck', value: nft.traits?.luck },
    { trait: 'Level', value: nft.level },
    { trait: 'XP', value: nft.xp },
    { trait: 'Royalty', value: nft.royalty },
  ];
  const safeTransferHistory = Array.isArray(nft.transferHistory) ? nft.transferHistory : [];
  const safeRelatedNFTs = Array.isArray(nft.relatedNFTs) ? nft.relatedNFTs : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] to-[#232046] text-white pt-20 pb-10 flex justify-center items-start">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
            <li>/</li>
            <li className="text-white font-semibold">{nft.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Image */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#232046] rounded-3xl shadow-2xl overflow-hidden mb-6">
              <img
                src={nft.imageUrl}
                alt={nft.name}
                className="w-full h-96 object-cover rounded-3xl border-4 border-[#D54CFF] shadow-lg"
              />
            </div>
            {/* Attributes Row under Image */}
            <div className="w-full max-w-md flex flex-wrap justify-center gap-3 mb-4">
              {attributes.map((attr, index) => (
                <div key={index} className="flex flex-col items-center bg-[#18122B] border border-[#D54CFF] rounded-full px-5 py-2 shadow text-center min-w-[90px]">
                  <span className="text-xs text-purple-300 font-semibold uppercase tracking-wide">{attr.trait}</span>
                  <span className="text-lg font-bold text-white mt-1">{attr.value}</span>
                </div>
              ))}
            </div>
            {/* Description Card */}
            {nft.description && (
              <div className="w-full bg-[#18122B] rounded-xl p-4 shadow text-gray-200 text-center text-base">
                {nft.description}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="flex-1 bg-[#18122B] rounded-3xl shadow-xl p-8 flex flex-col gap-8 min-w-[320px]">
            {/* NFT Info */}
            <div>
              <h1 className="text-4xl font-extrabold mb-2 text-[#D54CFF]">{nft.name}</h1>
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <span className="bg-[#232046] text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">Token ID: {nft.tokenId}</span>
                <span className="bg-[#232046] text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Status: {nft.status}</span>
              </div>
            </div>

            {/* Creator Info */}
            <div className="flex items-center gap-4 bg-[#232046] rounded-xl p-4">
              <div className="flex flex-col flex-1">
                <span className="text-sm text-gray-400">Creator</span>
                <span className="font-bold text-lg text-white">{nft.creator?.userName || nft.creator?.firstName || 'Unknown'}</span>
                <span className="text-xs text-gray-400">{nft.creator?.email}</span>
              </div>
              {nft.creator?._id && (
                <Link
                  to={`/artist/${nft.creator._id}`}
                  className="ml-auto bg-[#D54CFF] hover:bg-[#b13be0] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow"
                >
                  View Profile
                </Link>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#232046] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{nft.level}</div>
                <div className="text-xs text-gray-400 mt-1">Level</div>
              </div>
              <div className="bg-[#232046] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{nft.xp}</div>
                <div className="text-xs text-gray-400 mt-1">XP</div>
              </div>
              <div className="bg-[#232046] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{nft.royalty}</div>
                <div className="text-xs text-gray-400 mt-1">Royalty</div>
              </div>
            </div>

            {/* Buy/Unlist Button or Status Message */}
            {nft.isListed && nft.status === "LOCKED" ? (
              walletAddress && nft.owner?.walletAddress && walletAddress.toLowerCase() === nft.owner.walletAddress.toLowerCase() ? (
                <>
                  <button
                    onClick={handleUnlist}
                    disabled={unlisting}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl mt-6 transition text-lg"
                  >
                    {unlisting ? "Unlisting..." : "Unlist from Marketplace"}
                  </button>
                  <div className="w-full text-center text-yellow-300 font-semibold mt-2">
                    This NFT is locked for gameplay because it is listed for sale. Unlist to use in game.
                  </div>
                </>
              ) : (
                <button
                  onClick={handleBuyNow}
                  disabled={buying}
                  className="w-full bg-[#D54CFF] hover:bg-[#b13be0] text-white font-semibold py-3 rounded-xl mt-6 transition text-lg"
                >
                  {buying ? "Processing..." : `Buy Now for ${nft.listedPrice} USDT`}
                </button>
              )
            ) : nft.isListed && nft.status !== "SOLD" ? (
              <button
                onClick={handleBuyNow}
                disabled={buying}
                className="w-full bg-[#D54CFF] hover:bg-[#b13be0] text-white font-semibold py-3 rounded-xl mt-6 transition text-lg"
              >
                {buying ? "Processing..." : `Buy Now for ${nft.listedPrice} USDT`}
              </button>
            ) : nft.status === "SOLD" ? (
              <div className="w-full text-center text-red-400 font-semibold mt-6">
                This NFT has already been sold.
              </div>
            ) : (
              <div className="w-full text-center text-green-400 font-semibold mt-6">
                This NFT is not listed for sale and is available for gameplay.
              </div>
            )}
          </div>
        </div>

        {/* Related NFTs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#D54CFF]">More from this collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeRelatedNFTs.length > 0 ? safeRelatedNFTs.map((relatedNFT) => (
              <NFTCard key={relatedNFT.id || relatedNFT._id} nft={relatedNFT} />
            )) : <div className="text-gray-400 col-span-4 text-center">No related NFTs.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail; 