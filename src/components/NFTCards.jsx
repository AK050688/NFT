import React from "react";

const NFTCard = ({ image, title, description, price, creator }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-semibold text-sm">💰 {price} ETH</span>
          <span className="text-xs text-gray-500">By {creator}</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
