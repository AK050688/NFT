import React, { useState } from "react";
import { FaSearch, FaFilter, FaSort } from "react-icons/fa";
import NFTCard from "../components/NFTCard";
import { nftData, categories, filterNFTs } from "../data/nftData";



// Remove the old marketplace data - now using nftData from data file

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter and sort NFTs
  const filteredNFTs = filterNFTs({
    category: selectedCategory,
    searchTerm: searchTerm
  });

  // Sort NFTs
  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'price-high':
        return parseFloat(b.price) - parseFloat(a.price);
      case 'likes':
        return b.likes - a.likes;
      case 'views':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedNFTs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNFTs = sortedNFTs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="min-h-screen px-4 py-16  text-white">
      <div className="bg -top-30 "></div>
      <div className="max-w-7xl relative z-1mx-auto">
        <h1 className="text-4xl font-bold mt-12 text-center mb-3">Browse Marketplace</h1>
        <p className="text-center mt-12 text-gray-300 mb-10">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search bar */}
            <div className="relative flex-1">
              <FaSearch className="absolute top-3.5 left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search NFTs, collections, or creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-full bg-[#FFFFFF1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-full bg-[#FFFFFF1A] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-full bg-[#FFFFFF1A] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="newest" className="bg-gray-800">Newest</option>
              <option value="price-low" className="bg-gray-800">Price: Low to High</option>
              <option value="price-high" className="bg-gray-800">Price: High to Low</option>
              <option value="likes" className="bg-gray-800">Most Liked</option>
              <option value="views" className="bg-gray-800">Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Showing {currentNFTs.length} of {sortedNFTs.length} NFTs
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentNFTs.slice(0, 3).map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
   
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 flex-wrap px-4">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full transition ${
                currentPage === 1
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-[#333] text-white hover:bg-purple-600"
              }`}
            >
              ⬅ Prev
            </button>

            {/* Page Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full transition text-sm md:text-base ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "bg-[#1f1f1f] text-gray-300 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full transition ${
                currentPage === totalPages
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-[#333] text-white hover:bg-purple-600"
              }`}
            >
              Next ➡
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Marketplace
