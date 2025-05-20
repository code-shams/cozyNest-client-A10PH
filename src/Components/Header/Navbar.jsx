import React from "react";
import navLogo from "../../assets/logo2.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const user = false;

    return (
        <nav className="pri-font flex items-center justify-between max-w-[1515px] w-11/12 mx-auto my-5 pb-3 border-b-3">
            {/* Logo & Brand */}
            <Link to="/" className="flex gap-2 items-center">
                {/* <img className="w-10 drop-shadow-md" src={navLogo} alt="" /> */}
                <div className="text-3xl font-extrabold">
                    <span className="text">Cozy</span>
                    <span className="text">N</span>
                    <span className="text">est</span>
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-6 text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1"
                            : " hover:opacity-80 transition duration-200"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/add-room"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1"
                            : " hover:opacity-80 transition duration-200"
                    }
                >
                    Add a Room
                </NavLink>
                <NavLink
                    to="/browse-rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1"
                            : " hover:opacity-80 transition duration-200"
                    }
                >
                    Browse Rooms
                </NavLink>
                <NavLink
                    to="/my-rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1"
                            : " hover:opacity-80 transition duration-200"
                    }
                >
                    My Rooms
                </NavLink>
            </div>

            {/* Authentication */}
            <div className="text-lg space-x-4">
                {user ? (
                    <NavLink
                        to="/auth/sign-out"
                        className="hover:opacity-80 transition text-[#FFA69E]"
                    >
                        Sign out
                    </NavLink>
                ) : (
                    <>
                        <NavLink
                            to="/auth/sign-in"
                            className="relative inline-block px-2 py-1 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black transition duration-300  group-hover:bg-black"></span>
                            <span className="relative text-black transition duration-300 group-hover:text-white">
                                Sign In
                            </span>
                        </NavLink>

                        <NavLink
                            to="/auth/sign-up"
                            className="relative inline-block px-2 py-1 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black transition duration-300  group-hover:bg-black"></span>
                            <span className="relative text-black transition duration-300 group-hover:text-white">
                                Sign Up
                            </span>
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
