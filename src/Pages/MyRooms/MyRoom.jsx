import React from "react";
import pic from "../../assets/OpenPeeps/groupPic.png";
import pic2 from "../../assets/OpenPeeps/groupPic2.png";
import { FaDollarSign, FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const MyRoom = ({ post, index, handleDelete }) => {
    const { title, _id, rentAmount, availability, preferences, location } =
        post;
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
        <tr className="pri-font font-bold">
            <td className="space-y-2">
                <img className="rounded-sm w-70" src={photo} alt={title} />
                <span className="flex flex-col md:hidden">
                    <span>{title}</span>
                    <span className="flex">
                        <FaLocationDot></FaLocationDot> {location}
                    </span>
                    <span className="flex">
                        <FaDollarSign></FaDollarSign> {rentAmount}
                    </span>
                </span>
            </td>
            <td className="hidden md:table-cell">{title}</td>
            <td className="hidden md:table-cell">{preferences}</td>
            <td className="hidden md:table-cell">{availability}</td>
            <td className="hidden md:table-cell">{rentAmount}$</td>
            <td className="text-xs hover:scale-105 transition-all duration-300">
                <Link to={`/post-update/${_id}`}>
                    <span className="flex flex-row-reverse items-center justify-between ml-1 md:hidden">
                        Edit Post
                        <FaEdit className="size-5 md:hidden"></FaEdit>
                    </span>
                    <FaEdit className="hidden md:table-cell size-6"></FaEdit>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="flex justify-between w-full items-center md:hidden cursor-pointer hover:scale-105 transition-all duration-300"
                >
                    <MdOutlineDeleteForever className="size-6 mt-1 text-red-500"></MdOutlineDeleteForever>
                    Delete Post
                </button>
            </td>
            <td className="text-xs hidden md:table-cell">
                <button
                    onClick={() => handleDelete(_id)}
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                >
                    <MdOutlineDeleteForever className="size-5 sm:size-7 mt-1 text-red-500"></MdOutlineDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default MyRoom;
