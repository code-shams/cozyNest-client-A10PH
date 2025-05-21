import React from "react";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

import { FaUserCircle, FaHome } from "react-icons/fa";

const FeaturedPost = ({ posts }) => {
    return (
        <>
            <div className="rounded-lg p-2 md:p-5 pt-0 mt-10 shadow-xl group">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 hover:opacity-100 overflow-hidden">
                    Featured Posts
                </h1>
                {/* <div className="w-1/3 mx-auto bg-rose-500 pt-[2px]"></div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 relative">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="card shadow-lg bg-white border border-teal-50 sec-font hover:bg-slate-100 transition-all duration-200 overflow-hidden"
                        >
                            <span className="bg-rose-200 badge rounded-t-sm rounded-none font-bold absolute right-0 border-none text-black">
                                {post.rentAmount}$
                            </span>
                            <figure className="">
                                <img
                                    src={post.photo}
                                    alt={post.title}
                                    className="rounded-xl rounded-b-none w-full sm:h-52"
                                />
                            </figure>
                            <div className="space-y-2 p-3 items-center">
                                <h2 className="text-base font-bold flex items-center gap-1">
                                    <FaHome></FaHome>
                                    {post.title}
                                </h2>
                                <span className="flex items-center gap-1">
                                    <FaUserCircle></FaUserCircle>
                                    {post.userName}
                                </span>
                                <div className="flex justify-between">
                                    <span className="flex items-center gap-1">
                                        <FaLocationDot />
                                        {post.location}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <Link
                                        to={`/post-details/${post._id}`}
                                        className="btn btn-sm sm:btn-md btn-outline hover:bg-black hover:text-white hover:scale-110 rounded-full border-stone-500 transition-all duration-300"
                                    >
                                        See more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedPost;
