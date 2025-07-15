import React, { useState, useEffect } from "react";
import { LuCopy } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { disconnectWallet, connectWallet } from "../redux/slices/nftSlice";
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const WalletConnected = () => {
  const { walletAddress, balance, walletType } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Rehydrate wallet from localStorage on mount
  useEffect(() => {
    const savedWallet = localStorage.getItem('wallet');
    if (savedWallet) {
      const { walletAddress, balance, walletType } = JSON.parse(savedWallet);
      if (walletAddress) {
        dispatch(connectWallet({ walletAddress, balance, walletType }));
      }
    }
  }, [dispatch]);

  const handleDisconnect = async () => {
    try {
      await api.put('/user/walletDisConnect', { walletAddress });
      dispatch(disconnectWallet());
      localStorage.removeItem('wallet');
      navigate('/wallet');
    } catch (error) {
      alert('Failed to disconnect wallet: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="bg-[#232046] rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
        <img
          src={walletType === 'METAMASK' ? '/Images/walletImg.png' : walletType === 'WALLET CONNECT' ? '/Images/walletImg1.png' : '/Images/walletImg2.png'}
          alt={walletType}
          className="h-12 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Wallet Connected</h2>
        <div className="flex justify-center mb-6">
          <span className="bg-[#5BDA004D] px-4 py-2 rounded-full text-xs text-green-300 font-semibold">
            Connected to {walletType}
          </span>
        </div>
        <div className="bg-[#FFFFFF33] rounded-xl p-3 flex items-center justify-between mb-4">
          <div className="text-left">
            <div className="text-xs text-gray-400">Wallet Address</div>
            <div className="text-sm text-white font-mono break-all">{walletAddress}</div>
          </div>
          <button onClick={handleCopy} className="text-white text-2xl ml-2 hover:text-purple-400 transition">
            <LuCopy />
          </button>
        </div>
        {copied && <div className="text-green-400 text-xs mb-2">Copied!</div>}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-[#FFFFFF33] rounded-xl p-3">
            <div className="text-xs text-gray-400">ETH Balance</div>
            <div className="text-white font-semibold">{balance} ETH</div>
          </div>
          <div className="flex-1 bg-[#FFFFFF33] rounded-xl p-3">
            <div className="text-xs text-gray-400">USD</div>
            <div className="text-white font-semibold">
              ${(Number(balance) * 973).toFixed(2)}
            </div>
          </div>
        </div>
        <button
          onClick={handleDisconnect}
          className="bg-[#D54CFF] hover:bg-[#b13be0] text-white font-semibold rounded-full px-6 py-2 shadow-md transition w-full flex items-center justify-center gap-2"
        >
          <IoMdExit className="text-2xl" /> Disconnect Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletConnected;
