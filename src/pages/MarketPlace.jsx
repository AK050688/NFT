import React, { useState } from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import NFTCard from "../components/NFTCards"; // Reuse or customize if needed
import Card from "./Card";

const nftData = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x300?text=NFT+1",
    title: "Monkey rage",
    creator: "Micheal",
    price: "12,555 USDT",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x300?text=NFT+2",
    title: "Monkey rage",
    creator: "Micheal",
    price: "12,555 USDT",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x300?text=NFT+3",
    title: "Monkey rage",
    creator: "Micheal",
    price: "12,555 USDT",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x300?text=NFT+4",
    title: "Monkey rage",
    creator: "John Doe",
    price: "12,555 USDT",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x300?text=NFT+5",
    title: "Monkey rage",
    creator: "John Doe",
    price: "12,555 USDT",
  },
];
const marketplace =[
  {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card-5.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card6.jpg",
  },
  {
    name:"Micheal",
    img:"/Images/card7.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card8.png",
  }, {
    name:"Micheal",
    img:"/Images/card4.png",
  },
  {
    name:"Micheal",
    img:"/Images/card9.png",
  },
]

const Marketplace = () => {
    const totalPages = 4; // Or make this dynamic via props
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    // Trigger any page fetch or navigation logic here
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div className="min-h-screen px-4 py-16  text-white">
      <div className="bg -top-30 "></div>
      <div className="max-w-7xl relative z-1mx-auto">
        <h1 className="text-4xl font-bold mt-12 text-center mb-3">Browse Marketplace</h1>
        <p className="text-center mt-12 text-gray-300 mb-10">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        {/* Search bar */}
        <div className="relative felx max-w-5xl mx-auto mb-12">
          <FaSearch className="absolute top-3.5 left-4 w-[2.5%] text-gray-400" />
          <input
            type="text"
            placeholder="Search your NFTs here..."
            className="w-full py-3 pl-12 pr-4 font-popo rounded-full bg-[#FFFFFF1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* NFT Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nftData.map((nft) => (
            <div
              key={nft.id}
              className="bg-[#111] p-4 rounded-xl shadow-lg transition hover:shadow-2xl"
            >
              <img
                src={nft.image}
                alt={nft.title}
                className="rounded-lg mb-4 w-full h-64 object-cover"
              />
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{nft.creator}</span>
                <FaCheckCircle className="text-green-400" />
              </div>
              <h2 className="text-xl font-bold">{nft.title}</h2>
              <p className="text-sm text-gray-400 mb-4">Reserve price</p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{nft.price}</span>
                <button className="bg-lime-500 text-black font-semibold px-4 py-1 rounded-full hover:bg-lime-400 transition">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex  w-full justify-center">
        <Card card={marketplace}/>
</div>
        {/* Pagination/Nav Controls Placeholder */}
      {/* Pagination Controls */}
 <div className="mt-14 flex justify-center gap-3 flex-wrap px-4">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`hidden md:flex md:px-4 py-2 rounded-full transition ${
          currentPage === 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-[#333] text-white hover:bg-indigo-600"
        }`}
      >
        ⬅ Prev
      </button>

      {/* Page Buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded-full transition text-sm md:text-base ${
            currentPage === page
              ? "bg-indigo-600 text-white"
              : "bg-[#1f1f1f] text-gray-300 hover:bg-indigo-600 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`hidden md:flex px-4 py-2 rounded-full transition ${
          currentPage === totalPages
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-[#333] text-white hover:bg-indigo-600"
        }`}
      >
        Next ➡
      </button>
    </div>

      </div>
    </div>
  );
};

export default Marketplace
