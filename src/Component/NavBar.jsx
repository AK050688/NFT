import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const Pages = ["HOME", "MARKETPLACE", "WALLET", "PROFILE"];

  return (
    <div className="flex justify-center w-full pt-12">
      <nav className="bg-[#D54CFF]/60 absolute z-10 text-white rounded-full py-3 px-6 flex items-center justify-between shadow-lg backdrop-blur-md max-w-[800px] w-full">
        <ul className="flex gap-6 items-center w-full justify-center">
          {Pages.map((page, index) => (
            <li key={index}>
              <NavLink
                to="/"
                className="text-white opacity-100 hover:text-white/90 transition font-medium"
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className=" bg-[#D54CFF] opacity-100 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition">
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;