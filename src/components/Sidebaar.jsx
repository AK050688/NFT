import React from "react";
import {
  HiViewGrid,
  HiShoppingBag,
  HiHeart,
  HiStar
} from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center
                    bg-[#FFFFFF33] text-white shadow-lg z-50">
      
      {/* Logo */}
      <div className="mt-4 mb-8 text-xs font-bold">logo</div>

      {/* Active Tab Indicator (example for top icon) */}
      <div className="absolute left-0 top-16 h-6 w-1 bg-pink-500 rounded-r-full"></div>

      {/* Menu Icons */}
      <div className="flex flex-col space-y-8 items-center">
        <SidebarIcon icon={<HiViewGrid size="24" />} active />
        <SidebarIcon icon={<HiShoppingBag size="24" />} />
        <SidebarIcon icon={<HiHeart size="24" />} />
        <SidebarIcon icon={<HiStar size="24" />} />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, active }) => (
  <div
    className={`text-white hover:text-pink-400 cursor-pointer ${
      active ? "text-pink-500" : ""
    }`}
  >
    {icon}
  </div>
);

export default Sidebar;
