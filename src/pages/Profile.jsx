import React from "react";
import { NavLink, Outlet } from 'react-router-dom';

const dashboardLinks = [
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: 'dashboard' },
  { name: 'Trending Bids', path: 'trending-bids' },
  { name: 'Saved', path: 'saved' },
  { name: 'Collections', path: 'collections' },
  // { name: 'Search', path: 'search' }, // Uncomment if you want Search
];

const Profile = () => {
  return (
    <div className="md:mt-24 mt-12">
      <div className="min-h-screen relative z-1  p-4 md:p-10 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex space-x-6 border-b border-purple-700 mb-8">
            {dashboardLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `pb-2 text-lg font-semibold border-b-2 transition ${
                    isActive ? 'border-[#D54CFF] text-white' : 'border-transparent text-white/70 hover:text-white'
                  }`
                }
                end
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          {/* Content Area */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
