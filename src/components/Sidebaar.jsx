import React from "react";
import { HiViewGrid, HiUser, HiUpload, HiShoppingBag, HiCurrencyDollar, HiClipboardList, HiPlusCircle, HiUsers } from "react-icons/hi";
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
  return (
    <div className="fixed top-0 left-0 h-screen w-18 flex flex-col items-center bg-[#FFFFFF33] text-white shadow-lg z-50">
      {/* Logo */}
      <div className="mt-4 mb-8 text-xs font-bold">Admin</div>
      {/* Menu Icons */}
      <div className="flex flex-col space-y-6 items-center w-full">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative group flex flex-col items-center justify-center w-full py-2 transition-colors duration-200 ${
                isActive ? "text-[#D54CFF]" : "text-white hover:text-[#D54CFF]"
              }`
            }
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
  );
};

export default Sidebar;
