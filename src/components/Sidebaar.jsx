import React from "react";
import { HiViewGrid, HiShoppingBag, HiHeart, HiStar } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
const navItems = [
  { to: "/dash", icon: <HiViewGrid size={24} />, label: "Dashboard" },
  { to: "/trending-bids", icon: <HiShoppingBag size={24} />, label: "Bids" },
  { to: "/saved", icon: <HiHeart size={24} />, label: "Saved" },
  { to: "/collections", icon: <HiStar size={24} />, label: "Collections" },
];

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-[#FFFFFF33] text-white shadow-lg z-50">
  {/* Logo */}
  <div className="mt-4 mb-8 text-xs font-bold">logo</div>

  {/* Menu Icons */}
  <div className="flex flex-col space-y-8 items-center w-full">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `relative group flex items-center justify-center w-full py-2 ${
            isActive ? "text-pink-500" : "text-white hover:text-pink-400"
          }`
        }
      >
   
        {({ isActive }) =>
          isActive && (
            <span className="absolute left-0 h-6 w-1 bg-pink-500 rounded-r-full"></span>
          )
        }

  
        {item.icon}

        
        <span className="absolute left-16 bg-pink-500 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 transition">
          {item.label}
        </span>
      </NavLink>
    ))}
  </div>
</div>

  );
};

export default Sidebar;
