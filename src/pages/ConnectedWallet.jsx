import React from "react";
import { LuCopy } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { disconnectWallet } from "../redux/slices/nftSlice";
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const WalletConnected = () => {
  const { walletAddress, balance, walletType } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDisconnect = async () => {
    try {
      await api.put('/user/walletDissConnect', { walletAddress });
      dispatch(disconnectWallet());
      alert('Wallet disconnected successfully.');
      navigate('/wallet');
    } catch (error) {
      alert('Failed to disconnect wallet: ' + (error.response?.data?.message || error.message));
    }
  };

  return (<div className="">
        <div className="bg -top-50 -left-30"></div>
    <div className="min-h-screen flex items-center justify-center relative z-1  px-4">
      <div className="bg-[#FFFFFF1A] rounded-3xl p-6 max-w-2xl w-full shadow-xl text-center">
        <img
          src={`/Images/walletImg.png`}
          alt={walletType}
          className="h-12 mx-auto mb-2"
        />

        <h2 className="text-lg font-bold">WALLET CONNECTED</h2>
        <div className="flex justify-center w-full">
          <p className="bg-[#5BDA004D] mt-4 w-[211px] font-popo hover:bg-[#5bda005e] cursor-pointer rounded-2xl py-[10px] text-sm mb-6 border-1 border-[#5BDA00]">
            Connected to {walletType}
          </p>
        </div>
        <div className="bg-[#FFFFFF33] mt-12 rounded-2xl p-3 justify-between mb-3 w-full flex text-sm">
          <div className=" flex-col font-popo flex">
            <span className="p-2 pl-4">Wallet Address</span>
            <span className="text-gray-300 p-2 pl-0">{walletAddress}</span>
          </div>
          <div className="flex items-center gap-">
            <button className="text-white text-3xl">
              <LuCopy />
            </button>
          </div>
        </div>
        <div className="flex font-popo justify-between gap-3 mb-4 text-sm">
          <div className="flex-1 bg-[#FFFFFF33] rounded-2xl p-3">
            <p className="text-gray-400">ETH Balance</p>
            <p className="text-white font-semibold">{balance} ETH</p>
          </div>
          <div className="flex-1 bg-[#FFFFFF33] rounded-2xl p-3">
            <p className="text-gray-400">USD</p>
            <p className="text-white font-semibold">
              ${(Number(balance) * 973).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={handleDisconnect}
            className="bg-[#FFFFFF33] cursor-pointer justify-center flex items-center gap-4 hover:bg-red-500 text-white py-2 px-4 rounded-2xl  font-popo text-sm w-[40%]  "
          >
            Disconnect Wallet <IoMdExit className="text-3xl" />
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default WalletConnected;
