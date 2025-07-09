import React, { useState } from "react";
import { HiViewGrid, HiUser, HiUpload, HiShoppingBag, HiCurrencyDollar, HiClipboardList, HiPlusCircle, HiUsers, HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", icon: <HiViewGrid size={22} />, label: "Dashboard" },
  { to: "/admin/users", icon: <HiUser size={22} />, label: "User Details" },
  { to: "/admin/upload-nft", icon: <HiUpload size={22} />, label: "Upload NFT" },
  { to: "/admin/market-place", icon: <HiShoppingBag size={22} />, label: "Market Place" },
  { to: "/admin/transactions", icon: <HiCurrencyDollar size={22} />, label: "Transactions" },
  { to: "/admin/bid-details", icon: <HiClipboardList size={22} />, label: "Bid Details" },
  { to: "/admin/create-level", icon: <HiPlusCircle size={22} />, label: "Create Level" },
  { to: "/admin/referral-details", icon: <HiUsers size={22} />, label: "Referrals" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#232046] p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <HiMenu size={28} />
      </button>
      {/* Overlay when sidebar is open on mobile */}
      {open && (
        <div
          className=" fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-20 flex flex-col items-center bg-[#FFFFFF33] text-white shadow-lg z-50 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-18 md:static md:flex md:h-screen md:top-0 md:left-0`}
        style={{ minWidth: '72px' }}
      >
        {/* Close button on mobile */}
        <button
          className="absolute top-6 right-4 md:hidden bg-[#232046] p-1 rounded-full focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <HiX size={24} />
        </button>
        {/* Logo */}
        {/* Menu Icons */}
        <div className=" flex flex-col space-y-6 items-center w-full mt-14">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative group flex flex-col items-center justify-center w-full py-2 transition-colors duration-200 ${
                  isActive ? "text-[#D54CFF]" : "text-white hover:text-[#D54CFF]"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 h-10 w-1 bg-[#D54CFF] rounded-r-full"></span>
                  )}
                  {item.icon}
                  <span className="mt-1 text-[9px] font-semibold text-center whitespace-nowrap tracking-wide">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
