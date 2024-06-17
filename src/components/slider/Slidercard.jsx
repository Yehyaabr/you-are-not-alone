import { Swiper, SwiperSlide } from "swiper/react";
import photo from "../../assets/guy.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookies";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const Slidercard = () => {
  const [data, setData] = useState([]);
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
  console.log(data);

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#FFF89-]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center">
                  <img src={photo} />
                </div>
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">
                    {" "}
                    {item.name} {item.last_name}
                  </h1>
                  <p className="lg:text-[18px]"> {item.type.name}</p>
                </div>
                <Link to={`/TherapistList/therapistprofile/${item.name}`}>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </Link>{" "}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slidercard;
