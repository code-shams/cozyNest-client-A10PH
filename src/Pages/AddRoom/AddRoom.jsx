import React, { use, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";
const serverURL = import.meta.env.VITE_SERVER_URL;
const AddRoom = () => {
    const [loading, setLoading] = useState(false);
    const { user } = use(AuthContext);
    const handleAddPost = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        formObj.name = user.displayName;
        formObj.email = user.email;
        formObj.likeCount = 0;
        for (const key in formObj) {
            if (key !== "photo" && key !== "likeCount") {
                if (!formObj[key]) {
                    toast.error(`${key} is empty! Please fill that out.`);
                    setLoading(false);
                    return;
                }
            }
        }
        if (form.availability.value === "Select Availability :") {
            toast.error(`Please Select Availability!`);
            setLoading(false);
            return;
        }
        fetch(`${serverURL}/post`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formObj),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                if (data.data.insertedId) {
                    Swal.fire({
                        text: "Successfully Added a Post",
                        icon: "success",
                        timer: 1500,
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        text: "Please try again!",
                        icon: "error",
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto my-10 sec-font">
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 shadow-lg group hover:shadow-xl transition-all duration-500  overflow-hidden">
                    <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-secondary rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500  overflow-hidden">
                        New Post
                    </h1>

                    {/* Form  */}

                    <div>
                        <form
                            onSubmit={handleAddPost}
                            className="pt-2 md:pt-5 pb-0"
                        >
                            {/* Username and email */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 md:mb-6">
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-gray-50 px-3 py-4 shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    readOnly
                                    value={user.displayName}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-gray-50 px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    readOnly
                                    value={user.email}
                                />
                            </div>
                            {/* title and location */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <input
                                    type="text"
                                    name="title"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Title"
                                />
                                <input
                                    type="text"
                                    name="location"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Location"
                                />
                            </div>
                            {/* rent and room type */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6">
                                <input
                                    type="text"
                                    name="rentAmount"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Rent"
                                />
                                <input
                                    type="text"
                                    name="roomType"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Room type"
                                />
                            </div>
                            {/* preferences and contact */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6">
                                <input
                                    type="text"
                                    name="preferences"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Preferences"
                                />
                                <input
                                    type="text"
                                    name="contactInfo"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    placeholder="Contact"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6 relative">
                                <div className="relative w-full sm:w-1/2">
                                    <select
                                        type="text"
                                        name="availability"
                                        defaultValue="Select Availability :"
                                        className="cursor-pointer appearance-none mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                                    >
                                        <option
                                            value="Select Availability :"
                                            disabled
                                        >
                                            Select Availability :
                                        </option>
                                        <option value="Available">
                                            Available
                                        </option>
                                        <option value="Booked">Booked</option>
                                    </select>
                                    <span className="absolute right-2 top-6 z-index">
                                        <FaChevronDown className="size-4"></FaChevronDown>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="photo"
                                    className="mt-1 block w-full sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm placeholder:font-semibold text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
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
                                    className="btn btn-md w-full sm:w-auto px-12 md:text-lg mt-2 bg-accent text-white hover:scale-110 rounded-full transition-all duration-300"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddRoom;
