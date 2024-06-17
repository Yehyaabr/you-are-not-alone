import Header from "@/Sections/Header/Header";
import SecondHeader from "@/Sections/Secondheader/SecondHeader";
import React from "react";
import { Outlet } from "react-router-dom";

const PageTest = () => {
  return (
    <div>
      {/* <Header />
      <div className="flex">
        <SecondHeader />
        <div className="">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
};

export default PageTest;
