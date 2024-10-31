import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import LOGO from "../../assets/VIET.png";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";
import {MdLocationOn, MdTableBar} from "react-icons/md";




function MapHostess() {
    const [tables, setTables] = useState([]);
    const [listSchedule, setListSchedule] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentTable, setCurrentTable] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/tables/all")
            .then(response => {
                setTables(response.data);
            })
            .catch(error => {
                console.error("Error fetching table data:", error);
            });

        axios.get("http://localhost:8080/api/schedules/all")
            .then(response => {
                setListSchedule(response.data);
            })
            .catch(error => {
                console.error("Error fetching schedule data:", error);
            });
    }, []);

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
                            alt="Logo"
                            className="w-10 inline-block items-center rounded-full mr-2"
                        />
                        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
                            Restaurant
                        </h1>
                    </div>

                    <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                            <div
                                className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                                onClick={() => navigate("/hostess/map")}
                            >
                                <div className="flex items-center gap-[10px]">
                                    <MdLocationOn color="white" />{" "}
                                    <p className="text-[14px] leading-[20px] font-normal text-white">
                                        Map
                                    </p>
                                </div>
                            </div>
                        </div>
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
                        <div
                            className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer transition ease-in-out duration-300 rounded pl-4 hover:bg-secondary"
                            onClick={() => navigate("/hostess/ManagerCustomer")}
                        >
                            <div className="flex items-center gap-[10px]">
                                <MdTableBar color="white" />{" "}
                                <p className="text-[14px] leading-[20px] font-normal text-white">
                                    Manager Customer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />s
                <div className="min-w-[40]x bg-secondary p-10 shadow min-h-[86vh] mt-2 relative">
                    <div className="grid grid-cols-4 gap-4">
                        {tables.map((table, index) => (
                            <div
                                className={`p-4 border-2 ${
                                    table.status ? "bg-white" : "bg-white"
                                } rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-all duration-300`}
                                key={index}
                                onClick={() => handleOpen(table)}
                            >
                                <div className="text-center font-bold text-lg">
                                    {table.name || `Table ${table.id}`}
                                </div>
                                <div className="text-center text-gray-600">
                                    <p className="mt-2">Chairs: {table.numberChair}</p>
                                    <p className="mt-2">Description: {table.description || "No description"}</p>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isOpen && currentTable && (
                    <div
                        id="popup-delete"
                        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 animate-fadeIn"
                    >
                        <div className="relative w-full max-w-5xl bg-white rounded-lg shadow dark:bg-gray-700 animate-slideIn">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-3 right-2.5 text-red-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="w-full flex justify-center items-center mb-4 border-b-2 pb-2 pt-4 bg-slate-200 rounded-t-lg">
                                <h2 className="font-bold text-lg">
                                    Table Reservations - {currentTable.name || `Table ${currentTable.id}`}
                                </h2>
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">Customer</th>
                                        <th className="px-6 py-3">Phone Number</th>
                                        <th className="px-6 py-3">Time</th>
                                        <th className="px-6 py-3">Number of Guests</th>
                                        <th className="px-6 py-3">Intended Time</th>
                                        <th className="px-6 py-3">Note</th>
                                        <th className="px-6 py-3">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listSchedule.map((schedule, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4">{schedule.customerName}</td>
                                            <td className="px-6 py-4">{schedule.customerPhone}</td>
                                            <td className="px-6 py-4">{schedule.time}</td>
                                            <td className="px-6 py-4">{schedule.numbersOfCustomer}</td>
                                            <td className="px-6 py-4">{schedule.intendTime}</td>
                                            <td className="px-6 py-4">{schedule.note}</td>
                                            <td className="px-6 py-4">{schedule.status}</td>
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
