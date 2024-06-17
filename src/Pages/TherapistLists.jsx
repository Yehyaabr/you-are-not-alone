import Header from "@/Sections/Header/Header";
import herotherapiset from "../assets/Psychologist-rafiki.png";
import CardTherapist from "@/components/CardTherapist";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookies";
// import { CiSearch } from "react-icons/ci";
// import { Button } from "@/components/ui/button";
// import SearchForm from "@/components/SearchForm";
// import {
//   GridComponent,
//   ColumnDirective,
//   ColumnsDirective,
//   Page,
//   Search,
//   Inject,
//   Toolbar,
// } from "@syncfusion/ej2-react-grids";

// import axios from "axios";

// import React, { useEffect, useState } from "react";

const TherapistLists = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("http://127.0.0.1:8000/api/user", {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.getItem("token")}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  //   // const navigate = useNavigate();
  //   // const handleClick = (id) => {
  //   //   navigate(`/thirpst/${id}`, {
  //   //     state: {
  //   //       testId: id,
  //   //     },
  //   //   });
  //   // };
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
  console.log("hdsghsgs", data);
  const cardtherapist =
    data && data.map((item) => <CardTherapist item={item} />);

  return (
    <div className="bg-white">
      <div className=" bg-white">
        <Header />
      </div>
      <div
        className="bg-[#f4f1fe] w-full h-[500px] relative p-8 
       pt-[104px] px-[80px] pb-0  mt-[8px] 
       mb-[52px] mx-[8px] rounded-[28px] flex  "
      >
        <img
          src={herotherapiset}
          className="absolute w-50 h-full top-0 inset-y-0 left-0 object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l  z-50 p-16 space-y-2">
          <h3 className="text-6xl text-[#2de9c4] font-semibold  mb-6">
            استشاريو أنت لست وحدك
          </h3>
          <div className="min-w-64 mx-auto">
            <p className=" ml-[213px] mb-[48px] text-[#0a0c12] font-normal text-xl ">
              يوجد في أنت لست وحدك استشاريين وخبراء نفسيين ذوي خبرة وكفاءة
              عالية، يمكنك حجز استشارة نفسية من <br></br> خلال معالج ،أو طبيب
              ،أو استشاري ،أو مرشد نفسي
            </p>
          </div>

          <div className="">{/* <SearchForm /> */}</div>
        </div>
      </div>
      <div className="">
        <div
          className="  
    padding: 0 20px; text-bold font-normal text-2xl tracking-normal text-right text-[#2de9c4] mb-5 "
        >
          قائمة الاستشارين والاخصائين
        </div>
        <div className="flex items-center justify-center mx-auto w-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            {cardtherapist}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistLists;
