import React from 'react';
import { useDispatch } from 'react-redux';
import { IoIosSend } from "react-icons/io";
import { connectWallet } from '../redux/slices/nftSlice';
import { useNavigate } from 'react-router-dom';

const wallets = [
  { name: 'METAMASK', icon: '/metamask.png' ,img:"/Images/walletImg.png"},
  { name: 'WALLET CONNECT', icon: '/walletconnect.png' ,img:"/Images/walletImg1.png"},
  { name: 'COINBASE WALLET', icon: '/coinbase.png' ,img:"/Images/walletImg2.png"},
];

const ConnectWallet = () => {
  const dispatch = useDispatch();

  const navigate= useNavigate()

  const handleConnect = (wallet) => {
    dispatch(
      connectWallet({
        address: '0x093f91n',
        balance: '2.4356',
        walletType: wallet.name,
      })
    );
    navigate('/connected-wallet')
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <div className="bg-[#FFFFFF1A] rounded-xl p-6 max-w-md w-full shadow-xl">
        <div className="flex justify-center mb-4">
          <img src="/Images/wallet.png" alt="wallet icon" className="h-12" />
        </div>
        <h2 className="text-center text-2xl font-bold">Connect your wallet</h2>
        <p className="text-center text-sm mt-6 text-gray-400 mb-6">
          Select a wallet to get started with.
        </p>
        {wallets.map((wallet, idx) => (
          <button
            key={idx}
            onClick={() => handleConnect(wallet)}
            className="flex justify-between items-center w-full bg-[#FFFFFF33] hover:bg-white/30 cursor-pointer transition px-4 py-3 rounded-lg mb-3"
          >
            <div className="flex items-center gap-3 " onClick={()=>handleConnect("suhail")}>
              <img src={wallet.img} alt={wallet.name} className="w-6 h-6" />
              <span className="text-sm">{wallet.name}</span>
            </div>
            <span className="text-purple-400 text-3xl font-bold"><IoIosSend /></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectWallet;