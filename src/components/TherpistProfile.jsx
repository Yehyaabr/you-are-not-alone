import React, { useEffect, useState } from "react";
import backgroundprofile from "../assets/backgroundprofile.png";
import usertherapist from "../assets/guy.png";
import axios from "axios";
import Cookies from "js-cookies";
import { BiCheckboxChecked, BiBookReader } from "react-icons/bi";
import { useParams } from "react-router-dom";

const TherpistProfile = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/${params.id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div className=" rtl:right-0 text-right">
      <div className="overflow-visible font-display w-full p-0">
        <div
          className="
    bg-cover object-contain h-[300px] bg-[#fff1] mx-0 "
          style={{ backgroundImage: `url(${backgroundprofile})` }}
        >
          {" "}
        </div>

        <div className="px-[232px] pb-8 pt-0 bg-[##f6f8fa]">
          {}
          <div className="flex flex-wrap ">
            <div className="w-fit float-right grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
              <img
                src={data?.avatar}
                className=" #d9d9d9; static mt-[-90px] w-[176px] h-[176px] rounded-3xl border-[3px] border-solid border-[#fff] bg-[#d9d9d9]"
              />
            </div>
            <div className="float-right">
              <h1
                className="    

          text-2xl font-bold text-right text-[#35405e] mt-6 mr-6 mb-0 ml-0
        "
              >
                {" "}
                {data?.name}
              </h1>
              <p className="text-xl font-bold text-right text-[#35405e] pr-6 ">
                {data?.type?.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="    pt-[40px] pr-[232px] pb-[56px] pl-[232px] bg-[#f6f8fa]">
        <div className="flex flex-row-reverse mr-0 ml-0  ">
          <div className="pr-0 pl-0 float-left">
            <div className=" float-right w-full h-full m-0 py-6 px-7 rounded-2xl bg-[#fff]">
              <div className="font-display float-right">
                <h2 className=" mb-5 text-2xl font-bold text-right text-[#35405e] ">
                  {" "}
                  نبذة عن ...
                </h2>
                <span className="text-[18px] text-right w-full float-right font-display">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quibusdam voluptatum, quae exercitationem tempora molestias
                  id, sequi ea sed adipisci quod iusto possimus veniam obcaecati
                  similique quam? Dolor voluptatum fugit ad!
                </span>
              </div>
            </div>
          </div>
          <div className="py-0 pl-6 pr-0 float-right">
            <div className=" float-left  w-full py-6 px-7 rounded-[16px] bg-[#fff] flex-col">
              <div className="float-left  w-full font-display ">
                <h2 className=" mb-5 text-2xl font-bold text-right text-[#35405e] ">
                  {" "}
                  تعريف
                </h2>
                <span className="  ; text-[18px] text-right text-[335405e] mb-5  ">
                  {" "}
                  {data?.address}
                </span>
                <span className="  ; text-[18px] text-right text-[335405e] mb-5  ">
                  {" "}
                  {data?.type?.name}
                  <BiCheckboxChecked style={{ float: "right" }} />
                </span>
                <span className="  ; text-[18px] text-right text-[335405e] mb-5  flex   ">
                  {" "}
                  {data?.specialization?.name}
                  <BiBookReader
                    style={{
                      width: "50px",
                      float: "right",
                      textAlign: "right",
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherpistProfile;
