import React from "react";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

import { FaUserCircle, FaHome } from "react-icons/fa";
import PostCard from "./PostCard";

const FeaturedPost = ({ posts }) => {
    return (
        <>
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 mt-10 shadow-xl group">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 hover:opacity-100 overflow-hidden">
                    Featured Posts
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 relative">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            post={post}
                            index={index}
                        ></PostCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedPost;
