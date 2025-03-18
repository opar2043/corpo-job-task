import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <NavLink to={'/'}> <li><a>Home</a></li> </NavLink>
      <NavLink to={'/user'}> <li><a>User</a></li> </NavLink>
      <NavLink to={'/about'}> <li><a>About</a></li> </NavLink>
    </>
  );
  return (
    <div className="mb-20">
      <div className="navbar bg-base-100 border-b md:px-6 fixed top-0 z-40 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
           <div className="flex items-center">
           <img src="https://i.ibb.co.com/BKBS4Lw3/favicon.png" className="w-8 rounded-lg" alt="" />
           <a className="btn btn-ghost text-xl ">Corporate LTD</a>
           </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold">{link}</ul>
        </div>
        <div className="navbar-end ">
          <div className="border border-black rounded-full p-2">
          <FaUser></FaUser>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
