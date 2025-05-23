import React from "react";
import pic from "../../assets/OpenPeeps/groupPic.png";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

const Rooms = ({ roomData }) => {
    const { title, _id, name, location, rentAmount, availability } = roomData;
    let photo;
    if (!roomData.photo) {
        photo = pic;
    } else {
        photo = roomData.photo;
    }
    return (
        <tr className="pri-font font-bold">
            <td className="hidden md:table-cell">
                <img className="rounded-sm w-40" src={photo} alt={title} />
            </td>
            <td className="">
                <img
                    className="md:hidden rounded-sm w-40"
                    src={photo}
                    alt={title}
                />
                <span className="text-xs sm:text-base">{name}</span>
            </td>
            <td className="flex flex-col gap-2 md:table-cell">
                <span className="text-xs sm:text-sm">{title}</span>
                <Link
                    to={`/post-details/${_id}`}
                    className="md:hidden mx-auto relative inline-flex items-center justify-center py-1 px-2 md:px-3 md:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-2xl w-max shadow-md group/button"
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
                        See more
                    </span>
                    <span className="relative invisible text-xs">See more</span>
                </Link>
            </td>
            <td className="hidden md:table-cell">{location}</td>
            <td className="hidden lg:table-cell">{availability}</td>
            <td className="hidden lg:table-cell">{rentAmount}$</td>
            <td className="hidden md:table-cell">
                <Link
                    to={`/post-details/${_id}`}
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
                        See more
                    </span>
                    <span className="relative invisible text-xs">See more</span>
                </Link>
            </td>
        </tr>
    );
};

export default Rooms;
