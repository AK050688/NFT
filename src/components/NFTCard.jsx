import React from 'react';
import { Link } from 'react-router-dom';
import { FaEthereum, FaHeart, FaEye } from 'react-icons/fa';

const NFTCard = ({ nft, variant = 'default', showPrice, showListedDate }) => {
  const {
    id,
    name,
    image,
    creator,
    creatorAvatar,
    price,
    currency = 'ETH',
    likes = 0,
    views = 0,
    isLiked = false,
    isAuction = false,
    auctionEndTime,
    collection,
    rarity,
    status = 'available', // available, sold, auction
    listedPrice,
    updatedAt
  } = nft;

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Like clicked for NFT:', id);
  };

  const formatPrice = (price, currency) => {
    if (typeof price === 'string') return price;
    return `${price} ${currency}`;
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'sold':
        return <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SOLD</span>;
      case 'auction':
        return <span className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">AUCTION</span>;
      default:
        return null;
    }
  };

  const getRarityBadge = () => {
    if (!rarity) return null;
    const rarityColors = {
      common: 'bg-gray-500',
      uncommon: 'bg-green-500',
      rare: 'bg-blue-500',
      epic: 'bg-purple-500',
      legendary: 'bg-yellow-500'
    };
    return (
      <span className={`absolute top-3 left-3 ${rarityColors[rarity.toLowerCase()] || 'bg-gray-500'} text-white px-2 py-1 rounded-full text-xs font-semibold uppercase`}>
        {rarity}
      </span>
    );
  };

  return (
    <Link to={`/nft/${id || nft._id}`} className="group">
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Status and Rarity Badges */}
        {getStatusBadge()}
        {getRarityBadge()}
        
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-900">
          <img
            src={image || nft.imageUrl}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Creator Info */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src={creatorAvatar || '/Images/TrendingCarsdsImg.png'}
              alt={typeof creator === 'object' ? (creator?.userName || creator?.name || 'Unknown') : creator}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-300 font-medium">
              {typeof creator === 'object' ? (creator?.userName || creator?.name || 'Unknown') : creator}
            </span>
          </div>

          {/* NFT Name */}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {name}
          </h3>

          {/* Collection */}
          {collection && (
            <p className="text-sm text-gray-400 mb-3">
              {typeof collection === 'object' ? (collection?.name || collection?.title || 'Unknown') : collection}
            </p>
          )}

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaEthereum className="text-purple-400" />
              <span className="text-white font-semibold">
                {showPrice ? (listedPrice ? `${listedPrice} ETH` : 'N/A') : formatPrice(price, currency)}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <FaHeart className="text-red-400" />
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <FaEye />
                {views}
              </span>
            </div>
          </div>

          {/* Listed Date */}
          {showListedDate && updatedAt && (
            <div className="text-xs text-gray-400 mt-2">Listed: {new Date(updatedAt).toLocaleString()}</div>
          )}

          {/* Auction Timer */}
          {isAuction && auctionEndTime && (
            <div className="mt-3 p-2 bg-yellow-500/10 rounded-lg">
              <p className="text-xs text-yellow-400 text-center">
                Auction ends in: {auctionEndTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NFTCard; 