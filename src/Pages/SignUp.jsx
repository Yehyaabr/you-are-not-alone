import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import image1 from "../assets/Mobile login-amico.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Sections/Header/Header";
import Cookies from "js-cookies";
const SignUp = () => {
  const [lname, setLname] = useState("");
  const [birthday, setBirthDay] = useState("");

  const [email, setEmail] = useState("");
  const [fatname, setFatName] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");
  const [fname, setFname] = useState("");
  const [address, setAddress] = useState("");
  const [specializations, setSpecializations] = useState();
  const [specializationtype, setSpecializationtype] = useState();

  const [accept, setAccept] = useState(false);
  const [accounts, setAccounts] = useState();
  const [accountType, setAccountType] = useState();

  async function Submit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", {
        email,
        name: fname,
        last_name: lname,
        password,
        birthday,
        phone: PhoneNumber,
        account_type: accountType,
        father_name: fatname,
        address: address,
        specialization_id: specializationtype,
      })
      .then((res) => {
        console.log(res);
        Cookies.setItem("token", res.data.token);
        Cookies.setItem("fullName", `${fname} ${lname}`);

        window.location.assign("/");
        // else if(res.data.account_type == 1){}
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/accountTypes", {
        // headers: {
        //   Authorization: `Bearer ${Cookies.getItem("token")}`,
        // },
      })
      .then((res) => {
        setAccounts(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/specializations", {
        // headers: {
        //   Authorization: `Bearer ${Cookies.getItem("token")}`,
        // },
      })
      .then((res) => {
        setSpecializations(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options =
    accounts &&
    accounts.map((item) => <option value={item.id}>{item.name}</option>);

  const secondoptions =
    specializations &&
    specializations.map((item) => <option value={item.id}>{item.name}</option>);
  return (
    <div className="bg-[#fff8f5] w-full ">
      <div>
        <Header />
      </div>
      <div className=" flex  flex-nowrapitems-center justify-center   w-full pt-[68px] pb-[72px] px-[134px] ">
        <div className=" rounded-3xl bg-[#f4f1ef] p-8 w-full  ">
          <div className="">
            <form className="w-full max-w-[unset] " onSubmit={Submit}>
              <div className="pl-4 w-full mt-3">
                <label
                  htmlFor="fname"
                  className="
                        font-bold 
                       text-[#35405e] 
                     w-full mb-4 text-base "
                >
                  الاسم
                </label>
                <input
                  id="fname"
                  type="text"
                  placeholder="الاسم"
                  className="
                    
                                  w-full h-fit px-5 py-4 rounded-2xl 
                                  shadow-lg
                                  
                                  border-solid
                                  border-[1px]
                                  border-[#d5dde7]
                                  bg-[#fff] text-[17px]   
                                  leading-[1.41] 
                                  text-right 
                                  text-[#35405e] "
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                {fname === "" && accept && <p>Username is Required</p>}
              </div>

              <div className="my-3">
                <label
                  htmlFor="name"
                  className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                >
                  الكنية
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="الكنية"
                  className=" w-full h-fit px-5 py-4 rounded-2xl 
        shadow-lg  
        border-solid
        border-[1px]
        border-[#d5dde7]
        bg-[#fff] text-[17px] 
        leading-[1.41] 
        text-right 
        text-[#35405e] "
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="my-3">
                <div className="mt-3">
                  <label
                    htmlFor="fatname"
                    className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                  >
                    اسم الاب
                  </label>

                  <input
                    id="fatname"
                    type="text"
                    placeholder="اسم الاب "
                    className="w-full h-fit px-5 py-4 rounded-2xl 
        shadow-lg  
        border-solid
        border-[1px]
        border-[#d5dde7]
        bg-[#fff] text-[17px] 
        leading-[1.41] 
        text-right 
        text-[#35405e] "
                    value={fatname}
                    onChange={(e) => setFatName(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-3">
                <div className="mt-3">
                  <label
                    htmlFor="fatname"
                    className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                  >
                    العنوان
                  </label>

                  <input
                    id="address"
                    type="text"
                    placeholder=" العنوان "
                    className="w-full h-fit px-5 py-4 rounded-2xl 
        shadow-lg  
        border-solid
        border-[1px]
        border-[#d5dde7]
        bg-[#fff] text-[17px] 
        leading-[1.41] 
        text-right 
        text-[#35405e] "
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="my-3">
                <div className="mt-3">
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
                  {accept && emailError === 422 && (
                    <p>Email already been taken</p>
                  )}
                </div>
              </div>
              <div className="mt-3">
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
                {password.length < 8 && accept && (
                  <p className="text-red-600"> password must be more than 8</p>
                )}
              </div>
              <div className="mt-3">
                <label
                  htmlFor="number"
                  className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                >
                  {" "}
                  رقم الجوال
                </label>
                <input
                  id="phonenumber"
                  type="text"
                  placeholder="رقم الجوال"
                  className=" w-full h-fit px-5 py-4 rounded-2xl 

shadow-lg  
border-solid
border-[1px]
border-[#d5dde7]
bg-[#fff] text-[17px] 
leading-[1.41] 
text-right 
text-[#35405e] "
                  value={PhoneNumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label
                  htmlFor="date"
                  className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                >
                  {" "}
                  الميلاد
                </label>
                <input
                  id="birthday"
                  type="date"
                  placeholder=" الميلاد "
                  className=" w-full h-fit px-5 py-4 rounded-2xl 

shadow-lg  
border-solid
border-[1px]
border-[#d5dde7]
bg-[#fff] text-[17px] 
leading-[1.41] 
text-right 
text-[#35405e] "
                  value={birthday}
                  onChange={(e) => setBirthDay(e.target.value)}
                />
              </div>
              <div className="mt-3  ">
                <label
                  htmlFor="accountype"
                  className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                >
                  {" "}
                  نوع الحساب
                </label>
                <select
                  onChange={(e) => setAccountType(e.target.value)}
                  className=" w-full h-fit px-5 py-4 rounded-2xl 

  shadow-lg  
  border-solid
  border-[1px]
  border-[#d5dde7]
  bg-[#fff] text-[17px] 
  leading-[1.41] 
  text-right 
  text-[#35405e] "
                >
                  <option value={null}>اختر النوع</option>
                  {options}
                </select>
              </div>
              {accountType == 2 ? (
                <div className="mt-3  ">
                  <label
                    htmlFor="specializations"
                    className="text-base block mb-2 text-[#35405e] font-semibold text-right"
                  >
                    {" "}
                    نوع التخصص
                  </label>
                  <select
                    onChange={(e) => setSpecializationtype(e.target.value)}
                    className=" w-full h-fit px-5 py-4 rounded-2xl 

shadow-lg  
border-solid
border-[1px]
border-[#d5dde7]
bg-[#fff] text-[17px] 
leading-[1.41] 
text-right 
text-[#35405e] "
                  >
                    <option value={null}>اختر نوع التخصص</option>
                    {secondoptions}
                  </select>
                </div>
              ) : null}

              <div className="mt-3">
                <button
                  type="submit"
                  className="  w-full py-4 p-9 rounded-[100px] bg-[#533E89] border-[#004492] mt-3 mb-7 "
                >
                  <span
                    className="
                text-xs font-bold text-center text-[#feffff]"
                  >
                    انشاء حساب ومتابعة
                  </span>
                </button>
              </div>
            </form>
          </div>
          <p className="text-xl text-right text-[#533E89] m-0 self-start">
            ليس لديك حساب بالفعل ؟
            <Link
              to="/LogIn"
              className=" font-semibold underline decoration-[0.5px]
                 decoration-[#533E89] cursor-pointer
                 	text-[#004492]"
            >
              تسجيل دخول
            </Link>
          </p>
        </div>
        <div className="rounded-3xl border-r-2 border-solid  bg-[#f4f1ef] p-8 w-full lg:block sm:hidden">
          <img src={image1} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
