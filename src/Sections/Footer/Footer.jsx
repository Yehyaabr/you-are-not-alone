import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="block mt-4 ">
      <div className="w-full  p-0 text-right font-display">
        <div className=" py-0 px-[132px] bg-[#6c34af] relative mx-0">
          <div className=" relative w-full text-center pt-[35px]">
            <img src={img} className=" m-auto w-[150px] h-[100px]" />
            <div className="mt-4 mx-auto text-xl text-[#ffffff]">
              لتعزيز صحتك النفسية
            </div>
          </div>
          <span className="   w-full h-[1px] opacity-[0.1px] bg-[#eaedf2] mt-8 mb-[47px]"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
