import Header from "@/Sections/Header/Header";
import SecondHeader from "@/Sections/Secondheader/SecondHeader";
import { Calendar } from "@/components/Calendar";

import ModalReservation from "@/components/ModalReservation";
import Seissonstherapist from "@/components/Seissonstherapist";
import axios from "axios";
import { format, setHours } from "date-fns";
import Cookies from "js-cookies";
import { Fragment, useEffect, useState } from "react";

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
			.then(res => {
				console.log(res);
				setData(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	console.log("hdsghsgs", data);
	const seissonstherapist = data && data.map(item => <Seissonstherapist item={item} />);

	return (
		<Fragment>
			<div className="mb-12">
				<Header />
				<SecondHeader />
			</div>
			<div className="float-right w-full font-display  p-0 text-right">
				<div className="px-[132px] pt-0 pb-[30px] mx-0 ">
					<div className="flex items-center justify-between  flex-wrap top-[139px]  sticky mb-[18px]  pt-8 mt-3 bg-white z-[1]">
						<h1 className="text-3xl text-right text-[#004492] m-0">جلساتك المحجوزة</h1>
						<div className="h-9 flex justify-between items-center text-center gap-1 p-1 rounded-full bg-[#f6f8fa]">
							{" "}
							<span className="flex flex-row justify-center items-center gap-[6px] py-1 px-[10px] rounded-[999px]shadow-md bg-[#fff] font-bold"> الجلسات القادمة </span>
							<span className="flex flex-row justify-center items-center gap-[6px] py-1 px-[10px] rounded-full shadow-md bg-[#fff] font-bold"> الجلسات المحجوزة</span>
						</div>
						<div className="float-right px-0">
							<a className=" bg-[#faccb9] max-w-[226px] flex  justify-center items-center gap-3 py-3 px-6 rounded-full" onClick={handleOpen}>
								<span className="text-xl font-semibold text-center text-[#491c14]">حجز جلسة جديدة</span>
							</a>
							<ModalReservation show={isOpen} onClose={handleClose}>
								<SidebarHeader setActivetap={setActivetap} handleClose={handleClose} />
								<div className="bg-white rounded-none flex-1 overflow-auto">
									{activetap === 0 ? (
										<div className="  bg-[#f6f8fa] p-0 overflow-y-scroll h-[740px]">
											<div className="28px 40px 0 35px; pt-[28px] pr-10 pb-0 pl-[35px] ">
												<div className="the-therapist  ">
													<span className=" text-xl font-semibold text-right text-[#35405e] font-display"> جميع المستشارين</span>
													<div className=" mx-0  ">{seissonstherapist}</div>
												</div>
											</div>
										</div>
									) : activetap === 1 ? (
										<ReservationTab />
									) : (
										<div>hello</div>
									)}
								</div>
								<SideBarFooter handleClose={handleClose} />
							</ModalReservation>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Sessions;

function SidebarHeader({ setActivetap, handleClose }) {
	return (
		<header className="p-6">
			<div className="flex justify-between">
				<h3 className="text-[20px] font-bold text-xl text-[#ca7e6d] m-0"> حجز جلسة جديدة</h3>
				<button onClick={handleClose}>X</button>
			</div>
			<div className="mt-5">
				<ul className="flex flex-row justify-start items-center gap-1 p-1 rounded-[16px] bg-[#f6f8fa] border-none">
					<li className="p-0 float-right relative block ">
						<button
							className="text-[#555] bg-[#fff] rounded-[12px] focus:border-none focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
							onClick={() => setActivetap(0)}>
							<span className="text-xl font-semibold text-right mr-0">المستشار</span>
							<br />
							<span className="h-5 text-xl font-semibold text-right">اختر المستشارالخاص بك</span>
						</button>
					</li>
					<li className="p-0 float-right relative block">
						<button
							className="text-[#555] bg-[#fff] rounded-[12px] focus:border-none focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
							onClick={() => setActivetap(1)}>
							<span className="  text-xl font-semibold text-right mr-0">وقت الجلسة</span>
							<br />
							<span className="h-5 text-xl font-semibold text-right">تاريخ ووقت الجلسة</span>
						</button>
					</li>
					<li className="p-0 float-right relative block ">
						<button
							className="text-[#555] bg-[#fff] rounded-[12px] focus:border-none focus:text-[#ca7e6d] focus:shadow-lg font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2"
							onClick={() => setActivetap(2)}>
							<span className="  text-xl font-semibold text-right mr-0">نوع الجلسة</span>
							<br />
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
}

function SideBarFooter({ handleClose }) {
	return (
		<footer className="flex flex-row justify-end items-center gap-5 py-6 px-10 border-solid border-[0.1px] border-[#d8dbdf] bg-[#fff] font-display">
			<button className="w-[132px] text-xl font-semibold text-center text-[#d67a69] bg-[#fff]" onClick={handleClose}>
				الغاء
			</button>
			<button className="w-[132px] flex flex-row justify-center items-center gap-2 py-4 px-6 text-xl font-semibold text-center text-[#fff] rounded-[300px] bg-[#d67a69]">
				التالي
			</button>
		</footer>
	);
}

function ReservationTab() {
	const [selected, setSelected] = useState(null);
	const handleHourSelect = hour => {
		setSelected(setHours(selected, hour));
	};

	return (
		<div className="pt-0 pr-[40px] pb-5 pl-[35px] h-full">
			<div className=" rounded-[20px] bg-[#fff] flex-col justify-center items-center mt-4">
				<div className="border-b border-solid border-[#f6f8fa] py-4 px-6">
					<p className="text-xl font-semibold text-right text-[#35405e] font-display w-[150px]">اختر تاريخ الجلسة</p>
					<Calendar selected={selected} mode="single" onSelect={setSelected} className="mx-auto w-fit" />
				</div>
				{selected !== null ? (
					<div>
						<div className="flex justify-between">
							<p className="text-xl font-semibold text-right text-[#35405e] font-display w-[150px]">حدد وقت الجلسة</p>
							<p>{format(selected, "MMMM y d hh:mm")}</p>
						</div>
						<ul className="grid grid-cols-2 gap-6 w-fit mx-auto p-6">
							{times.map(({ hour, label }) => (
								<li onClick={() => handleHourSelect(hour)} key={label}>
									<button>{label}</button>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	);
}

const times = [
	{ hour: 13, label: "01:00-02:00 مساءً" },
	{ hour: 14, label: "02:00-03:00 مساءً" },
	{ hour: 15, label: "03:00-04:00 مساءً" },
	{ hour: 16, label: "04:00-05:00 مساءً" },
	{ hour: 17, label: "05:00-06:00 مساءً" },
	{ hour: 18, label: "06:00-07:00 مساءً" },
	{ hour: 19, label: "07:00-08:00 مساءً" },
	{ hour: 20, label: "08:00-09:00 مساءً" },
];
