import React, { useState } from "react";
import image2 from "../assets/Psychologist-amico.png";
import { Outlet } from "react-router-dom";
import Header from "../Sections/Header/Header";

const Therapist = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [usertype, setUserType] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");

  const [emailError, setEmailError] = useState("");
  // const [flag, setFlag] = useState(false);

  const [accept, setAccept] = useState(false);
  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (fname === "" || password.length < 8) {
      flag = false;
    } else flag = true;

    // try {
    //   if (flag) {
    //     let res = await axios.post("", {
    //       name: name,
    //       fname: fname,
    //       fatName: fatName,
    //       email: email,
    //       password: password,
    //       PhoneNumber: PhoneNumber,
    //     });

    if (res.stauts === 200) {
      window.localStorage.setItem = ("email", email);
      window.location.pathname = "/";
    }
    //   }
    // // } catch (err) {
    // //   setEmailError(err.response.status);
    // // }
  }
  return (
    <div className="bg-[#fff8f5] w-full ">
      <div>
        <Header />
      </div>
      <div className=" flex  flex-nowrapitems-center justify-center   w-full pt-[68px] pb-[72px] px-[134px] ">
        <div className=" rounded-3xl bg-[#f4f1ef] p-8 w-full  ">
          <div className="">
            <form className="w-full max-w-[unset] " onSubmit={Submit}>
              <div className=" flex justify-center w-full ">
                <div className="pl-4 w-full mt-3">
                  <label
                    htmlFor="fname"
                    className="
                    font-bold 
                   text-[#35405e] 
                 w-full mb-4 text-base "
                  >
                    الاسم الاول
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

                <div className="pl-4 mt-3 w-full">
                  <label
                    htmlFor="lname"
                    className="
                    font-semibold 
                  text-[#0d0d0d] 
                 w-full mb-4 text-base "
                  >
                    الاسم الاخير
                  </label>
                  <input
                    id="lname"
                    type="text"
                    placeholder=" الاسم لاخير"
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
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
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
              <div className="pl-4 mt-3 w-full">
                <label
                  htmlFor="
                    Specialization"
                  className="
                    font-semibold 
                  text-[#0d0d0d] 
                 w-full mb-4 text-base "
                >
                  التخصص
                </label>
                <input
                  id="
                    Specialization"
                  type="text"
                  placeholder="  التخصص"
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
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
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
                  <p> password must be more than 8</p>
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
                <button
                  type="submit"
                  className="  w-full py-4 p-9 rounded-[100px] bg-[#533E89] border-[#004492] mt-3 mb-7 "
                >
                  <span
                    className="
            text-xs font-bold text-center text-[#feffff]"
                  >
                    انضمام
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="rounded-3xl border-r-2 border-solid  bg-[#f4f1ef] p-8 w-full lg:block sm:hidden">
          <img src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Therapist;
