import React from "react";
import img from "../assets/guy.png";
import { Button } from "./ui/button";

const Seissonstherapist = ({ item }) => {
  return (
    <button
      type=""
      className="    
    first:rounded-t-[20px]
    last:rounded-b-[20px] 
     flex justify-start items-center p-5 
     border-[2px] bg-[#fff] gap-5 text-[#141b34] font-display overflow-y-auto focus:outline-none focus:border-[#ca7e6d] focus:ring-1 focus:ring-[#ca7e6d] w-full"
    >
      {" "}
      <div className="image">
        <img src={img} alt="" className=" w-12 h-12 rounded-[220px]" />
      </div>
      <div className="w-full">
        <span className=" h-6 text-xl font-semibold text-right">
          {item.name} {item.last_name}
        </span>
        <br />
        <span className="text-xl text-right mt-1"> {item.type.name}</span>
      </div>
    </button>
  );
};

export default Seissonstherapist;
