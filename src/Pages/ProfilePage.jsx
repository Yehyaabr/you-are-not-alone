// ProfilePage.js
// import React, { useEffect, useState } from "react";

import Header from "@/Sections/Header/Header";
import SecondHeader from "@/Sections/Secondheader/SecondHeader";
import Modal from "@/components/Modal";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookies";

// import axios from "axios";
// import Input from "../components/Input"; // Import the Input component

const ProfilePage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassowrd] = useState();
  const [base64Image, setBase64Image] = useState();
  const [img, setImg] = useState();
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [token, setToke] = useState(Cookies.getItem("token"));
  async function Submit(e) {
    e.preventDefault();
    axios
      .put(
        ``,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        // window.location.assign("/Profile");
        setStatus("true");
      })
      .catch((err) => {
        setStatus("false");
      });
  }
  useEffect(() => {
    axios
      .put("http://127.0.0.1:8000/api/user/update", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(...res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBase64Image(base64);
  };

  const convertBase64 = (file) => {
    return new Promise(async (resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleCloseAccount = () => {
    axios.delete(`${Cookies.get("userId")}`).then((res) => {
      Cookies.remove("token");
      Cookies.remove("userId");
      window.location.assign("/SignUp");
    });
  };
  const handleLogout = (e) => {
    axios.post("").then((res) => {
      Cookies.remove("token");
      window.location.assign("/SignIn");
    });
  };
  return (
    <Fragment>
      x
      <div className="mb-7">
        <Header />
        <SecondHeader />
      </div>
      <div className="w-full p-0 h-[clac(100vh-48px)] float-right font-display">
        <div className="  py-0 px-[132px] h-full   mx-0 ">
          <div className="py-[3vh] border-solid border-[0.5] border-[#d8dbdf] flex gap-32 h-[calc(100vh-36px)]">
            {/* <div className="pr-0 pl-0 flex flex-col justify-between ">
              <div className="flex flex-col gap-6 mb-6">
                 <div className="   flex gap-4 items-center">
                <img src=" " className="w-[66px] h-[66px] rounded-[330px]" />
                <div className="nameEmail">
                  <p className=" text-xl font-semibold text-right text-[#354052] m-0">
                    sfas
                  </p>
                  <p className=" text-xl font-semibold text-right text-[#354052] m-0">
                    sfas
                  </p>
                </div>
              </div>
              </div>
            </div>  */}
            <div className="flex flex-col w-full ">
              <form className="w-full max-w-[unset] " onSubmit={Submit}>
                <h1 className=" text-3xl font-bold text-right text-[#004492] mb-8  font-display">
                  {" "}
                  اعدادات الحساب
                </h1>

                <div className=" flex gap-4 flex-wrap items-center mb-7">
                  <img
                    src={user?.avatar}
                    className="    w-20 h-20 object-contain rounded-[330px] bg-[#eae8b0] "
                  />
                  <div className=" wrap; flex gap-4 flex-wrap">
                    <label
                      className="text-xl font-semibold text-center text-[#35405e] hover:bg-stone-300  h-12 py-3 px-8 rounded-[100px]  border-solid border-[2px] border-[#d5dde7] justify-center  items-center bg-[#fff]"
                      htmlFor="fileUpload"
                    >
                      <input type="file" className="hidden  " id="fileUpload" />
                      تحميل صورة جديدة
                    </label>
                    <button className="    h-12 py-3 px-8  rounded-[100px] bg-[#f6f8fa] flex justify-center items-center">
                      <span className="text-xl font-semibold text-center text-[#35405e]">
                        {" "}
                        حذف
                      </span>
                    </button>
                  </div>
                </div>
                {/* edit profile */}
                <div className="flex flex-col gap-4 ">
                  <div className="   w-full flex flex-col justify-start items-start py-5 px-9 rounded-[20px] bg-[#f6f8fa] relative">
                    <p className=" text-xl font-semibold text-right text-[#35405e] mb-1">
                      اسم المستخدم
                    </p>
                    <p className=" text-xl font-semibold text-right text-[#35405e] m-0">
                      {" "}
                      {user?.name}
                    </p>
                    <a
                      className=" text-xl font-semibold text-right 
                  text-[#004492] absolute top-7 left-7 underline "
                      onClick={() => setShowModal(true)}
                    >
                      {" "}
                      تغيير
                    </a>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start py-5 px-9 rounded-[20px] bg-[#f6f8fa] relative">
                    <p className=" text-xl font-semibold text-right text-[#35405e] mb-1">
                      عنوان البريد الالكتروني
                    </p>
                    <p className=" text-xl font-semibold text-right text-[#35405e] m-0">
                      {" "}
                      {user?.email}
                    </p>
                    <a
                      className=" text-xl font-semibold text-right text-[#004492] absolute top-7 left-7 underline "
                      onClick={() => setShowModal2(true)}
                    >
                      {" "}
                      تغيير
                    </a>
                  </div>
                  <div className="  w-full  flex flex-col justify-start items-start py-5 px-9 rounded-[20px] bg-[#f6f8fa] relative">
                    <p className=" text-xl font-semibold text-right text-[#35405e] mb-1">
                      كلمة المرور
                    </p>
                    <p className=" text-xl font-semibold text-right text-[#35405e] m-0">
                      {" "}
                      {user?.phone}
                    </p>
                    <a
                      className=" text-xl font-semibold text-right text-[#004492] absolute top-7 left-7 underline "
                      onClick={() => setShowModal3(true)}
                    >
                      {" "}
                      تغيير
                    </a>
                  </div>
                </div>
                {/* edit profile */}

                <Modal
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                >
                  <div>
                    <div className=" p-8 border-0 bg-[#f6f8fa] rounded-t-[20px] rounded-b-none border-b border-solid border-[#e5e5e5] ">
                      <h4 className=" text-2xl font-semibold text-right text-[#141b34]">
                        تغيير اسم المستخدم
                      </h4>
                    </div>
                    <div className="pt-4 px-8 pb-[82px] bg-[#f6f8fa] relative">
                      <div className="m-0 ">
                        <label
                          htmlFor="editname"
                          className=" text-xl text-right text-[#35405e] mb-2"
                        >
                          اسم المستخدم
                        </label>
                        <div
                          className=" #fff; py-4 px-5 rounded-2xl 
          border-2 border-solid border-[#d5dde7] 
          bg-[#fff]"
                        >
                          <input
                            id="name"
                            type="text"
                            placeholder="اسم المسخدم الجديد"
                            value={name}
                            onChange={() => setName(e.target.value)}
                            className="
                 text-xl font-semibold text-right w-full text-[#35405e]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="  flex gap-4 justify-end py-4 px-8 border-t border-[#e5e5e5] bg-white">
                      <button
                        className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center bg-[#fff] text-[#004492] "
                        onClick={() => onClose()}
                      >
                        الغاء
                      </button>
                      <button
                        type="submit"
                        className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center text-[#fff] bg-[#004492] "
                      >
                        تغير اسم المسخدم
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  isVisible={showModal2}
                  onClose={() => setShowModal2(false)}
                >
                  <div>
                    <div className=" p-8 border-0 bg-[#f6f8fa] rounded-t-[20px] rounded-b-none border-b border-solid border-[#e5e5e5] ">
                      <h4 className=" text-2xl font-semibold text-right text-[#141b34]">
                        تغيير عنوان البريد الالكتروني
                      </h4>
                    </div>
                    <div className="pt-4 px-8 pb-[82px] bg-[#f6f8fa] relative">
                      <div className="m-0 ">
                        <label
                          htmlFor="editname"
                          className=" text-xl text-right text-[#35405e] mb-2"
                        >
                          عنوان البريد الالكتروني
                        </label>
                        <div
                          className=" #fff; py-4 px-5 rounded-2xl 
          border-2 border-solid border-[#d5dde7] 
          bg-[#fff]"
                        >
                          <input
                            id="name"
                            type="email"
                            placeholder="  عنوان البريد الالكتروني"
                            value={email}
                            onChange={() => setEmail(e.target.value)}
                            className="
                 text-xl font-semibold text-right w-full text-[#35405e]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="  flex gap-4 justify-end py-4 px-8 border-t border-[#e5e5e5] bg-white">
                      <button className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center bg-[#fff] text-[#004492] ">
                        الغاء
                      </button>
                      <button
                        type="submit"
                        className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center text-[#fff] bg-[#004492] "
                      >
                        تغيير عنوان البريد الالكتروني
                      </button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  isVisible={showModal3}
                  onClose={() => setShowModal3(false)}
                >
                  <div>
                    <div className=" p-8 border-0 bg-[#f6f8fa] rounded-t-[20px] rounded-b-none border-b border-solid border-[#e5e5e5] ">
                      <h4 className=" text-2xl font-semibold text-right text-[#141b34]">
                        تغيير كلمة المرور
                      </h4>
                    </div>
                    <div className="pt-4 px-8 pb-[82px] bg-[#f6f8fa] relative">
                      <div className="m-0 ">
                        <label
                          htmlFor="editname"
                          className=" text-xl text-right text-[#35405e] mb-2"
                        >
                          كلمة المرور الجديدة
                        </label>
                        <div
                          className=" #fff; py-4 px-5 rounded-2xl 
          border-2 border-solid border-[#d5dde7] 
          bg-[#fff]"
                        >
                          <input
                            id="name"
                            type="text"
                            placeholder="  كلمة المرور الجديدة"
                            value={password}
                            onChange={() => setPassowrd(e.target.value)}
                            className="
                 text-xl font-semibold text-right w-full text-[#35405e]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="  flex gap-4 justify-end py-4 px-8 border-t border-[#e5e5e5] bg-white">
                      <button
                        className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center bg-[#fff] text-[#004492] "
                        onClick={() => onClose()}
                      >
                        الغاء
                      </button>
                      <button
                        type="submit"
                        className=" flex flex-row  justify-center items-center py-3 px-8 rounded-[100px] text-[17px]  font-semibold text-center text-[#fff] bg-[#004492] "
                      >
                        تغيير كلمة المرور
                      </button>
                    </div>
                  </div>
                </Modal>
              </form>
              <div className="    flex gap-6 mt-12 justify-start">
                <div className="float-right ">
                  <button
                    className="rounded-full flex justify-center items-center gap-1 py-3 px-8 bg-[#ffebeb]"
                    onClick={handleCloseAccount}
                  >
                    <span className=" text-xl font-semibold text-center text-[#c00404]">
                      حذف حساب
                    </span>
                  </button>
                </div>
                <button
                  className="rounded-full flex justify-center items-center gap-1 py-3 px-8 bg-[#f6f8fa]"
                  onClick={handleLogout}
                >
                  <span className=" text-xl font-semibold text-center text-[#35405e]">
                    تسجيل خروج
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProfilePage;
