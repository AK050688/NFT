import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
  
    const handleNavigate=()=>{
      navigate('NFTS-login')
      setMenuOpen(false)
    }

  const Pages = [
    { name: "HOME", path: "/" },
    { name: "MARKETPLACE", path: "/market-place" },
    { name: "WALLET", path: "/connect" },
    { name: "PROFILE", path: "/profile" },
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
          </ul>

          {/* Login Button - Visible on Desktop */}
          <div className="hidden md:ml-6 sm:block">
            <button onClick={handleNavigate} className="bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition">
              Login
            </button>
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
              <button onClick={handleNavigate} className="bg-white text-[#D54CFF] font-semibold rounded-full px-4 py-2 shadow hover:bg-gray-100 transition">
                Login
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
