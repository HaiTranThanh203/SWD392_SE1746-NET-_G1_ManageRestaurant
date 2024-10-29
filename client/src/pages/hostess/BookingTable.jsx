import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LOGO from "../../assets/zeroTable.jpg";
import { MdTableBar } from "react-icons/md";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import BookingModal from "./AddOrUpdateBooking";
import { FaTrashAlt } from "react-icons/fa";

function BookingTable() {
    const [isOpenBooking, setIsOpenBooking] = useState(false);
    const [isAddBooking, setIsAddBooking] = useState(false);
    const [isOpenShowInformation, setIsOpenShowInformation] = useState(false);
    const [statusTime, setStatusTime] = useState("all");
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [listBookingTables, setListBookingTables] = useState([
        {
            id: 1,
            customerName: "Nguyễn Văn A",
            customerPhone: "0123456789",
            bookedDate: "2024-10-30",
            time: "18:00",
            numbersOfCustomer: 4,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Table 1" }, { name: "Table 2" }],
        },
        {
            id: 2,
            customerName: "Trần Thị B",
            customerPhone: "0987654321",
            bookedDate: "2024-10-30",
            time: "19:00",
            numbersOfCustomer: 2,
            status: "CANCEL",
            tableRestaurants: [{ name: "Table 3" }],
        },
        {
            id: 3,
            customerName: "Lê Văn C",
            customerPhone: "0912345678",
            bookedDate: "2024-10-31",
            time: "20:00",
            numbersOfCustomer: 6,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Table 4" }],
        },
        {
            id: 4,
            customerName: "Phạm Thị D",
            customerPhone: "0901234567",
            bookedDate: "2024-10-31",
            time: "18:30",
            numbersOfCustomer: 3,
            status: "CONFIRM",
            tableRestaurants: [{ name: "Table 5" }, { name: "Table 6" }],
        },
    ]);

    const handleOpenShowInfor = (table) => {
        setIsOpenShowInformation(true);
        console.log("Thông tin bàn:", table);
    };

    const handleOpenAddBooking = () => {
        setIsAddBooking(true);
        setIsOpenBooking(true);
        console.log("Add");
        setInitialData(null);
    };

    const handleOpenEditBooking = (table) => {
        setIsAddBooking(false);
        setIsOpenBooking(true);
        setInitialData(table);
    };

    const handleBookingSubmit = (data) => {
        if (isAddBooking) {
            setListBookingTables((prevList) => [...prevList, data]);
        } else {
            setListBookingTables((prevList) =>
                prevList.map((item) => (item.id === data.id ? data : item))
            );
        }
    };

    const handleOpenConfirmJoin = (id) => {
        console.log("id", id);
    };

    const sliceDisplayTime = (time) => {
        return time;
    };

    const handleChangeStatusTime = (status) => {
        setStatusTime(status);
    };

    const handleDeleteBooking = (id) => {
        setListBookingTables((prevList) =>
            prevList.filter((item) => item.id !== id)
        );
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
                            Restaurant
                        </h1>
                    </div>

                    <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
                            Function
                        </p>
                        <div
                            className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                            onClick={() => navigate("/hostess/bookingTable")}
                        >
                            <div className="flex items-center gap-[10px]">
                                <MdTableBar color="white" />{" "}
                                <p className="text-[14px] leading-[20px] font-normal text-white">
                                    Book a table
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />
                <div className="min-w-[40]x bg-secondary p-2 shadow min-h-[86vh] mt-2 flex justify-between">
                    <div className="w-[83%] rounded-md p-4 ">
                        <div className="flex justify-between flex-wrap">
                            {listBookingTables?.map((table, index) => (
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
                                        <div
                                            className="w-[30%] border-r-2 flex justify-center items-center flex-col"
                                            onClick={() =>
                                                handleOpenEditBooking(table)
                                            }
                                        >
                                            <span className="font-bold text-lg">
                                                {
                                                    table?.tableRestaurants[0]
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
                                                <span>{table?.bookedDate}</span>
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
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 flex rounded-b-md">
                                        <div className="w-[30%] flex justify-center items-center py-3 border-r-2 text-blue-600 font-semibold">
                                            <FaTrashAlt
                                                onClick={() =>
                                                    handleDeleteBooking(
                                                        table?.id
                                                    )
                                                }
                                                className="cursor-pointer text-red-500"
                                            />
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleOpenConfirmJoin(table?.id)
                                            }
                                            className={`w-[70%] flex justify-center items-center py-3 text-blue-500 font-semibold cursor-pointer ${
                                                table?.status === "CANCEL"
                                                    ? "opacity-0"
                                                    : ""
                                            }`}
                                        >
                                            <span>Guest receive table</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[18%] flex-row">
                        <div
                            onClick={handleOpenAddBooking}
                            className="px-6 py-4 bg-[#65B741] flex justify-center items-center rounded-md text-white font-semibold shadow-md mb-2 cursor-pointer"
                        >
                            <div className="w-96 ml-3">
                                Create a table booking
                            </div>
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
                            <span>All table reservations</span>
                        </div>
                        <hr className="border-black border-1 mb-2" />
                    </div>
                </div>
            </div>
            <BookingModal
                isOpen={isOpenBooking}
                onClose={() => setIsOpenBooking(false)}
                mode={isAddBooking ? "add" : "edit"}
                onSubmit={handleBookingSubmit}
                initialData={initialData}
            />
        </div>
    );
}

export default BookingTable;
