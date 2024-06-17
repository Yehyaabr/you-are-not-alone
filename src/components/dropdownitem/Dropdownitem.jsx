import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../dropdownitem/Dropdownitem.css";
import Cookies from "js-cookies";

const Dropdownitem = () => {
  const handleLogout = (e) => {
    Cookies.removeItem("token");
    Cookies.removeItem("fullName");
    window.location.assign("/");
    console.log("s;md;asm;l");
  };
  return (
    <div className="">
      <ul className="absolute left-20  z-20 mt-10 w-56 origin-top-left rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
        <li className="w-full py-5 px-4 hover:shadow-lg">
          <Link to="/Profilepage">حسابي الشخصي</Link>
        </li>
        <li className="w-full py-5 px-4 hover:shadow-lg">
          <Link to="/sessions">الجلسات</Link>
        </li>

        <li className="w-full py-5 px-4 hover:shadow-lg">
          <button
            type="submit"
            className="text-[#533E89] font-bold text-xl"
            onClick={(e) => handleLogout(e)}
          >
            تسجيل الخروج {""}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdownitem;
