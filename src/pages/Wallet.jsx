import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSend } from "react-icons/io";
import { connectWallet } from '../redux/slices/nftSlice';
import { useNavigate } from 'react-router-dom';
import { BrowserProvider, formatEther } from 'ethers';
import api from '../api/axios';

const wallets = [
  { name: 'METAMASK', icon: '/metamask.png' ,img:"/Images/walletImg.png"},
  { name: 'WALLET CONNECT', icon: '/walletconnect.png' ,img:"/Images/walletImg1.png"},
  { name: 'COINBASE WALLET', icon: '/coinbase.png' ,img:"/Images/walletImg2.png"},
];

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wallet = useSelector(state => state.wallet);
  const [connecting, setConnecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  useEffect(() => {
    if (wallet.connected && wallet.walletAddress) {
      navigate('/connected-wallet');
    }
  }, [wallet, navigate]);

  const handleConnect = async (walletOpt) => {
    if (connecting) return;
    setErrorMsg('');
    if (wallet.connected && wallet.walletAddress) {
      navigate('/connected-wallet');
      return;
    }
    if (walletOpt.name === 'METAMASK') {
      if (window.ethereum) {
        setConnecting(true);
        try {
          const provider = new BrowserProvider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          const balance = formatEther(await provider.getBalance(address));
          const walletData = { walletAddress: address, balance, walletType: walletOpt.name };
          dispatch(connectWallet(walletData));
          localStorage.setItem('wallet', JSON.stringify(walletData));
          try {
            await api.put('/user/walletConnect', { walletAddress: address });
          } catch (apiError) {
            setErrorMsg('Failed to save wallet: ' + (apiError.response?.data?.message || apiError.message));
          }
          navigate('/connected-wallet');
        } catch (error) {
          if (error.code === 4001) {
            setErrorMsg('You rejected the connection request. Please approve it in MetaMask.');
          } else if (error.code === -32002) {
            setErrorMsg('A connection request is already pending in MetaMask. Please open MetaMask and approve or reject it.');
          } else {
            setErrorMsg('MetaMask error: ' + (error.message || error));
          }
          console.error(error);
        }
        setConnecting(false);
      } else {
        setErrorMsg('MetaMask not detected. Please install MetaMask.');
      }
    } else {
      const walletData = { walletAddress: '0x093f91n', balance: '2.4356', walletType: walletOpt.name };
      dispatch(connectWallet(walletData));
      localStorage.setItem('wallet', JSON.stringify(walletData));
      navigate('/connected-wallet');
    }
  };

  const handleDisconnect = async (walletAddress) => {
    try {
      await api.put('/user/walletDisConnect', { walletAddress });
      dispatch(connectWallet({ walletAddress: '', balance: '0.00', walletType: '' }));
      localStorage.removeItem('wallet');
      navigate('/wallet');
    } catch (error) {
      setErrorMsg('Failed to disconnect wallet: ' + (error.response?.data?.message || error.message));
    }
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
        {errorMsg && <div className="text-red-400 text-center mb-4 text-sm">{errorMsg}</div>}
        {wallets.map((walletOpt, idx) => (
          <button
            key={idx}
            onClick={() => handleConnect(walletOpt)}
            className="flex justify-between items-center w-full bg-[#FFFFFF33] hover:bg-white/30 cursor-pointer transition px-4 py-3 rounded-lg mb-3 disabled:opacity-60"
            disabled={connecting}
          >
            <div className="flex items-center gap-3 ">
              <img src={walletOpt.img} alt={walletOpt.name} className="w-6 h-6" />
              <span className="text-sm">{walletOpt.name}</span>
            </div>
            <span className="text-purple-400 text-3xl font-bold">
              {connecting ? '...' : <IoIosSend />}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectWallet;