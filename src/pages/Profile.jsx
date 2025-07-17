import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from 'react-router-dom';
import { selectUser } from "../redux/slices/authSlice";

const dashboardLinks = [
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: 'dashboard' },
  { name: 'Saved', path: 'saved' },
  { name: 'Collections', path: 'collections' },
  {name:'Owned',path:'owned'}
  // { name: 'Search', path: 'search' }, // Uncomment if you want Search
];

const Profile = () => {
  const user = useSelector(selectUser)
  console.log('>>>>>>>>>>>',user)
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Please log in to view your profile.
      </div>
    );
  }
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
