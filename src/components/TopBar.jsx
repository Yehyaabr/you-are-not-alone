import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";

const TopBar = () => {
  return (
    <>
      <nav className="w-full h-fit bg-[#f4f1ef] lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo section */}
              <Link to="/" className="/">
                <img src={logo} className="size-20   " />
              </Link>
              {/* Toggle button section  (we will do it later) */}
            </div>
          </div>

          {/* NAvbar menu items section */}

          <button type="submit" className="text-[#533E89] font-bold text-xl">
            <Link to="/">Go Back to Website</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
