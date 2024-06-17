import React from "react";
import { Link } from "react-router-dom";

const SecondHeader = () => {
  return (
    <div
      className="flex justify-between absolute flex-row items-center py-0 px-32 
    border-solid border border-[#caccd3]  border-l-0  border-r-0 bg-[#fff]  z-[1] w-full h-[50px] mt-0 "
    >
      <div className=" h-6 flex justfy-start items-center gap-[28px] p-0 ">
        <Link
          to="/dashboard"
          className="   h-12 w-[104px] font-sans text-xl  text-center text-[#35405e] pt-3"
        >
          لوحة التحكم{" "}
        </Link>

        <Link
          to="/sessions"
          className="   h-12  w-[104px] font-sans text-xl  text-center text-[#35405e] pt-3"
        >
          {" "}
          الجلسات{" "}
        </Link>
      </div>
      <div className=" h-6 flex justfy-start items-center gap-[28px] p-0">
        <Link
          to="/profilepage"
          className="   h-12  w-[104px] font-sans text-xl  text-center text-[#35405e] pt-3 border-b-2 border-b-solid divide-y divide-solid before:no-underline after:divide-[#004492]"
        >
          ملفي
        </Link>
      </div>
    </div>
  );
};

export default SecondHeader;
