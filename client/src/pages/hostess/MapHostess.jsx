import { useEffect, useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import LOGO from "../../assets/VIET.png";
import Table from "../../component/managerComponent/RestaunrantMap/Table";
import { MdTableBar, MdLocationOn } from "react-icons/md";
import { IoMdRefreshCircle } from "react-icons/io";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";

function MapHostess() {
    // Mock data
    const areaList = [{ name: "Khu A" }, { name: "Khu B" }, { name: "Khu C" }];

    const board = [
        { name: "Bàn 1", booked: false, orderCurrent: null },
        { name: "Bàn 2", booked: true, orderCurrent: "Order 123" },
        { name: "Bàn 3", booked: false, orderCurrent: null },
        { name: "Bàn 4", booked: true, orderCurrent: "Order 456" },
        { name: "Bàn 5", booked: false, orderCurrent: null },
        { name: "Bàn 6", booked: true, orderCurrent: "Order 789" },
    ];

    const listSchedule = [
        {
            customerName: "Nguyễn Văn A",
            customerPhone: "0123456789",
            time: "12:00",
            numbersOfCustomer: 4,
            intendTime: "13:00",
            deposit: 100000,
            note: "Yêu cầu chỗ ngồi gần cửa sổ",
            status: "PENDING",
        },
        {
            customerName: "Trần Thị B",
            customerPhone: "0987654321",
            time: "12:30",
            numbersOfCustomer: 2,
            intendTime: "14:00",
            deposit: 50000,
            note: "",
            status: "ACCEPT",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentTable, setCurrentTable] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const size = 5; // Số lượng đặt bàn mỗi trang
    const totalSchedules = listSchedule.length;

    const navigate = useNavigate();

    const handleOpen = (table) => {
        setCurrentTable(table);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
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
                        {areaList.map((area, index) => (
                            <div
                                className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                                // onClick={() => handleChangeArea(area)}
                                key={index}
                            >
                                <div className="flex items-center gap-[10px]">
                                    <MdLocationOn color="white" />{" "}
                                    <p className="text-[14px] leading-[20px] font-normal text-white">
                                        {area.name}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />
                <div className="min-w-[40]x bg-secondary p-10 shadow min-h-[86vh] mt-2 relative">
                    <div className="w-full flex flex-wrap justify-between">
                        {board.map((table, index) => (
                            <div
                                className={`flex-row p-8 border-2 border-transparent ${
                                    table.booked ? "bg-lgreen" : "bg-white"
                                } justify-center w-[12%] mb-2 rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-all duration-300`}
                                key={index}
                                onClick={() => handleOpen(table)}
                            >
                                <div className="text-center">
                                    <b>{table.name}</b>
                                </div>
                                <div className="text-center mt-2">
                                    <hr className="w-1/2 mx-auto border-gray-400" />
                                    <span
                                        className={`block mt-2 text-sm font-semibold ${
                                            table.orderCurrent === null
                                                ? "text-gray-500"
                                                : "text-green"
                                        }`}
                                    >
                                        {table.orderCurrent === null
                                            ? "Bàn trống"
                                            : "Có khách"}
                                    </span>
                                    <span
                                        className={`block mt-2 text-sm font-semibold text-blue-600`}
                                    >
                                        {table.booked ? "Đã được đặt" : ""}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isOpen && (
                    <div
                        id="popup-delete"
                        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 animate-fadeIn"
                    >
                        <div className="relative w-full max-w-5xl bg-white rounded-lg shadow dark:bg-gray-700 animate-slideIn">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-3 end-2.5 text-red-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="w-full flex justify-center items-center mb-4 border-b-2 pb-2 pt-4 bg-slate-200 rounded-t-lg">
                                <h2 className="font-bold text-lg">
                                    Danh sách các đơn đặt bàn -{" "}
                                    {currentTable.name}
                                </h2>
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Khách hàng
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Số điện thoại
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Thời gian
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Số khách
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Ý định
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Đặt cọc
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Ghi chú
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Trạng thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listSchedule.map((schedule, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-6 py-4">
                                                    {schedule.customerName}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.customerPhone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.time}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.numbersOfCustomer}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.intendTime}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.deposit}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.note || "-"}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {schedule.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MapHostess;
