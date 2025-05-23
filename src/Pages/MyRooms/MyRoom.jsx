import React from "react";
import pic from "../../assets/OpenPeeps/groupPic.png";
import pic2 from "../../assets/OpenPeeps/groupPic2.png";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const MyRoom = ({ post, index, handleDelete }) => {
    const { title, _id, rentAmount, availability } = post;
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
            <td>
                <img className="rounded-sm w-70" src={photo} alt={title} />
            </td>
            <td>{title}</td>
            <td className="hidden md:table-cell">{availability}</td>
            <td className="hidden md:table-cell">{rentAmount}$</td>
            <td className="text-xs hover:scale-105 transition-all duration-300">
                <Link to={`/post-update/${_id}`}>
                    <FaEdit className="size-4 sm:size-6"></FaEdit>
                </Link>
            </td>
            <td className="text-xs">
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
