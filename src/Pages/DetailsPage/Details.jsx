import React, { use, useEffect, useState } from "react";
import pic from "../../assets/OpenPeeps/groupPic.png";
import {
    FaHeart,
    FaPhoneAlt,
    FaThumbsDown,
    FaThumbsUp,
    FaUser,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
const serverURL = import.meta.env.VITE_SERVER_URL;
const Details = () => {
    const { user } = use(AuthContext);
    const { data } = useLoaderData();
    const {
        title,
        _id,
        email,
        name,
        location,
        rentAmount,
        roomType,
        preferences,
        availability,
        contactInfo,
        details,
        likeCount,
    } = data[0];

    let photo;
    if (data[0]?.photo) {
        photo = data[0].photo;
    } else {
        photo = pic;
    }
    const [likes, setLikes] = useState(likeCount);
    const [likeStatus, setLikeStatus] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setLikeStatus(true);
        fetch(`${serverURL}/post/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ likeCount: likes + 1 }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data.matchedCount) {
                    toast.success("Thank you for you feedback! ", {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                } else {
                    Swal.fire({
                        text: "Something went wrong!!!",
                        icon: "error",
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto mt-5 md:mt-10">
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0  shadow-xl group">
                <h1 className="text-center text-sm p-1 sm:p-0 sm:text-xl md:text-2xl font-extrabold pri-font bg-black text-secondary rounded-b-full w-full lg:w-3/5 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500  overflow-hidden">
                    {title}
                </h1>
                <div className="mt-3 md:mt-6">
                    <img
                        src={photo}
                        className="w-[900px] mx-auto rounded-sm border border-slate-300 justify-between"
                        alt=""
                    />
                    {/* headings */}
                    <section className="md:w-10/12 lg:w-4/5 mx-auto mt-3 relative grid sm:grid-cols-2 gap-2 sm:0">
                        <div className="space-y-1">
                            <h1 className="pri-font font-bold text-sm md:text-xl lg:text-2xl flex gap-1 items-center">
                                <FaUser className="text-rose-400 size-4 md:size-6"></FaUser>
                                {name}
                            </h1>
                            <p className="sec-font font-medium text-xs md:text-lg">
                                {title}
                            </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end space-y-1">
                            <span className="text-xs md:text-base text-rose-600 rounded-xl font-bold pri-font flex items-center gap-2">
                                <FaHeart className="animate-bounce"></FaHeart>
                                {likes} people interested in
                            </span>
                            {user.displayName === name &&
                            user.email === email ? (
                                <button
                                    onClick={handleLike}
                                    disabled
                                    className="cursor-not-allowed sec-font py-1 px-3 md:px-5 border-2 border-accent opacity-50 rounded-full font-bold pri-font flex gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 mr-3"
                                >
                                    <span className="flex items-center gap-1 text-xs md:text-base">
                                        <FaThumbsUp className="text-rose-600 size-3 md:size-5"></FaThumbsUp>
                                        Like
                                    </span>
                                </button>
                            ) : (
                                <button
                                    onClick={handleLike}
                                    className="sec-font cursor-pointer py-1 px-3 md:px-5 border-2 border-accent rounded-full font-bold pri-font flex gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 mr-3"
                                >
                                    <span className="flex items-center gap-1 text-xs md:text-base">
                                        <FaThumbsUp className="text-rose-600 size-3 md:size-5"></FaThumbsUp>
                                        Like
                                    </span>
                                </button>
                            )}
                            {likeStatus ? (
                                <span className="text-xs md:text-base font-bold pri-font flex items-center gap-1 my-2">
                                    <FaPhoneAlt></FaPhoneAlt>
                                    Contact: {contactInfo}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                    </section>

                    <h1 className="text-center text-base md:text-2xl pri-font font-extrabold mt-5 md:mt-10 md:w-1/2 mx-auto  border-b-2 text-rose-400 border-dashed">
                        Room Information
                    </h1>
                    {/* details section */}
                    <section className="mt-3 md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1">
                        <div className="flex gap-5 px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Email:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {email}
                            </p>
                        </div>
                        <div className="flex gap-5 px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Rent:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {rentAmount}$
                            </p>
                        </div>
                        <div className="flex gap-5  px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Location:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {location}
                            </p>
                        </div>
                        <div className="flex gap-5 px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Room Type:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {roomType}
                            </p>
                        </div>
                        <div className="flex gap-5  px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Preferences:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {preferences}
                            </p>
                        </div>
                        <div className="flex gap-5 px-5 py-2 rounded-sm border border-slate-300 justify-between">
                            <h1 className="text-sm md:text-xl font-semibold sec-font">
                                Availability:
                            </h1>
                            <p className="pri-font font-bold text-xs md:text-base">
                                {availability}
                            </p>
                        </div>
                    </section>
                    <h1 className="text-center text-base md:text-2xl pri-font font-extrabold mt-6 md:w-1/2 mx-auto border-b-2 text-rose-400 border-dashed">
                        Details
                    </h1>
                    <p className="text-center text-sm md:text-base mt-2 sec-font">
                        {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
