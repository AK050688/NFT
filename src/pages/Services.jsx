import React from "react";
import { FaPalette, FaLock, FaWallet, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaPalette size={30} />,
    title: "Unique Artwork",
    description:
      "Each NFT is a one-of-a-kind masterpiece created by top-tier digital artists, ensuring artistic value and rarity.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Blockchain Security",
    description:
      "All NFTs are securely minted and stored on the blockchain, providing transparency and protection against duplication.",
  },
  {
    icon: <FaWallet size={30} />,
    title: "Easy Transactions",
    description:
      "Buy, sell, and trade NFTs seamlessly using your crypto wallet. We support fast and secure payments.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Community Driven",
    description:
      "Join a thriving community of creators, collectors, and NFT enthusiasts pushing the boundaries of digital ownership.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We provide everything you need to enter the NFT world — from minting and managing digital assets to community engagement and secure transactions.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
