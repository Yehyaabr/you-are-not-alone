import React, { useEffect, useState } from "react";
import hero from "../../assets/Psychologist-rafiki.png";
import Button from "../../components/Buttons";
import { data } from "../../data";
import Card from "../../components/Card";
import image1 from "../../assets/talk-to-us.svg";
import image2 from "../../assets/programs.svg";
import { CiVideoOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Sections/Header/Header";
import Slidercard from "@/components/slider/Slidercard";

import Cookies from "js-cookies";
import Footer from "@/Sections/Footer/Footer";

const Home = () => {
  const [token, setToken] = useState(Cookies.getItem("token"));
  //     const [userName ,setUserName] = useState()
  //     const [test,setTest] = useState()
  //     useEffect(()=>{
  // axios.get("https://fakestoreapi.com/products")
  // .then(res=>{
  //     console.log(res)
  //     setTest(res.data)
  // })
  // .catch(err=>{
  // console.log(err)
  // })
  //     },[])
  //     const navigate=useNavigate()
  //     const handleClick = (id)=>{
  //         navigate(`/thirpst/${id}` ,{
  //             state:{
  //                 testId:id
  //             }
  //         })
  //     }

  // slidercard

  // slidercard
  const dataShow =
    data &&
    data.map((item) => (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        desc={item.desc}
        onClick={() => handleClick(item.id)}
      />
    ));

  return (
    <div className="bg-white">
      <Header />
      <div className="bg-gray-500 w-full h-[800px] relative p-8 z-[1] ">
        <img
          src={hero}
          className="absolute w-50 h-full top-0 inset-y-0 left-0 object-cover "
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l  from-40% to-transparent z-50 p-16 space-y-2 ">
          <h3 className="text-6xl text-[#004492] font-semibold  mb-6">
            لتعزيز صحتك النفسية
          </h3>
          <div className="min-w-64 mx-auto ">
            <p className=" ml-[213px] mb-[48px] text-[#0a0c12] font-normal text-xl ">
              حصل على الاست شارات النفسية المناسبة من خلال برامج المساعدة
              <br /> الذاتية المعدّة بعناية من أمهر أخصائيي وأطباء الصحة
              النفسية، أو
              <br /> جلسات فورية للتحدث مع أفضل استشاريي الطب والعلاج النفسي.
            </p>
          </div>

          <button
            type="submit"
            className="pt-[15px] pr-[40px] pb-[10px] pl-[50px] rounded-[32px] bg-[#004492] text-[#feffff] text-[20px] font-bold mt-[15px] mb-[21px] w-180px h-56px "
          >
            <Link to="/SignUp" className="">
              أنضم مجانا{" "}
            </Link>
          </button>
        </div>
      </div>
      {/* second hero  sections */}
      <div className="mt-16 mb-0 w-full items-center m-auto py-[20px] px-[233px]">
        {/* first Card */}
        <div className="">
          <h2 className="text-6xl text-[#004492] text-center font-semibold mb-4 mt-1">
            كيف تحصل على استشارتك النفسية؟
          </h2>
          <p className="text-3xl text-center items-center mt-3 font-normal ">
            إن الحصول على خدمة العلاج النفسي التي تناسبك أصبح أمرا سهلا جدا مع
            حاكيني، بامكانك الحصول على استشارة نفسية اون لاين وإرشاد للمساعدة
            الذاتية، بكل سرية وخصوصية.
          </p>

          <div className="flex items-center justify-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
              {dataShow}
            </div>
          </div>
          <div className="flex justify-center ">
            {token ? (
              <div className="mt-4">
                <button
                  type="submit"
                  className="  px-20 w-full py-4 p-9 rounded-[32px] bg-[#d67a69] font-bold text-[#feffff] border-[#feffff] "
                >
                  <Link
                    to="/sessions"
                    className="
               text-xs font-bold text-center text-[#feffff]"
                  >
                    حجز جلسة علاج نفسي
                  </Link>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <p
            className="text-xl text-center items-center 
             font-normal font-display mt-3"
          >
            إذا كنت في حالة تقتضي المساعدة الفورية وهناك خطورة على حياتك، يرجى
            الاتصال مباشرة برقم الطوارئ الخاص بمنطقتك!
          </p>
        </div>
        {/* end first Card */}
        {/* second Card */}

        <div className="flex items-center justify-center mx-auto mt-12 ">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 columns-2 ">
            <div className="border rounded-3xl border-[#e1e2f0]  border-solid p-[40px] w-full h-[340px]">
              <img src={image1} alt="img1" className="w-[62px] h-[56px]" />

              <h3 className="mt-[80px] mb-[20px] text-lg font-bold text-[#0a0c12]">
                جلسات اونلاين مع أمهر أخصائيي الصحة النفسية
              </h3>
              <p className="mb-[20px] text-[16px] font-normal text-[#0a0c12]">
                تحدث مع أخصائي ملائم لحاجتك من خلال رسائل، صوت، أو فيديو
              </p>
            </div>
            <div className="border rounded-3xl border-[#e1e2f0] border-solid p-[40px] w-full h-[340px]">
              <img src={image2} alt="img1" className="w-[62px] h-[56px]" />

              <h3 className="mt-[80px] mb-[20px] text-lg font-bold text-[#0a0c12]">
                لا تريد التحدث مع أخصائي نفسي بشكل فوري
              </h3>
              <p className="mb-[20px] text-[16px] font-normal text-[#0a0c12]">
                تستطيع البدء ب برامج المساعدة الذاتية للحصول على إرشاد نفسي،
                اجتماعي، سلوكي، تربوي، أسري وأكثر
              </p>
            </div>
          </div>
        </div>

        {/* end Second Card */}
      </div>
      {/* end second hero  sections */}

      {/* third hero sections */}
      <div className="mt-0  ">
        <h1 className="text-4xl font-bold text-right mb-4 text-[#004492]">
          دكتور وطبيب ومعالج نفسي
        </h1>
        <p className=" font-display text-[16px] text-right text-[ #35405e] w-[65%]">
          نقدم لك أفضل الأطباء وأخصائي العلاج والصحة النفسية ذو خبرة سنوات طويلة
          ونوعية.
        </p>
        <Slidercard />
      </div>
      {/* end third hero sections */}
      <Footer />
    </div>
  );
};

export default Home;
