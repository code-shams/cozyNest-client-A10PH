import React from "react";
import { FaChevronRight, FaHome, FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import pic from "../../../assets/OpenPeeps/groupPic.png";
import pic2 from "../../../assets/OpenPeeps/groupPic2.png";
const PostCard = ({ post, index }) => {
    const {
        title,
        _id,
        name,
        location,
        rentAmount,
        availability,
        preferences,
    } = post;
    let photo;
    if (!post.photo) {
        if (index % 2) {
            photo = pic;
        } else {
            photo = pic2;
        }
    } else {
        photo = post.photo;
    }

    return (
        <tr className="pri-font font-bold">
            <td className="hidden md:table-cell">
                <img className="rounded-sm w-70" src={photo} alt={title} />
            </td>
            <td className="space-y-2">
                <img
                    className="rounded-sm w-70 md:hidden"
                    src={photo}
                    alt={title}
                />
                <span>{name}</span>
            </td>
            <td className="flex flex-col gap-2 items-center justify-center md:table-cell text-xs">
                {title}
                <span className="md:hidden text-xs">Location: {location}</span>
                <Link
                    to={`/post-details/${_id}`}
                    className="md:hidden mx-auto relative inline-flex items-center justify-center p-2 md:px-3 md:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-2xl w-max shadow-md group/button"
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
            <td className="hidden md:table-cell">{availability}</td>
            <td className="hidden lg:table-cell">{preferences}</td>
            <td className="text-xs hidden md:table-cell">
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

export default PostCard;
