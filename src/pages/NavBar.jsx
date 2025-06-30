import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Pages = [
    { name: "HOME", path: "/" },
    { name: "MARKETPLACE", path: "/market-place" },
    { name: "WALLET", path: "/connect" },
    { name: "PROFILE", path: "/profile" },
    { name: "dash", path: "/dash" },
  ];

  return (
    <div className="flex justify-center w-full pt-6">
      <nav className="bg-[#D54CFF]/60 z-50 text-white rounded-full py-3 px-6 flex items-center justify-between shadow-lg backdrop-blur-md max-w-[900px] w-full">
        <ul className="flex gap-6 items-center w-full justify-center">
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

        <button className="bg-[#D54CFF] text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-[#c043e8] transition">
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
