import React, { useState } from "react";
import {FaSearch } from "react-icons/fa";

import Card from "./Card";



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

 
        <div className="flex  w-full justify-center">
        <Card card={marketplace}/>
</div>
   
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
