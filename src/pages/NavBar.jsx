import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const loggedIn = !!auth.token;
  const username = auth.user?.userName || auth.user?.firstName || 'User';
  const isAdmin = auth.user?.userType === 'ADMIN';

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setDropdownOpen(false);
    navigate('/');
  };

  const Pages = [
    { name: "HOME", path: "/" },
    { name: "MARKETPLACE", path: "/market-place" },
    { name: "WALLET", path: "/connect" },
  ];

  return (
    <header className="w-full  z-50 fixed top-0 bg-transparent">
      <div className="container mx-auto md:flex  justify-center px-4 py-4">
        <nav className="md:bg-[#D54CFF]/60 text-white rounded-full px-6 py-3 shadow-lg backdrop-blur-md flex items-center justify-between relative">
          {/* Logo */}
          <div className="font-bold text-white md:hidden text-xl">NFTX</div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-6 items-center">
            {Pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    `transition font-medium ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
            {loggedIn && !isAdmin && (
              <li>
                <NavLink
                  to="/mint-nft"
                  className="bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition"
                >
                  Mint NFT
                </NavLink>
              </li>
            )}
          </ul>

          {/* Username Dropdown or Login Button - Desktop */}
          <div className="hidden md:ml-6 sm:block">
            {loggedIn ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition">
                  {username}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                    {isAdmin ? (
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/profile'); setDropdownOpen(false);}}>Admin Profile</button>
                    ) : (
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/profile'); setDropdownOpen(false);}}>Profile</button>
                    )}
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/wallet'); setDropdownOpen(false);}}>Wallet</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/settings'); setDropdownOpen(false);}}>Settings</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => navigate('/NFTS-login')} className="bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition">
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#D54CFF]/90 text-white rounded-xl py-4 px-6 shadow-lg flex flex-col gap-4 sm:hidden z-50">
              {Pages.map((page, index) => (
                <NavLink
                  key={index}
                  to={page.path}
                  className={({ isActive }) =>
                    `transition font-medium ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {page.name}
                </NavLink>
              ))}
              {loggedIn && !isAdmin && (
                <NavLink
                  to="/mint-nft"
                  className="bg-white text-[#D54CFF] font-semibold rounded-full px-4 py-2 shadow hover:bg-gray-100 transition w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Mint NFT
                </NavLink>
              )}
              {loggedIn ? (
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="bg-white text-[#D54CFF] font-semibold rounded-full px-4 py-2 shadow hover:bg-gray-100 transition w-full">
                    {username}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                      {isAdmin ? (
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/profile'); setDropdownOpen(false);}}>Admin Profile</button>
                      ) : (
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/dashboard'); setDropdownOpen(false);}}>Profile</button>
                      )}
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/wallet'); setDropdownOpen(false);}}>Wallet</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {navigate('/settings'); setDropdownOpen(false);}}>Settings</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={() => navigate('/NFTS-login')} className="bg-white text-[#D54CFF] font-semibold rounded-full px-4 py-2 shadow hover:bg-gray-100 transition">
                  Login
                </button>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
