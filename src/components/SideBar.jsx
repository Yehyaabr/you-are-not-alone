import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="  flex flex-col side-bar p-5 border-l-2 border-l-[#cbc9c9] w-[20%] h-[100vh] mt-[51px]  ">
      <Link to="/dashboard/Users" className="item-link  text-black text-3xl ">
        Users
      </Link>
      <Link to="/dashboard/Users" className="item-link  text-black text-3xl ">
        Users
      </Link>
      1
    </div>
  );
};

export default SideBar;
