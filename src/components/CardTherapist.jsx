import doctor from "../assets/doctor.jpg";

import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { memo } from "react";

const CardTherapist = ({ item }) => {
  return (
    <div>
      <div className="p-5 flex flex-col items-center w-full">
        <div
          className=" px-4 pt-7 pb-4 h-[390px] w-[379px] relative flex flex-col 
        justify-center items-center m-0 rounded-3xl shadow-xl 
        border border-solid border-[#dadee2] cursor-pointer text-center min-h-[359px] hover:border-[#004492]"
        >
          <div className="">
            <img
              src={doctor}
              className="   mt-4 h-[140px] w-[140px] rounded-[200px] object-cover mb-5 "
            />
          </div>

          <p className="  w-full text-xl font-medium text-[#0a0c12] mb-1 mt-3">
            {item.name} {item.last_name}
          </p>
          <p className="  w-full text-xl font-medium text-[#0a0c12] mb-1 mt-3">
            {item.type.name}
          </p>
          {/* <p className="w-full text-xl font-medium text-[#0a0c12] mb-1 mt-3">
          {item.specialization.id.name}
        </p> */}
          <p className="w-[100%] font-normal text-[#0a0c12] opacity-55 text-sm text-center ">
            {item.address}
          </p>
          <div className=" my-1 mx-0 flex flex-row justify-center items-center ">
            <Link
              to={`/therapistprofile/${item.id}`}
              className=" text-xs font-medium text-[#004492] mr-[20px] "
            >
              البروفايل
            </Link>
            <Link
              to="/"
              className="    h-[52px] w-[119px]  flex justify-center items-center border border-solid border-[#fff] rounded-[100px] font-semibold text-2xl text-[#35405e] "
            >
              احجز
            </Link>
          </div>
          <div className=" mb-5 mx-0 flex flex-row justify-center items-center ">
            <StarRating id={item.id} rate={item.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTherapist;
