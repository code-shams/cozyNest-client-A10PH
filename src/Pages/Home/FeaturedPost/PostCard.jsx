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
        <div className="pri-font font-medium bg-[var(--card-bg)] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
            {/* Image */}
            <div className="relative">
                <img
                    className="w-full mx-auto h-44 object-cover"
                    src={photo}
                    alt={title}
                />
                <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">
                    {availability}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col gap-3">
                {/* User Info and Rent */}
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-2">
                        <FaUserCircle className="text-lg" />
                        <span className="text-base font-semibold">{name}</span>
                    </div>

                    {rentAmount && (
                        <div className="text-right">
                            <span className="text-sm font-bold">
                                ${rentAmount}
                            </span>
                            <span className="text-xs  ml-1">/month</span>
                        </div>
                    )}
                </div>

                <h3 className="text-sm  leading-snug line-clamp-2">{title}</h3>
                {/* Location */}
                <div className="flex items-center gap-2  text-sm">
                    <FaLocationDot className="text-rose-500 text-base" />
                    <span>{location}</span>
                </div>

                {/* Preferences - only on larger screens */}
                <div className="hidden lg:flex items-start gap-2 text-sm ">
                    <FaHome className="mt-0.5 text-base" />
                    <span>{preferences}</span>
                </div>
                {/* Action Button */}
                <div className="pt-2 flex mt-auto">
                    <Link
                        to={`/post-details/${_id}`}
                        className="relative inline-flex items-center justify-center px-2 py-1    overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-500 rounded-xl shadow-sm group/button text-sm mx-auto"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-rose-500 group-hover/button:translate-x-0 ease">
                            <FaChevronRight className="w-4 h-4" />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover/button:translate-x-full ease">
                            See more
                        </span>
                        <span className="relative invisible">See more</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
