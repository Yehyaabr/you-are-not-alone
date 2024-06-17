import React, { useState } from "react";
import Buttons from "../components/Buttons";
import loginpic from "../assets/Login-rafiki.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Sections/Header/Header";
import Cookies from "js-cookies";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Submit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        Cookies.setItem("token", res.data.token);
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-[#fff8f5] w-full  ">
      <div>
        <Header />
      </div>
      <div className=" flex  flex-nowrapitems-center justify-center   w-full   pt-[68px] pb-[72px] px-[134px] ">
        <div className=" rounded-3xl bg-[#f4f1ef] p-8 w-full  items-center ">
          <div className="">
            <form className="w-full max-w-[unset] " onSubmit={Submit}>
              <div className="my-3">
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                  >
                    البريد الالكتروني
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="أدخل البريد الالكتروني"
                    className="w-full h-fit px-5 py-4 rounded-2xl 
      shadow-lg  
      border-solid
      border-[1px]
      border-[#d5dde7]
      bg-[#fff] text-[17px] 
      leading-[1.41] 
      text-right 
      text-[#35405e] "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                >
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="كلمة المرور"
                  className=" w-full h-fit px-5 py-4 rounded-2xl 

      shadow-lg  
      border-solid
      border-[1px]
      border-[#d5dde7]
      bg-[#fff] text-[17px] 
      leading-[1.41] 
      text-right 
      text-[#35405e] "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="  w-full py-4 p-9 rounded-[100px] bg-[#533E89] border-[#004492] mt-5 mb-0 "
                >
                  <span
                    className="
                text-4xl font-bold text-center text-[#feffff]"
                  >
                    تسجيل دخول
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="rounded-3xl size-50 border-r-2 border-solid  bg-[#f4f1ef] p-8 w-full lg:block sm:hidden">
          <img src={loginpic} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
