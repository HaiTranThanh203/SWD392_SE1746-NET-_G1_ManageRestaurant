import { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/zeroTable.jpg";
import NavBarHostess from "../../component/staffComponent/NavBarHostess";
import ConfirmationModal from "./ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";

const ManagerCustomer = () => {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [customerToUpdate, setCustomerToUpdate] = useState(null);
    const [newCustomer, setNewCustomer] = useState({
        customerName: "",
        customerPhone: "",
        address: "",
        despoint: "",
    });

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        axios.get("http://localhost:8080/api/customers")
            .then(response => {
                const data = response.data.map(customer => ({
                    ...customer,
                    customerName: customer.name,
                    customerPhone: customer.phoneNumber,
                    despoint: customer.point
                }));
                setCustomerList(data);
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
                toast.error("Failed to fetch customers");
            });
    };

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

    const openUpdateModal = (customer) => {
        setCustomerToUpdate(customer);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateCustomer = async (updatedCustomer) => {
        const customerToUpdate = {
            name: updatedCustomer.customerName,
            phoneNumber: updatedCustomer.customerPhone,
            address: updatedCustomer.address,
        };

        try {
            await axios.put(`http://localhost:8080/api/customers/${updatedCustomer.id}`, customerToUpdate);

            setCustomerList(customerList.map((customer) =>
                customer.id === updatedCustomer.id ? updatedCustomer : customer
            ));fetchCustomers();
            closeUpdateModal();
            toast.success("Customer updated successfully!");
        } catch (error) {
            console.error("Error updating customer:", error);
            toast.error("Failed to update customer.");
        }
    };


    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setCustomerToUpdate(null);
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };
    const handleAddCustomer = async () => {
        const newCustomerData = {
            ...newCustomer,
            id: customerList.length ? Math.max(...customerList.map(c => c.id)) + 1 : 1,
        };

        const customerToCreate = {
            name: newCustomer.customerName,
            phoneNumber: newCustomer.customerPhone,
            address: newCustomer.address,
        };

        try {
            await axios.post("http://localhost:8080/api/customers", customerToCreate);
            setCustomerList([...customerList, newCustomerData]);
            closeAddModal();
            toast.success("Customer added successfully!");
        } catch (error) {
            console.error("Error adding customer:", error);
            toast.error("Failed to add customer.");
        }
    };


    const closeAddModal = () => {
        setIsAddModalOpen(false);
        setNewCustomer({
            customerName: "",
            customerPhone: "",
            address: "",
            despoint: ""
        });
    };

    const filteredCustomers = customerList.filter(
        customer =>
            customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.customerPhone.includes(searchTerm)
    );

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
                {/* Sidebar Navigation */}
                <div className="bg-primary px-[25px] h-screen">
                    <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                        <img src={LOGO} alt="Logo" className="w-10 h-10 rounded-full mr-2" />
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
                        <p className="text-[10px] font-extrabold text-white/[0.4] pl-4">Function</p>
                        <div
                            className="flex items-center gap-[10px] py-[15px] pl-4 cursor-pointer transition hover:bg-secondary"
                            onClick={() => navigate("/hostess/bookingTable")}
                        >
                            <MdTableBar className="text-white" />
                            <p className="text-white text-[14px]">Book a Table</p>
                        </div>
                        <div
                            className="flex items-center gap-[10px] py-[15px] pl-4 cursor-pointer transition hover:bg-secondary"
                            onClick={() => navigate("/hostess/ManagerCustomer")}
                        >
                            <MdTableBar className="text-white" />
                            <p className="text-white text-[14px]">Manage Customers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basis-[88%] border overflow-scroll h-[100vh]">
                <NavBarHostess />
                <div className="min-w-[40%] bg-secondary p-4 shadow min-h-[86vh] mt-2">
                    <h2 className="text-lg font-bold text-white mb-4 text-center">Customer Management</h2>
                    <div className="flex justify-between mb-4">
                        <button
                            onClick={openAddModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Add New Customer
                        </button>
                        <input
                            type="text"
                            placeholder="Search by name or phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 rounded border"
                        />
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Customer Name</th>
                                <th scope="col" className="px-6 py-3">Phone Number</th>
                                <th scope="col" className="px-6 py-3">Despoint</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {customer.customerName}
                                    </th>
                                    <td className="px-6 py-4">{customer.customerPhone}</td>
                                    <td className="px-6 py-4">{customer.despoint || "1"}</td>
                                    <td className="px-6 py-4">{customer.address || "N/A"}</td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button onClick={() => openUpdateModal(customer)} className="px-2 py-1 bg-yellow-500 text-white rounded">Update</button>
                                       
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">Update Customer</h2>
                        <div>Customer Name</div>
                        <input
                            className="border p-2 w-full mb-2"
                            value={customerToUpdate.customerName || ""}
                            onChange={(e) => setCustomerToUpdate({...customerToUpdate, customerName: e.target.value})}
                            placeholder="Customer Name"
                        />
                        <div>Customer PhoneNumber</div>
                        <input
                            className="border p-2 w-full mb-2"
                            value={customerToUpdate.customerPhone || ""}
                            onChange={(e) => setCustomerToUpdate({...customerToUpdate, customerPhone: e.target.value})}
                            placeholder="Customer Phone"
                        />
                        <div>Customer Address</div>
                        <input
                            className="border p-2 w-full mb-2"
                            value={customerToUpdate.address || ""}
                            onChange={(e) => setCustomerToUpdate({...customerToUpdate, address: e.target.value})}
                            placeholder="Customer Address"
                        />

                        <button onClick={() => handleUpdateCustomer(customerToUpdate)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Save
                        </button>
                        <button onClick={closeUpdateModal}
                                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded ml-2">Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Add Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">Add New Customer</h2>
                        <input
                            className="border p-2 w-full mb-2"
                            value={newCustomer.customerName}
                            onChange={(e) => setNewCustomer({...newCustomer, customerName: e.target.value})}
                            placeholder="Customer Name"
                        />
                        <input

                            className="border p-2 w-full mb-2"
                            value={newCustomer.customerPhone}
                            onChange={(e) => setNewCustomer({...newCustomer, customerPhone: e.target.value})}
                            placeholder="Customer Phone"
                        />
                        <input

                            className="border p-2 w-full mb-2"
                            value={newCustomer.address}
                            onChange={(e) => setNewCustomer({...newCustomer, address: e.target.value})}
                            placeholder="Customer Address"
                        />
                        <button onClick={handleAddCustomer}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add
                        </button>
                        <button onClick={closeAddModal}
                                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded ml-2">Cancel
                        </button>
                    </div>
                </div>
            )}

            <ConfirmationModal
                isOpen={isModalOpen}
                onConfirm={handleDeleteCustomer}
                onCancel={closeDeleteModal}
            />
        </div>
    );
};

export default ManagerCustomer;
