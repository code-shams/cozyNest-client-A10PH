import React from "react";
import { FaChevronRight, FaHome, FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import pic from "../../../assets/OpenPeeps/groupPic.png";
import pic2 from "../../../assets/OpenPeeps/groupPic2.png";
const PostCard = ({ post, index }) => {
    const { title, _id, name, location, rentAmount, availability } = post;
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
            <td className="hidden md:table-cell">
                <img className="rounded-sm w-70" src={photo} alt={title} />
            </td>
            <td>{name}</td>
            <td>{title}</td>
            <td className="hidden md:table-cell">{location}</td>
            <td className="hidden md:table-cell">{availability}</td>
            <td className="text-xs">
                <Link
                    to={`/post-details/${_id}`}
                    className="flex items-center py-2 gap-2 px-3 rounded-2xl border-2 w-max border-black hover:border-green-100 hover:bg-green-500 hover:text-white hover:shadow-xl hover:shadow-green-100 cursor-pointer hover:scale-105 transition-all duration-300 text-xs"
                >
                    See more
                    <FaChevronRight></FaChevronRight>
                </Link>
            </td>
        </tr>
    );
};

export default PostCard;
