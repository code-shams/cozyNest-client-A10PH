import React from "react";
import { FaSearch, FaUserFriends, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const HowItWorks = () => {
    return (
        <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 space-y-5">
            <h1 className="text-2xl lg:text-3xl pri-font font-bold drop-shadow-lg text-center sm:w-max pri-font mx-auto">
                How It Works
            </h1>

            <div className="mt-2 grid md:grid-cols-3 gap-0 md:gap-8">
                <div className="text-black bg-[var(--color-banner1)] border-secondary/50 rounded-4xl shadow hover:shadow-lg hover:scale-[1.02] overflow-hidden h-full flex flex-col items-center transition-all group duration-300 scale-95 group hover:scale-105 p-5 lg:p-6">
                    <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-white transition-all duration-300">
                        <FaSearch className="size-10 md:size-14 group-hover:text-accent transition-all duration-300 group-hover:text-accent-focus" />
                    </div>
                    <h1 className="pri-font text-base md:text-xl font-bold transition-all duration-300 mb-3 text-center">
                        Search & Filter
                    </h1>
                    <p className="w-full transition-all duration-300  sec-font text-sm text-center font-medium leading-relaxed">
                        Browse through verified roommate profiles and available
                        rooms. Use our smart filters to find matches based on
                        location, budget, lifestyle preferences, and
                        compatibility factors.
                    </p>
                </div>

                <div className="text-black bg-[var(--color-banner1)] border-secondary/50 rounded-4xl shadow hover:shadow-lg hover:scale-[1.02] overflow-hidden h-full flex flex-col items-center transition-all group duration-300 scale-95 group hover:scale-105 p-5 lg:p-6">
                    <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-white transition-all duration-300">
                        <FaUserFriends className="size-10 md:size-14 group-hover:text-accent transition-all duration-300 group-hover:text-accent-focus" />
                    </div>
                    <h1 className="pri-font text-base md:text-xl font-bold transition-all duration-300 mb-3 text-center">
                        Connect & Chat
                    </h1>
                    <p className="w-full transition-all duration-300  sec-font text-sm text-center font-medium leading-relaxed">
                        Reach out to potential roommates through our secure
                        messaging system. Share interests, discuss living
                        arrangements, and get to know each other before making
                        any commitments.
                    </p>
                </div>

                <div className="text-black bg-[var(--color-banner1)] border-secondary/50 rounded-4xl shadow hover:shadow-lg hover:scale-[1.02] overflow-hidden h-full flex flex-col items-center transition-all group duration-300 scale-95 group hover:scale-105 p-5 lg:p-6">
                    <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-white transition-all duration-300">
                        <FaHome className="size-10 md:size-14 group-hover:text-accent transition-all duration-300 group-hover:text-primary-focus" />
                    </div>
                    <h1 className="pri-font text-base md:text-xl font-bold transition-all duration-300 mb-3 text-center">
                        Move In Together
                    </h1>
                    <p className="w-full sec-font text-sm text-center font-medium transition-all duration-300  leading-relaxed">
                        Found your perfect match? Schedule meetups, view
                        properties together, and start your new chapter as
                        roommates. Build lasting friendships while sharing your
                        ideal living space.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <Link
                    to={`/browse-rooms`}
                    className="relative inline-flex items-center justify-center p-2 md:px-3 md:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-2xl w-max shadow-md group/button"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-rose-500 group-hover/button:translate-x-0 ease">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover/button:translate-x-full ease text-xs">
                        Start Finding Roommates
                    </span>
                    <span className="relative invisible text-xs">
                        Start Finding Roommates
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default HowItWorks;
