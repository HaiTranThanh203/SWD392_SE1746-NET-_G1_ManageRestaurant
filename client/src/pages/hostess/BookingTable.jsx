import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LOGO from "../../assets/zeroTable.jpg";
import { MdTableBar } from "react-icons/md";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { formatVND } from "../../utills/utils/format";
import validator from "validator";

function BookingTable() {
    const [isOpenBooking, setIsOpenBooking] = useState(false);
    const [statusTime, setStatusTime] = useState("all");
    const [selectDay, setSelectDay] = useState("");
    const navigate = useNavigate();
    const areaList = [
        { name: "Khu A" },
        { name: "Khu B" },
        { name: "Khu C" },
        { name: "Khu D" },
    ];
    const handleChangeArea = (area) => {
        console.log("Chọn khu vực:", area.name);
    };
    const [listBookingTables, setListBookingTables] = useState([
        {
            id: 1,
            customerName: "Nguyễn Văn A",
            customerPhone: "0123456789",
            bookedDate: "2024-10-30",
            time: "18:00",
            numbersOfCustomer: 4,
            deposit: 500000,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Bàn 1" }, { name: "Bàn 2" }],
        },
        {
            id: 2,
            customerName: "Trần Thị B",
            customerPhone: "0987654321",
            bookedDate: "2024-10-30",
            time: "19:00",
            numbersOfCustomer: 2,
            deposit: 300000,
            status: "CANCEL",
            tableRestaurants: [{ name: "Bàn 3" }],
        },
        {
            id: 3,
            customerName: "Lê Văn C",
            customerPhone: "0912345678",
            bookedDate: "2024-10-31",
            time: "20:00",
            numbersOfCustomer: 6,
            deposit: 700000,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Bàn 4" }],
        },
        {
            id: 4,
            customerName: "Phạm Thị D",
            customerPhone: "0901234567",
            bookedDate: "2024-10-31",
            time: "18:30",
            numbersOfCustomer: 3,
            deposit: 400000,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Bàn 5" }, { name: "Bàn 6" }],
        },
    ]);

    const handleOpenShowInfor = (table) => {
        console.log("Thông tin bàn:", table);
    };

    const handleOpenConfirmJoin = (id) => {
        console.log("Khách nhận bàn ID:", id);
    };

    const sliceDisplayTime = (time) => {
        return time;
    };
    const nearTables = [
        { id: 1, name: "Bàn 1", time: "18:00" },
        { id: 2, name: "Bàn 2", time: "18:30" },
    ];

    const lateTables = [
        { id: 3, name: "Bàn 3", time: "19:00" },
        { id: 4, name: "Bàn 4", time: "19:30" },
    ];

    const listDay = [
        { date: "2024-10-28", numbersSchedule: 5 },
        { date: "2024-10-29", numbersSchedule: 3 },
        { date: "2024-10-30", numbersSchedule: 8 },
        { date: "2024-10-31", numbersSchedule: 2 },
    ];

    const handleChangeStatusTime = (status) => {
        setStatusTime(status);
    };

    const handleChangeDay = (day) => {
        setSelectDay(day);
    };

    const handleChangeDayToDayInWeek = (date) => {
        const day = new Date(date).toLocaleDateString("vi-VN", {
            weekday: "long",
        });
        return day;
    };

    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh]">
                <div className="bg-primary px-[25px] h-screen relative">
                    <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3] ">
                        <img
                            src={LOGO}
                            alt=""
                            className="w-10 inline-block items-center rounded-full mr-2"
                        />
                        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
                            {" "}
                            VietKitchen
                        </h1>
                    </div>

                    <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
                            {" "}
                            Khu vực
                        </p>
                        {areaList?.map((area, index) => {
                            return (
                                <div
                                    className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                                    onClick={() => handleChangeArea(area)}
                                    key={index}
                                >
                                    <div className="flex items-center gap-[10px]">
                                        <MdLocationOn color="white" />{" "}
                                        <p className="text-[14px] leading-[20px] font-normal text-white">
                                            {area?.name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
                            Chức năng
                        </p>
                        <div
                            className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                            onClick={() => navigate("/hostess/bookingTable")}
                        >
                            <div className="flex items-center gap-[10px]">
                                <MdTableBar color="white" />{" "}
                                <p className="text-[14px] leading-[20px] font-normal text-white">
                                    Đặt bàn
                                </p>
                            </div>
                            {/* <FaChevronRight color='white' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />
                <div className="min-w-[40]x bg-secondary p-2 shadow min-h-[86vh] mt-2 flex justify-between">
                    <div className="w-[83%] rounded-md p-4 ">
                        <div className="flex justify-between flex-wrap">
                            {listBookingTables?.map((table, index) => {
                                return (
                                    <div
                                        className="bg-white w-[22%] rounded-md mx-1 mb-4 "
                                        key={index}
                                    >
                                        <div
                                            className={`w-full ${
                                                table?.status === "CANCEL"
                                                    ? " bg-red-400"
                                                    : "bg-gray-200"
                                            } px-2 py-3 rounded-t-md text-center`}
                                        >
                                            <span className="font-medium">
                                                {table?.customerName} -{" "}
                                                {table?.customerPhone}
                                            </span>
                                        </div>
                                        <div
                                            className="bg-white flex cursor-pointer"
                                            onClick={() =>
                                                handleOpenShowInfor(table)
                                            }
                                        >
                                            <div className="w-[30%] border-r-2 flex justify-center items-center flex-col">
                                                <span className="font-bold text-lg">
                                                    {
                                                        table
                                                            ?.tableRestaurants[0]
                                                            ?.name
                                                    }
                                                </span>
                                                <div>
                                                    <span className="font-medium ">
                                                        {table?.tableRestaurants
                                                            .length > 1 &&
                                                            `(+${
                                                                table
                                                                    ?.tableRestaurants
                                                                    .length - 1
                                                            })`}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-[70%]">
                                                <div className="flex items-center px-2 py-2 ">
                                                    <BsFillCalendarDateFill className="mr-1 " />
                                                    <span>
                                                        {table?.bookedDate}
                                                    </span>
                                                </div>
                                                <div className="flex">
                                                    <div className="w-[50%] px-2 py-2 flex items-center">
                                                        <GiAlarmClock className="mr-1 " />{" "}
                                                        <span>
                                                            {sliceDisplayTime(
                                                                table?.time
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="w-[50%] px-2 py-2 flex items-center">
                                                        <HiUsers className="mr-1" />{" "}
                                                        <span>
                                                            {
                                                                table?.numbersOfCustomer
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className=" px-2 py-2 flex items-center">
                                                    <RiMoneyDollarCircleFill />
                                                    <span className="ml-1">
                                                        {formatVND(
                                                            table?.deposit
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-200 flex rounded-b-md">
                                            <div className="w-[30%] flex justify-center items-center py-3 border-r-2 text-blue-600 font-semibold"></div>
                                            <div
                                                onClick={() =>
                                                    handleOpenConfirmJoin(
                                                        table?.id
                                                    )
                                                }
                                                className={`w-[70%] flex justify-center items-center py-3 text-blue-500 font-semibold cursor-pointer ${
                                                    table?.status === "CANCEL"
                                                        ? "opacity-0"
                                                        : ""
                                                }`}
                                            >
                                                <span>Khách nhận bàn</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="w-[22%] mx-1"></div>
                            <div className="w-[22%] mx-1"></div>
                            <div className="w-[22%] mx-1"></div>
                            <div className="w-[22%] mx-1"></div>
                        </div>
                    </div>
                    <div className="w-[16%] flex-row">
                        <div
                            onClick={() => setIsOpenBooking(true)}
                            className="px-6 py-4 bg-[#65B741] flex justify-center items-center rounded-md text-white font-semibold shadow-md mb-2 cursor-pointer"
                        >
                            <MdOutlineAddCircleOutline className="mr-2 size-4" />
                            <span>Tạo đơn đặt bàn</span>
                        </div>
                        <hr className="border-black border-1 mb-2" />
                        <div
                            onClick={() => handleChangeStatusTime("all")}
                            className={`px-6 py-4 ${
                                statusTime === "all"
                                    ? "bg-[#088e6a]"
                                    : "bg-[#50B498]"
                            } flex justify-center items-center rounded-md text-white font-semibold shadow-md mb-2 cursor-pointer`}
                        >
                            <span>Tất cả đơn đặt bàn</span>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div
                                onClick={() => handleChangeStatusTime("near")}
                                className={`w-[48%] px-3 py-4 ${
                                    statusTime === "near"
                                        ? "bg-gray-400 text-white"
                                        : "bg-white text-black"
                                } flex justify-center items-center rounded-md font-semibold shadow-md cursor-pointer relative`}
                            >
                                <span>Sắp đến</span>
                                <span className="absolute right-1 top-1 text-xs text-red-700">
                                    {nearTables?.length}
                                </span>
                            </div>
                            <div
                                onClick={() => handleChangeStatusTime("late")}
                                className={`w-[48%] px-3 py-4 ${
                                    statusTime === "late"
                                        ? "bg-gray-400 text-white"
                                        : "bg-white text-black"
                                } flex justify-center items-center rounded-md font-semibold shadow-md cursor-pointer relative`}
                            >
                                <span>Quá giờ</span>
                                <span className="absolute right-1 top-1 text-xs text-red-700">
                                    {lateTables?.length}
                                </span>
                            </div>
                        </div>
                        <hr className="border-black border-1 mb-2" />
                        {listDay?.map((day, index) => (
                            <div
                                key={index}
                                onClick={() => handleChangeDay(day?.date)}
                                className={`px-6 py-2 text-xs ${
                                    selectDay === day?.date &&
                                    statusTime === "week"
                                        ? "bg-gray-400 text-white"
                                        : "bg-white text-black"
                                } relative flex justify-center items-center rounded-md font-semibold shadow-md mb-2 cursor-pointer duration-300 transition-all `}
                            >
                                <span>
                                    {index === 0
                                        ? "Hôm nay"
                                        : index === 1
                                        ? "Ngày mai"
                                        : handleChangeDayToDayInWeek(
                                              day?.date
                                          )}{" "}
                                    - {day?.date}
                                </span>
                                <span className="absolute right-1 top-1 text-xs text-red-700">
                                    {day?.numbersSchedule}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideIn {
                    from {
                        transform: translateY(-20%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }

                .animate-slideIn {
                    animation: slideIn 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
}

export default BookingTable;
