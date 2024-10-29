import React, { useState, useEffect } from "react";
import * as Yup from "yup";

const BookingModal = ({ isOpen, onClose, initialData, onSubmit, mode }) => {
    const [formData, setFormData] = useState({
        id: null,
        bookedDate: "",
        customerName: "",
        customerPhone: "",
        numbersOfCustomer: 1,
        status: "CONFIRM",
        tableRestaurants: [],
        time: "",
    });

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        bookedDate: Yup.date().required("Date is required"),
        time: Yup.string().required("Time is required"),
        customerName: Yup.string().required("Customer name is required"),
        customerPhone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]+$/, "Phone number must be numeric"),
        numbersOfCustomer: Yup.number()
            .min(1, "At least one customer is required")
            .required("Number of customers is required"),
        tableRestaurants: Yup.array().min(1, "At least one table is required"),
    });

    useEffect(() => {
        if (mode === "edit" && initialData) {
            setFormData(initialData);
        } else {
            resetForm();
        }
    }, [initialData, mode]);

    const resetForm = () => {
        setFormData({
            id: null,
            bookedDate: "",
            customerName: "",
            customerPhone: "",
            numbersOfCustomer: 1,
            status: "CONFIRM",
            tableRestaurants: [],
            time: "",
        });
        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleClose = () => {
        setErrors({});
        onClose();
    };
    const handleSubmit = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            if (mode === "edit") {
                onSubmit({ ...formData, id: initialData.id });
            } else {
                onSubmit(formData);
            }
            onClose();
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            console.log("bookedDate:", validationErrors);
        }
    };

    return (
        isOpen && (
            <div
                className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
                aria-modal="true"
                role="dialog"
                aria-labelledby="modal-title"
            >
                <div className="relative w-full max-w-3xl bg-white rounded-lg shadow">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute top-3 right-2.5 text-red-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                        aria-label="Close modal"
                    >
                        ✖
                    </button>
                    <div className="w-full flex justify-center items-center mb-4 border-b-2 pb-2 pt-4 bg-slate-200 rounded-t-lg">
                        <h2 id="modal-title" className="font-bold text-lg">
                            {mode === "edit" ? "Edit Booking" : "Add Booking"}
                        </h2>
                    </div>
                    <div className="flex-row">
                        <div className="flex justify-center px-4 pb-10">
                            <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                                <div>
                                    <label
                                        htmlFor="bookedDate"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="bookedDate"
                                        name="bookedDate"
                                        value={formData.bookedDate}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.bookedDate
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        required
                                    />
                                    {errors.bookedDate && (
                                        <span className="text-red-500 text-sm">
                                            {errors.bookedDate}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="time"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.time
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        required
                                    />
                                    {errors.time && (
                                        <span className="text-red-500 text-sm">
                                            {errors.time}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="numbersOfCustomer"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Number of Customers
                                    </label>
                                    <input
                                        type="number"
                                        id="numbersOfCustomer"
                                        name="numbersOfCustomer"
                                        value={formData.numbersOfCustomer}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.numbersOfCustomer
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        min="1"
                                        required
                                    />
                                    {errors.numbersOfCustomer && (
                                        <span className="text-red-500 text-sm">
                                            {errors.numbersOfCustomer}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerPhone"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="customerPhone"
                                        name="customerPhone"
                                        value={formData.customerPhone}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.customerPhone
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        required
                                    />
                                    {errors.customerPhone && (
                                        <span className="text-red-500 text-sm">
                                            {errors.customerPhone}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="customerName"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Customer Name
                                    </label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.customerName
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        required
                                    />
                                    {errors.customerName && (
                                        <span className="text-red-500 text-sm">
                                            {errors.customerName}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="tableRestaurants"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Table(s)
                                    </label>
                                    <input
                                        type="text"
                                        id="tableRestaurants"
                                        name="tableRestaurants"
                                        value={formData.tableRestaurants
                                            .map((table) => table.name)
                                            .join(", ")}
                                        onChange={handleChange}
                                        className={`block w-full p-2 border ${
                                            errors.tableRestaurants
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-lg`}
                                        required
                                    />
                                    {errors.tableRestaurants && (
                                        <span className="text-red-500 text-sm">
                                            {errors.tableRestaurants}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="note"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Note
                                    </label>
                                    <textarea
                                        id="note"
                                        name="note"
                                        value={formData.note}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-lg"
                                        rows="3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="border-t-2 flex justify-center py-2 items-center bg-blue-400 cursor-pointer rounded-b-md"
                            onClick={handleSubmit}
                        >
                            <p className="text-white font-medium uppercase">
                                Confirm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default BookingModal;
