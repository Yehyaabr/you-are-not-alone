import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Users from "./Users";
import { Outlet } from "react-router-dom";
import Header from "@/Sections/Header/Header";
import SecondHeader from "@/Sections/Secondheader/SecondHeader";

const Dashboard = () => {
  return (
    <div className="m-0 p-0">
      <Header />
      <SecondHeader />

      <div className="flex  ">
        <SideBar />
        <div className="w-[80%] top-0 left-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
