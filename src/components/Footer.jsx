import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative z-1 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500 mb-2">NFTVerse</h2>
          <p className="text-sm text-gray-400">
            Explore the future of digital ownership with our unique NFT drops,
            powered by blockchain.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About</a></li>
            <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
            <li><a href="/dashboard" className="hover:text-indigo-400">Dashboard</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
      

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-indigo-400"><FaDiscord /></a>
            <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-400"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} NFTVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
