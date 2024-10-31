import React from "react";
import LOGO from "../../assets/zeroTable.jpg";
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/hostess/map");
    };

    return (
        <div className="w-full h-screen flex flex-col md:flex-row items-start">
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-lg text-white font-extrabold my-4">
                        Restaurant
                    </h1>
                    <p className="text-xl text-white font-normal ml-2">
                        One platform, all sales channels <br />
                        Wherever you want to sell, VietKitchen will help you
                        grow revenue and expand without limits
                    </p>
                </div>
                <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/736x/17/a4/e8/17a4e8d1347f6bbaf2ff6333a9d1ce19.jpg"
                    alt=""
                />
            </div>

            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#f5f5f5] flex flex-col p-8 md:p-20 justify-between items-center">
                <h1 className="text-xl text-[#060606] font-semibold">
                    <img
                        src={LOGO}
                        alt=""
                        className="w-28 max-w-[500px] cursor-pointer rounded-full"
                    />
                </h1>

                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-2">Log In</h3>
                        <p className="text-base mb-2 text-blue-500">
                            Welcome! Log in as a system administrator / store
                            owner
                        </p>
                    </div>

                    <div className="flex w-full justify-around">
                        <div className="border-b-2 pb-1 cursor-pointer transition duration-500 ease-in-out border-blue-700">
                            <h3 className="font-semibold">Employee</h3>
                        </div>
                    </div>

                    <div className="w-full flex flex-col mt-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                            Forgot password?
                        </p>
                    </div>

                    <div className="w-full flex flex-col my-4">
                        <button
                            className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center"
                            onClick={handleNavigate}
                        >
                            Log In
                        </button>
                        <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center">
                            Register
                        </button>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal text-[#060606]">
                        Don’t have an account?{" "}
                        <span className="font-semibold underline underline-offset-2 cursor-pointer">
                            Register
                        </span>
                    </p>
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

export default Login;
