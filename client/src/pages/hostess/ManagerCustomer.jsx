import { useState } from "react";
import { MdLocationOn, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/zeroTable.jpg";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";
import ConfirmationModal from "./ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";

const initialCustomers = [
    {
        id: 1,
        customerName: "Nguyễn Văn A",
        customerPhone: "0123456789",
        bookedDate: "2024-10-30",
        time: "18:00",
        numbersOfCustomer: 4,
        status: "CONFIRM",
        tableRestaurants: [{ name: "Table 1" }, { name: "Table 2" }],
        despoint: "Example Despoint",
        address: "123 Example Street",
    },
    {
        id: 2,
        customerName: "Trần Thị B",
        customerPhone: "0987654321",
        bookedDate: "2024-10-31",
        time: "19:00",
        numbersOfCustomer: 2,
        status: "CANCEL",
        tableRestaurants: [{ name: "Table 3" }],
        despoint: "Example Despoint 2",
        address: "456 Another Street",
    },
];

const ManagerCustomer = () => {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState(initialCustomers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);

    const openDeleteModal = (customer) => {
        setCustomerToDelete(customer);
        setIsModalOpen(true);
    };

    const handleDeleteCustomer = () => {
        if (customerToDelete) {
            setCustomerList(
                customerList.filter(
                    (customer) => customer.id !== customerToDelete.id
                )
            );
        }
        closeDeleteModal();
        toast.success("Delete success!");
    };

    const closeDeleteModal = () => {
        setIsModalOpen(false);
        setCustomerToDelete(null);
    };

    return (
        <div className="flex">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
            />
            <div className="basis-[12%] h-[100vh]">
                <div className="bg-primary px-[25px] h-screen">
                    <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                        <img
                            src={LOGO}
                            alt="Logo"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <h1 className="text-white text-[20px] font-extrabold cursor-pointer">
                            Restaurant
                        </h1>
                    </div>
                    <div className="pt-[15px]">
                        <div
                            className="flex items-center gap-[10px] py-[15px] pl-4 cursor-pointer transition hover:bg-secondary"
                            onClick={() => navigate("/hostess/map")}
                        >
                            <MdLocationOn className="text-white" />
                            <p className="text-white text-[14px]">Map</p>
                        </div>
                        <p className="text-[10px] font-extrabold text-white/[0.4] pl-4">
                            Function
                        </p>
                        <div
                            className="flex items-center gap-[10px] py-[15px] pl-4 cursor-pointer transition hover:bg-secondary"
                            onClick={() => navigate("/hostess/bookingTable")}
                        >
                            <MdTableBar className="text-white" />
                            <p className="text-white text-[14px]">
                                Book a Table
                            </p>
                        </div>
                        <div
                            className="flex items-center gap-[10px] py-[15px] pl-4 cursor-pointer transition hover:bg-secondary"
                            onClick={() => navigate("/hostess/ManagerCustomer")}
                        >
                            <MdTableBar className="text-white" />
                            <p className="text-white text-[14px]">
                                Manage Customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />
                <div className="min-w-[40%] bg-secondary p-4 shadow min-h-[86vh] mt-2">
                    <h2 className="text-lg font-bold text-white mb-4 text-center">
                        Customer Management
                    </h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Customer Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Table
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Despoint
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerList.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {customer.customerName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {customer.customerPhone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {customer.tableRestaurants
                                                .map((table) => table.name)
                                                .join(", ")}
                                        </td>
                                        <td className="px-6 py-4">
                                            {customer.despoint || "N/A"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {customer.address || "N/A"}
                                        </td>
                                        <td
                                            className={`py-2 px-4 ${
                                                customer.status === "CONFIRM"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {customer.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() =>
                                                    openDeleteModal(customer)
                                                }
                                                className="px-2 py-1 bg-red-500 text-white rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onConfirm={handleDeleteCustomer}
                onCancel={closeDeleteModal}
            />
        </div>
    );
};

export default ManagerCustomer;
