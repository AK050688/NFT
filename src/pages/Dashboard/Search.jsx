import React, { useState, useRef, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <div className="flex  w-full items-center">
        <input
          type="text"
          placeholder="Search collections..."
          className="bg-gray-800 text-white rounded-full w-4xl px-4 py-2"
        />
        <div className="px-4 py-2 flex gap-4 text-3xl rounded-full font-semibold">
          <MdDarkMode />
          <FaBell />
          <div className="relative" ref={menuRef}>
            {/* Profile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 cursor-pointer h-10 rounded-full bg-[url('/Images/profile.png')] bg-cover bg-center border border-white"
            ></button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute right-0 mt-3 w-64 sm:w-72 bg-[#D54CFF] text-white rounded-xl shadow-lg z-50 py-3 space-y-1">
                {/* Profile Header */}
                <li className="flex items-center px-4 py-2 border-b border-white/20">
                  <img
                    src="/Images/profile.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">Neeraj Chaudhary</span>
                    <span className="text-white/70 text-xs">@NEERAJ</span>
                  </div>
                </li>

                {/* Links */}
                <li>
                  <a
                    href="#"
                    className=" px-4 py-2 hover:bg-white/10 transition rounded-md text-[12px] font-[600] flex items-center gap-2"
                  >
                    <FaRegUserCircle className="text-2xl" />
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" px-4 py-2 hover:bg-white/10 transition rounded-md text-[12px] font-[600] flex items-center gap-2"
                  >
                    <LuWallet  className="text-2xl"/>
                    Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" px-4 py-2 hover:bg-white/10 transition rounded-md text-[12px] font-[600] flex items-center gap-2"
                  >
                    <IoSettingsOutline className="text-2xl" />
                    Setting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" px-4 py-2 hover:bg-white/10 transition rounded-md text-[12px] font-[600] flex items-center gap-2"
                  >
                  <IoExitOutline  className="text-2xl"/>  Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
