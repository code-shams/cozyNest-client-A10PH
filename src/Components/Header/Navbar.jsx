import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    return (
        <nav className="bg-white pri-font flex items-center justify-between max-w-[1515px] w-11/12 mx-auto px-4 py-6 rounded-b-3xl shadow-lg">
            <div className="flex justify-between flex-row-reverse gap-2 items-center w-full lg:w-auto">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 scale-120"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content border bg-lime-50 border-teal-50 rounded-box z-10 mt-2 w-52 p-2 shadow -right-5"
                    >
                        <li>
                            <Link
                                to="/"
                                className="text-black font-medium text-base"
                            >
                                Home
                            </Link>
                            <div className="absolute right-0">
                                {user ? (
                                    <img
                                        className="rounded-full w-9 h-9"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/add-room"
                                className="text-black font-medium text-base"
                            >
                                Add a Room
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/browse-rooms"
                                className="text-black font-medium text-base"
                            >
                                Browse Rooms
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-rooms"
                                className="text-black font-medium text-base"
                            >
                                My Rooms
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <button
                                    onClick={() => logoutUser()}
                                    className="cursor-pointer transition duration-300 bg-black py-2 px-4 rounded-xs text-white font-medium items-center gap-2 flex"
                                >
                                    <FaSignOutAlt></FaSignOutAlt>
                                    Sign Out
                                </button>
                            </li>
                        ) : (
                            <div className="grid gap-2">
                                <li>
                                    <Link
                                        to="/auth/sign-in"
                                        className="cursor-pointer transition duration-300 bg-black py-2 px-4 rounded-xs text-white font-medium items-center gap-2 flex"
                                    >
                                        <FaSignInAlt></FaSignInAlt>
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/auth/sign-up"
                                        className="cursor-pointer transition duration-300 bg-black py-2 px-4 rounded-xs text-white font-medium items-center gap-2 flex"
                                    >
                                        <GiArchiveRegister></GiArchiveRegister>
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
                {/* Logo & Brand */}
                <Link to="/" className="flex gap-2 items-center">
                    <div className="text-2xl sm:text-3xl font-extrabold">
                        <span className="text">Cozy</span>
                        <span className="text-rose-500">N</span>
                        <span className="text">est</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex gap-4 lg:gap-6 text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:opacity-80 hover:text-emerald-700 transition duration-300 text-base lg:text-lg"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/add-room"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:opacity-80 hover:text-emerald-700 transition duration-300  text-base lg:text-lg"
                    }
                >
                    Add a Room
                </NavLink>
                <NavLink
                    to="/browse-rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:opacity-80 hover:text-emerald-700 transition duration-300  text-base lg:text-lg"
                    }
                >
                    Browse Rooms
                </NavLink>
                <NavLink
                    to="/my-rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:opacity-80 hover:text-emerald-700 transition duration-300  text-base lg:text-lg"
                    }
                >
                    My Rooms
                </NavLink>
            </div>

            {/* Authentication */}
            <div className="text-lg space-x-4">
                {user ? (
                    <div className="group relative">
                        <img
                            className="rounded-full cursor-pointer w-16 hidden lg:block"
                            src={user.photoURL}
                            alt=""
                        />
                        <div className="z-10 bg-lime-50 absolute w-64 -right-4 top-20 p-5 rounded-xl border border-teal-50 shadow space-y-3 opacity-0 -translate-y-96 group-hover:translate-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="font-extrabold pri-font text-xl w-full text-right">
                                {user.displayName}
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => logoutUser()}
                                    className="cursor-pointer transition duration-300 bg-black py-2 px-4 rounded-xs text-white font-medium items-center gap-2 flex"
                                >
                                    <FaSignOutAlt></FaSignOutAlt>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="md:mr-1 space-x-5">
                        <NavLink
                            to="/auth/sign-in"
                            className="relative hidden lg:inline-block px-2 py-1 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black transition duration-300  group-hover:bg-black"></span>
                            <span className="relative text-black transition duration-300 group-hover:text-white">
                                Sign In
                            </span>
                        </NavLink>

                        <NavLink
                            to="/auth/sign-up"
                            className="relative hidden lg:inline-block px-2 py-1 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black transition duration-300  group-hover:bg-black"></span>
                            <span className="relative text-black transition duration-300 group-hover:text-white">
                                Sign Up
                            </span>
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
