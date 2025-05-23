import React from "react";
import { useLoaderData } from "react-router";
import Rooms from "./Rooms";

const BrowseRoom = () => {
    const { data } = useLoaderData();
    return (
        <div className="max-w-[1515px] mx-auto w-11/12">
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 mt-10 shadow-xl group">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 hover:opacity-100 overflow-hidden">
                    Posts
                </h1>

                {/* table */}
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
                                <th className="hidden lg:table-cell">
                                    Availability
                                </th>
                                <th className="hidden lg:table-cell">Rent</th>
                                <th className="hidden md:table-cell">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((roomData) => (
                                <Rooms
                                    key={roomData._id}
                                    roomData={roomData}
                                ></Rooms>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrowseRoom;
