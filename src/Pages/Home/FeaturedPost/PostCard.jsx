import React from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import pic from "../../../assets/OpenPeeps/groupPic.png";
import pic2 from "../../../assets/OpenPeeps/groupPic2.png";
const PostCard = ({ post, index }) => {
    let { title, photo, rentAmount, location, userName, _id } = post;
    if (!photo) {
        if (index % 2) {
            photo = pic;
        } else {
            photo = pic2;
        }
    }

    return (
        <div className="card shadow-lg bg-white border border-teal-50 sec-font hover:bg-slate-100 transition-all duration-200 overflow-hidden">
            <span className="bg-rose-200 badge rounded-t-sm rounded-none font-bold absolute right-0 border-none text-black">
                {rentAmount}$
            </span>
            <figure className="">
                <img
                    src={photo}
                    alt={title}
                    className="rounded-xl rounded-b-none w-full sm:h-48"
                />
            </figure>
            <div className="space-y-2 p-3 items-center">
                <h2 className="text-base font-bold flex items-center gap-1">
                    <FaHome></FaHome>
                    {title}
                </h2>
                <span className="flex items-center gap-1">
                    <FaUserCircle></FaUserCircle>
                    {userName}
                </span>
                <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                        <FaLocationDot />
                        {location}
                    </span>
                </div>
                <div className="text-center">
                    <Link
                        to={`/post-details/${_id}`}
                        className="btn btn-sm sm:btn-md btn-outline hover:bg-black hover:text-white hover:scale-110 rounded-full border-stone-500 transition-all duration-300"
                    >
                        See more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
