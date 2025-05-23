import React from "react";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

import { FaUserCircle, FaHome } from "react-icons/fa";
import PostCard from "./PostCard";

const FeaturedPost = ({ posts }) => {
    return (
        <>
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 my-10 shadow-md group overflow-clip">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 hover:opacity-100 overflow-hidden">
                    Featured Posts
                </h1>
                <div className="overflow-x-auto mt-5 md:mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden md:table-cell">Room</th>
                                <th>Posted by</th>
                                <th>Title</th>
                                <th className="hidden md:table-cell">
                                    Location
                                </th>
                                <th className="hidden md:table-cell">
                                    Availability
                                </th>
                                <th className="hidden lg:table-cell">
                                    Preferences
                                </th>
                                <th className="hidden md:table-cell">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <PostCard
                                    key={post._id}
                                    post={post}
                                    index={index}
                                ></PostCard>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FeaturedPost;
