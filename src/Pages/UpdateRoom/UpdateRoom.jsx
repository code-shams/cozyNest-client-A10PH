import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaChevronDown } from "react-icons/fa";

const UpdateRoom = () => {
    const handleEditPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        console.log(formObj);
    };
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto my-10 sec-font">
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 shadow-lg group hover:shadow-xl transition-all duration-500 border border-lime-100">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 group-hover:opacity-100 overflow-hidden">
                    Edit Post
                </h1>

                {/* Form  */}

                <div>
                    <form
                        onSubmit={handleEditPost}
                        className="pt-2 md:pt-5 pb-0"
                    >
                        {/* Username and email */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 md:mb-6">
                            <input
                                type="text"
                                name="name"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-gray-50 px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                readOnly
                                // value={user.displayName}
                            />
                            <input
                                type="text"
                                name="email"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-gray-50 px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                readOnly
                                // value{user.email}
                            />
                        </div>
                        {/* title and location */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <input
                                type="text"
                                name="title"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                name="location"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Location"
                            />
                        </div>
                        {/* rent and room type */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6">
                            <input
                                type="text"
                                name="rentAmount"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Rent"
                            />
                            <input
                                type="text"
                                name="roomType"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Room type"
                            />
                        </div>
                        {/* preferences and contact */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6">
                            <input
                                type="text"
                                name="preferences"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Preferences"
                            />
                            <input
                                type="text"
                                name="contactInfo"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Contact"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6 relative">
                            <select
                                type="text"
                                name="availability"
                                defaultValue="Select Availability :"
                                className="cursor-pointer appearance-none mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                            >
                                <option value="Select Availability :" disabled>
                                    Select Availability :
                                </option>
                                <option value="Available">Available</option>
                                <option value="Booked">Booked</option>
                            </select>
                            <span className="absolute right-134 top-6">
                                <FaChevronDown className="size-4 z-10"></FaChevronDown>
                            </span>
                            <input
                                type="text"
                                name="photo"
                                className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                placeholder="Photo Url (Optional)"
                            />
                        </div>
                        <div>
                            <textarea
                                name="details"
                                cols="30"
                                rows="10"
                                placeholder={"Details"}
                                className="border-2 border-slate-300 h-40 w-full resize-none rounded-md p-5 font-semibold text-gray-500 focus:outline-black"
                            ></textarea>
                        </div>
                        <div className="text-center ">
                            <button
                                type="submit"
                                className="btn btn-md w-full sm:w-auto px-12 md:text-lg bg-black text-white hover:scale-110 rounded-full transition-all duration-300"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateRoom;
