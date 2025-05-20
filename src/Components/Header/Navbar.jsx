import React, { use, useEffect, useState } from "react";
import navLogo from "../../assets/logo2.png";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    const [showMenu, setShowMenu] = useState("false");
    useEffect(() => {
        console.log(showMenu);
    }, [showMenu]);

    return (
        <nav className="bg-white pri-font flex items-center justify-between max-w-[1515px] w-11/12 mx-auto px-4 py-6 rounded-b-3xl shadow-lg">
            <div className="flex justify-between flex-row-reverse gap-2 items-center w-full lg:w-auto">
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className=""
                    >
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a>Homepage</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
                {/* Logo & Brand */}
                <Link to="/" className="flex gap-2 items-center">
                    {/* <img className="w-10 drop-shadow-md" src={navLogo} alt="" /> */}
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
                        <button onClick={() => setShowMenu(!showMenu)}>
                            <img
                                className="rounded-full cursor-pointer w-16"
                                src={user.photoURL}
                                alt=""
                            />
                        </button>
                        <div className="z-10 bg-lime-50 absolute w-60 -right-4 top-20 p-5 rounded-xl border border-teal-50 shadow scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 origin-top-right">
                            <p className="text-right font-bold pri-font">
                                {user.displayName}
                            </p>
                            <div className="text-right">
                                <button
                                    onClick={logoutUser}
                                    className="btn btn-accent"
                                >
                                    <span className="pri-font font-extrabold">
                                        Sign Out
                                    </span>
                                </button>
                            </div>
                        </div>
                        {showMenu ? (
                            <div className="z-10 bg-lime-50 absolute w-60 h-20 -right-4 top-20 p-5 rounded-xl border border-teal-50 shadow md:hidden"></div>
                        ) : (
                            ""
                        )}
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
