import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaEthereum, FaHeart, FaShare, FaEye, FaClock, FaTag, FaUser, FaHistory, FaGavel } from 'react-icons/fa';
import { IoStatsChart, IoTime } from 'react-icons/io5';
import NFTCard from '../components/NFTCard';

const NFTDetail = () => {
  const { id } = useParams();
  const [nft, setNft] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNft({
        id: id,
        name: "Cyberpunk Warrior #1234",
        image: "/Images/card4.png",
        creator: "Alex Chen",
        creatorAvatar: "/Images/profile.png",
        creatorAddress: "0x1234...5678",
        price: "2.5",
        currency: "ETH",
        likes: 1247,
        views: 8923,
        isLiked: false,
        isAuction: true,
        auctionEndTime: "2 days 14 hours",
        collection: "Cyberpunk Warriors",
        rarity: "Legendary",
        status: "auction",
        description: "A unique cyberpunk warrior NFT with rare attributes. This piece represents the fusion of technology and art, featuring advanced AI-generated elements and hand-crafted details.",
        attributes: [
          { trait: "Background", value: "Neon City", rarity: "15%" },
          { trait: "Weapon", value: "Plasma Rifle", rarity: "8%" },
          { trait: "Armor", value: "Quantum Shield", rarity: "3%" },
          { trait: "Accessory", value: "Holographic Visor", rarity: "12%" },
          { trait: "Rarity", value: "Legendary", rarity: "1%" }
        ],
        history: [
          { type: "Minted", price: "0.1 ETH", from: "Creator", to: "Creator", date: "2024-01-15" },
          { type: "Listed", price: "1.2 ETH", from: "Creator", to: "Marketplace", date: "2024-01-20" },
          { type: "Sold", price: "1.8 ETH", from: "Creator", to: "0x1234...5678", date: "2024-02-01" },
          { type: "Listed", price: "2.5 ETH", from: "0x1234...5678", to: "Marketplace", date: "2024-02-15" }
        ],
        bids: [
          { bidder: "0xabcd...efgh", amount: "2.3 ETH", time: "2 hours ago" },
          { bidder: "0x9876...5432", amount: "2.1 ETH", time: "4 hours ago" },
          { bidder: "0x5678...1234", amount: "2.0 ETH", time: "1 day ago" }
        ],
                 relatedNFTs: [
           {
             id: "nft-2",
             name: "Cyberpunk Warrior #1235",
             image: "/Images/card-5.jpg",
             creator: "Alex Chen",
             price: "1.8",
             currency: "ETH",
             likes: 892,
             views: 5432
           },
           {
             id: "nft-3",
             name: "Cyberpunk Warrior #1236",
             image: "/Images/card6.jpg",
             creator: "Alex Chen",
             price: "3.2",
             currency: "ETH",
             likes: 1567,
             views: 7890
           },
           {
             id: "nft-4",
             name: "Cyberpunk Warrior #1237",
             image: "/Images/card7.png",
             creator: "Alex Chen",
             price: "0.9",
             currency: "ETH",
             likes: 432,
             views: 2345
           },
           {
             id: "nft-5",
             name: "Cyberpunk Warrior #1238",
             image: "/Images/card8.png",
             creator: "Alex Chen",
             price: "2.1",
             currency: "ETH",
             likes: 678,
             views: 3456
           }
         ]
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // TODO: Implement like functionality
  };

  const handleBid = (e) => {
    e.preventDefault();
    // TODO: Implement bid functionality
    console.log('Bidding:', bidAmount, 'ETH');
  };

  const handleBuyNow = () => {
    // TODO: Implement buy now functionality
    console.log('Buying NFT for:', nft.price, 'ETH');
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
            <li>/</li>
            <li><Link to={`/collection/${nft.collection}`} className="hover:text-white">{nft.collection}</Link></li>
            <li>/</li>
            <li className="text-white">{nft.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Actions */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full ${isLiked ? 'bg-red-500' : 'bg-black/50'} text-white hover:bg-red-500 transition-colors`}
                >
                  <FaHeart className={isLiked ? 'fill-current' : ''} />
                </button>
                <button className="p-2 rounded-full bg-black/50 text-white hover:bg-gray-700 transition-colors">
                  <FaShare />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {nft.isAuction ? (
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Place Bid</h3>
                  <form onSubmit={handleBid} className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Bid Amount (ETH)</label>
                      <input
                        type="number"
                        step="0.01"
                        min={nft.bids[0]?.amount?.split(' ')[0] || nft.price}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                        placeholder="Enter bid amount"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Place Bid
                    </button>
                  </form>
                </div>
              ) : (
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Buy Now for {formatPrice(nft.price, nft.currency)}
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* NFT Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-400">{nft.collection}</span>
                {nft.rarity && (
                  <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                    {nft.rarity}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4">{nft.name}</h1>
              <p className="text-gray-300 mb-6">{nft.description}</p>
            </div>

            {/* Creator Info */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Creator</h3>
              <div className="flex items-center gap-4">
                <img
                  src={nft.creatorAvatar}
                  alt={nft.creator}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{nft.creator}</p>
                  <p className="text-sm text-gray-400">{nft.creatorAddress}</p>
                </div>
                <Link
                  to={`/artist/${nft.creator}`}
                  className="ml-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{nft.likes}</div>
                <div className="text-sm text-gray-400">Likes</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{nft.views}</div>
                <div className="text-sm text-gray-400">Views</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{nft.price}</div>
                <div className="text-sm text-gray-400">Floor Price</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-900 rounded-xl">
              <div className="flex border-b border-gray-800">
                {['details', 'history', 'bids'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors ${
                      activeTab === tab
                        ? 'text-white border-b-2 border-purple-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-4">Attributes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {nft.attributes.map((attr, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-3">
                          <div className="text-sm text-gray-400">{attr.trait}</div>
                          <div className="font-semibold">{attr.value}</div>
                          <div className="text-xs text-purple-400">{attr.rarity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-4">Transaction History</h4>
                    <div className="space-y-3">
                      {nft.history.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800">
                          <div>
                            <div className="font-semibold">{tx.type}</div>
                            <div className="text-sm text-gray-400">{tx.from} → {tx.to}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{tx.price}</div>
                            <div className="text-sm text-gray-400">{tx.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'bids' && (
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-4">Recent Bids</h4>
                    <div className="space-y-3">
                      {nft.bids.map((bid, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800">
                          <div>
                            <div className="font-semibold">{bid.bidder}</div>
                            <div className="text-sm text-gray-400">{bid.time}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-green-400">{bid.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related NFTs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">More from this collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nft.relatedNFTs.map((relatedNFT) => (
              <NFTCard key={relatedNFT.id} nft={relatedNFT} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail; 