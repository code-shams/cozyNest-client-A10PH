import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import ThemeToggle from "../ThemeToggle";
import HamburgerMenuIcon from "./HamburgerMenuIcon";

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    return (
        <nav className="bg-base-200 pri-font flex items-center justify-between max-w-[1515px] w-11/12 mx-auto px-4 py-4 rounded-b-3xl shadow-lg border-b-7 border-base-300">
            <div className="flex justify-between flex-row-reverse gap-2 items-center w-full lg:w-auto">
                <div>
                    <div className="dropdown lg:hidden">
                        <HamburgerMenuIcon></HamburgerMenuIcon>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content border bg-lime-50 border-teal-50 rounded-box z-10 mt-2 w-52 p-2 shadow -right-5"
                        >
                            <li>
                                <ThemeToggle></ThemeToggle>
                            </li>
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
                                    to="/browse-rooms"
                                    className="text-black font-medium text-base"
                                >
                                    Browse Posts
                                </Link>
                            </li>
                            {user && (
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="text-black font-medium text-base"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            <li>
                                <Link
                                    to="/about"
                                    className="text-black font-medium text-base"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="text-black font-medium text-base"
                                >
                                    FAQ
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
                            : "hover:-80 hover:text-primary transition duration-300 text-base lg:text-lg"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/browse-rooms"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:-80 hover:text-primary transition duration-300  text-base lg:text-lg"
                    }
                >
                    Browse Posts
                </NavLink>
                {user && (
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "font-extrabold pb-1 text-base lg:text-lg"
                                : "hover:-80 hover:text-primary transition duration-300  text-base lg:text-lg"
                        }
                    >
                        Dashboard
                    </NavLink>
                )}
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:-80 hover:text-primary transition duration-300  text-base lg:text-lg"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                        isActive
                            ? "font-extrabold pb-1 text-base lg:text-lg"
                            : "hover:-80 hover:text-primary transition duration-300  text-base lg:text-lg"
                    }
                >
                    FAQ
                </NavLink>
            </div>
            {/* Authentication */}
            <div className="text-lg space-x-4 flex items-center">
                <div className="mr-5 hidden lg:block">
                    <ThemeToggle></ThemeToggle>
                </div>
                {user ? (
                    <div className="relative group">
                        <img
                            className="rounded-full cursor-pointer w-10 hidden lg:block"
                            src={user.photoURL}
                            alt=""
                        />
                        <div className="z-10 bg-lime-50 absolute w-64 -right-4 top-20 p-5 rounded-xl border border-teal-50 shadow space-y-3 -translate-y-96 group-hover:translate-0 group-hover:-100 transition-all duration-500">
                            <p className="font-extrabold pri-font text-xl w-full text-right text-black">
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
                            className="hidden lg:inline-flex font-bold rounded-2xl btn btn-sm md:btn-md btn-outline border-2 hover:bg-accent transition-all duration-300 hover:shadow hover:text-black hover:-translate-y-1"
                        >
                            Sign In
                        </NavLink>

                        <NavLink
                            to="/auth/sign-up"
                            className="hidden lg:inline-flex font-bold rounded-2xl btn btn-sm md:btn-md btn-outline border-2 hover:bg-accent transition-all duration-300 hover:shadow hover:text-black hover:-translate-y-1"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;