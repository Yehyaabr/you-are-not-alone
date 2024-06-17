import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo-removebg-preview.png";
import SecondHeader from "../Secondheader/SecondHeader";
import Cookies from "js-cookies";
import Dropdownitem from "@/components/dropdownitem/Dropdownitem";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [token, setToken] = useState(Cookies.getItem("token"));
  const [openmenu, setOpenMenu] = useState(false);
  const [fulname, setFullName] = useState(Cookies.getItem("fullName"));

  const Navbar = [
    {
      name: "الصفحةالرئيسية",
      link: "/",
    },
    {
      name: "الاستشارين",
      link: "/therapistLists",
    },
    {
      name: "انشاء حساب",
      link: "/SignUp",
    },
    {
      name: "تسجيل دخول",
      link: "/LogIn",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

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
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-800 ease-out duration-700"
                >
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/therapistLists"
                  className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-800 ease-out duration-700"
                >
                  الأستشارين
                </Link>
              </li>
              <li>
                {!token ? (
                  <>
                    <Link
                      to="/SignUp"
                      className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-800 ease-out duration-700"
                    >
                      اشتراك
                    </Link>
                    <Link
                      to="/LogIn"
                      className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-800 ease-out duration-700"
                    >
                      تسجيل دخول
                    </Link>{" "}
                  </>
                ) : (
                  <>
                    <div
                      className="flex items-center
                 gap-2 cursor-pointer p-1
                  hover:bg-light-gray rounded-lg "
                      // onClick={() => handleClick("userProfile")}
                    >
                      <img className="rounded-full w-8 h-8" src="" />
                      <p>
                        <span className="text-gray-400 text-14">{fulname}</span>{" "}
                        <span
                          className="text-gray-400 
                      font-bold ml-1 text-14"
                        >
                          {}
                        </span>
                      </p>
                      <MdKeyboardArrowDown
                        className=" "
                        onClick={() => setOpenMenu((prev) => !prev)}
                      />
                    </div>
                    {openmenu && <Dropdownitem />}
                  </>
                )}
              </li>
            </ul>

            {/* {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
             */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
