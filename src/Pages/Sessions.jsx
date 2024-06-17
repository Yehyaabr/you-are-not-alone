import Header from "@/Sections/Header/Header";
import SecondHeader from "@/Sections/Secondheader/SecondHeader";

import ModalReservation from "@/components/ModalReservation";
import img from "../assets/guy.png";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookies";
import Seissonstherapist from "@/components/Seissonstherapist";
import { DayPicker } from "react-day-picker";

const Sessions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [data, setData] = useState([]);
  const [activetap, setActivetap] = useState(0);

  //   e.preventDefault();
  //   axios
  //     .post("http://127.0.0.1:8000/api/register", {

  //     })
  //     .then((res) => {
  //       console.log(res);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("hdsghsgs", data);
  const seissonstherapist =
    data && data.map((item) => <Seissonstherapist item={item} />);

  return (
    <Fragment>
      <div className="mb-12">
        <Header />
        <SecondHeader />
      </div>

      <div className="float-right w-full font-display  p-0 text-right">
        <div className="px-[132px] pt-0 pb-[30px] mx-0 ">
          <div className="  flex items-center justify-between  flex-wrap top-[139px]  sticky mb-[18px]  pt-8 mt-3 bg-white z-[1]">
            <h1 className=" text-3xl text-right text-[#004492] m-0">
              جلساتك المحجوزة
            </h1>
            <div className="   h-9 flex justify-between items-center text-center gap-1 p-1 rounded-full bg-[#f6f8fa]">
              {" "}
              <span className=" flex flex-row justify-center items-center gap-[6px] py-1 px-[10px] rounded-[999px]shadow-md bg-[#fff] font-bold">
                {" "}
                الجلسات القادمة{" "}
              </span>
              <span className="flex flex-row justify-center items-center gap-[6px] py-1 px-[10px] rounded-full shadow-md bg-[#fff] font-bold">
                {" "}
                الجلسات المحجوزة
              </span>
            </div>
            <div className="    float-right  px-0 ">
              <a
                className=" bg-[#faccb9] max-w-[226px] flex  justify-center items-center gap-3 py-3 px-6 rounded-full"
                onClick={handleOpen}
              >
                <span className=" text-xl font-semibold text-center text-[#491c14]">
                  حجز جلسة جديدة
                </span>
              </a>
              <ModalReservation
                show={isOpen}
                onClose={handleClose}
                className="block"
              >
                <div className="bg-white rounded-none ">
                  <div className="modal-header  py-6 px-7 p-[15px] border-b border-b-[solid] border-b-[#fff] ">
                    <button
                      className="opacity-[1] float-left mt-[-2px] "
                      onClick={handleClose}
                    >
                      X
                    </button>
                    <h3 className=" text-[20px] font-bold text-xl text-[#ca7e6d] m-0">
                      {" "}
                      حجز جلسة جديدة
                    </h3>
                    <div className="mt-5">
                      <ul className="flex flex-row justify-start items-center gap-1 p-1 rounded-[16px] bg-[#f6f8fa] border-none">
                        <li className="p-0 float-right relative block ">
                          <button
                            className="text-[#555] bg-[#fff]
                            rounded-[12px]
                            focus:border-none
                            focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2
                             "
                            onClick={() => setActivetap(0)}
                          >
                            <span className="  text-xl font-semibold text-right mr-0">
                              المستشار
                            </span>
                            <br />
                            <span className="h-5 text-xl font-semibold text-right">
                              اختر المستشارالخاص بك
                            </span>
                          </button>
                        </li>
                        <li className="p-0 float-right relative block ">
                          <button
                            className="text-[#555] bg-[#fff]
                            rounded-[12px]
                            focus:border-none
                            focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2
                           
                            "
                            onClick={() => setActivetap(1)}
                          >
                            <span className="  text-xl font-semibold text-right mr-0">
                              وقت الجلسة
                            </span>
                            <br />
                            <span className="h-5 text-xl font-semibold text-right">
                              تاريخ ووقت الجلسة
                            </span>
                          </button>
                        </li>
                        <li className="p-0 float-right relative block ">
                          <button
                            className="text-[#555] bg-[#fff]
                            rounded-[12px]
                            focus:border-none
                            focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2
                           
                            "
                            onClick={() => setActivetap(2)}
                          >
                            <span className="  text-xl font-semibold text-right mr-0">
                              نوع الجلسة
                            </span>
                            <br />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {activetap === 0 ? (
                    <div className="  bg-[#f6f8fa] p-0 overflow-y-scroll h-[740px]">
                      <div className="28px 40px 0 35px; pt-[28px] pr-10 pb-0 pl-[35px] ">
                        <div className="the-therapist  ">
                          <span className=" text-xl font-semibold text-right text-[#35405e] font-display">
                            {" "}
                            جميع المستشارين
                          </span>
                          <div className=" mx-0  ">{seissonstherapist}</div>
                        </div>
                      </div>
                    </div>
                  ) : activetap === 1 ? (
                    <div className="pt-0 pr-[40px] pb-5 pl-[35px] h-full">
                      <div className=" rounded-[20px] bg-[#fff] flex-col justify-center items-center mt-4 ">
                        <div className="border-b  border-solid border-[#f6f8fa]  py-4 px-6 ">
                          {" "}
                          <span className="text-xl font-semibold text-right text-[#35405e] font-display w-[150px] ">
                            اختر تاريخ الجلسة
                          </span>
                        </div>
                        <div className="px-[90px] pt-6 pb-9 ">
                          <div className="m-0 w-full mb-[55px] float-right relative block">
                            <DayPicker />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>hello</div>
                  )}

                  <div className="footer flex flex-row justify-end items-center gap-5 py-6 px-10 border-solid border-[0.1px] border-[#d8dbdf] bg-[#fff] absolute bottom-0 w-full font-display">
                    <button
                      className=" w-[132px] text-xl font-semibold text-center text-[#d67a69] bg-[#fff]"
                      onClick={handleClose}
                    >
                      الغاء
                    </button>
                    <button className="w-[132px] flex flex-row justify-center items-center gap-2 py-4 px-6 text-xl font-semibold text-center text-[#fff] rounded-[300px] bg-[#d67a69]">
                      التالي
                    </button>
                  </div>
                </div>
              </ModalReservation>
            </div>
          </div>
        </div>{" "}
      </div>
    </Fragment>
  );
};

export default Sessions;
