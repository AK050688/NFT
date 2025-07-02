import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#090A0833] mt-12 rounded-t-[50px] relative z-1 text-gray-200 py-10 px-18">

<div className="py-8 md:flex  justify-between border-b-2 border-b-[#adadad5b]">
  <p className="font-popo md:w-[360px]">Join our newsletter to keep yourself updated with us.</p>
  <div className="md:flex gap-6">

    <input type="text" placeholder="enter your email" className="rounded-[100px] h-[51px] px-6 mt-2 bg-[#FFFFFF1A]" />
    <button className="bg-[#D54CFF] hover:bg-[#d54cffd7] m-2 cursor-pointer py-[15px] px-[18px] rounded-3xl">  Subscribe</button>
  </div>

</div>

      <div className="max-w-7xl py-12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b-2 border-b-[#adadad5b]">
      
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
<div className="md:flex justify-between">
      <div className=" text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} NFTVerse. All rights reserved.
      </div>
      <div className="md:flex gap-6">
        <span className=" text-sm text-gray-500 mt-10">Privacy policy</span>
        <span className=" text-sm text-gray-500 mt-10">  Twems of services</span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
