import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Pricing = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState([]);

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
                    Service Price List
                </h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-2">
                    Flexible service packages suitable for all restaurant sizes.
                </p>
            </div>

            <motion.div
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
            >
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
                    >
                        <h3 className="text-3xl font-bold text-center text-primary">
                            {pkg?.packName}
                        </h3>
                        <p
                            className={`mt-5 text-center text-black text-2xl font-bold ${
                                pkg?.pricePerMonth === 0
                                    ? "opacity-0"
                                    : "opacity-100"
                            }`}
                            style={{ textDecoration: "line-through" }}
                        >
                            {pkg?.pricePerMonth?.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}
                            <span className="text-base text-tartiary font-medium">
                                /Month
                            </span>
                        </p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {pkg?.pricePerYear?.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })}
                            <span className="text-base text-tartiary font-medium">
                                /Year
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4 flex flex-col justify-center">
                            {pkg?.permissions?.map((p, index) => (
                                <li className="flex gap-2 items-center justify-center font-medium">
                                    {p?.description}
                                </li>
                            ))}
                        </ul>

                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button
                                className="btnHome"
                                onClick={() => navigate("/signUp")}
                            >
                                Sign now
                            </button>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pricing;
