import LOGO from "../../../assets/zeroTable.jpg";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Features", path: "feature" },
        { link: "Platform", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];
    const handleLogin = () => {
        navigate("/login");
    };
    return (
        <>
            <nav className="bg-white md:px-14 p-4 w-full mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a
                            href="#"
                            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
                        >
                            <img
                                src={LOGO}
                                alt=""
                                className="w-10 inline-block items-center rounded-full"
                            />
                            <span className="text-[#5961F9]">
                                Group <span className="text-[#EE9AE5]">4</span>
                            </span>
                        </a>

                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) => (
                                <Link
                                    className="block hover:text-gray-300 cursor-pointer"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    key={link}
                                    to={path}
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="space-x-12 hidden md:flex items-center">
                        <button
                            className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 "
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:text-gray-300"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="w-6 h-6 text-primary" />
                            ) : (
                                <FaBars className="w-6 h-6 text-primary" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`space-y-4 px-4 text-xl pt-24 pb-5 bg-secondary ${
                    isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
                }`}
            >
                {navItems.map(({ link, path }) => (
                    <Link
                        className="block hover:text-gray-300 cursor-pointer text-white"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        key={link}
                        to={path}
                        onClick={toggleMenu}
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavBar;
