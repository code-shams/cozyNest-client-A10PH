import React from "react";
import pic from "../../assets/OpenPeeps/groupPic.png";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

const Rooms = ({ roomData }) => {
    const { title, _id, name, location, rentAmount, availability } = roomData;
    let photo;
    if (!roomData.photo) {
        photo = pic;
    } else {
        photo = roomData.photo;
    }
    return (
        <tr className="pri-font font-bold">
            <td className="hidden md:table-cell">
                <img className="rounded-sm w-40" src={photo} alt={title} />
            </td>
            <td>
                <img
                    className="md:hidden rounded-sm w-40"
                    src={photo}
                    alt={title}
                />
                <span className="text-xs sm:text-base">{name}</span>
            </td>
            <td>
                <span className="text-xs sm:text-base">{title}</span>
            </td>
            <td className="hidden md:table-cell">{location}</td>
            <td className="hidden md:table-cell">{availability}</td>
            <td className="hidden md:table-cell">{rentAmount}$</td>
            <td className="text-xs">
                <Link
                    to={`/post-details/${_id}`}
                    className="flex items-center py-2 gap-2 px-3 rounded-2xl border-2 w-max border-black hover:border-green-100 hover:bg-green-500 hover:text-white hover:shadow-xl hover:shadow-green-100 cursor-pointer hover:scale-110 hover:font-extrabold transition-all duration-300 text-xs"
                >
                    See more
                    <FaChevronRight></FaChevronRight>
                </Link>
            </td>
        </tr>
    );
};

export default Rooms;
