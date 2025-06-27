import React from "react";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

import { FaUserCircle, FaHome } from "react-icons/fa";
import PostCard from "./PostCard";

const FeaturedPost = ({ posts }) => {
    return (
        <>
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 my-10 md:my-15 group overflow-clip">
                <h1 className="text-2xl lg:text-3xl font-bold drop-shadow-lg  text-center sm:w-max pri-font mx-auto">
                    Featured Posts
                </h1>
                <div className="mt-5 md:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <PostCard
                            key={post._id}
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
