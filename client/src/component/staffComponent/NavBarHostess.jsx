import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from 'react-redux';
import WAITERAVATAR from "../../assets/waiterAvatar.png";

const NavBarHostess = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [userStorage, setUserStorage] = useState();

    useEffect(() => {}, []);

    const showProfile = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="">
            <div className="flex items-center justify-between h-[70px] border-b-2 px-[25px]">
                <div className="flex items-center rounded-[5px]"></div>
                <div className="flex items-center gap-[20px]">
                    <div
                        className="flex items-center gap-[15px] relative"
                        onClick={showProfile}
                    >
                        <div className="flex flex-col justify-center text-center">
                            <span className="font-semibold text-sm uppercase">
                                hostess
                            </span>
                        </div>
                        <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40">
                            <img
                                src={WAITERAVATAR}
                                alt=""
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>

                        {open && (
                            <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                                <p
                                    className="cursor-pointer hover:text-[blue] font-semibold"
                                    onClick={() => navigate("/hostess/map")}
                                >
                                    Map{" "}
                                </p>
                                <p
                                    className="cursor-pointer hover:text-[blue] font-semibold"
                                    onClick={() =>
                                        navigate("/hostess/bookingTable")
                                    }
                                >
                                    Order
                                </p>
                                <p
                                    className="cursor-pointer hover:text-[blue] font-semibold"
                                    onClick={() => handleLogout()}
                                >
                                    Logout
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBarHostess;
