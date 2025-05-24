import React, { use, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyRoom from "./MyRoom";
import Swal from "sweetalert2";

const MyRooms = () => {
    const [loading, setLoading] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(
            `https://cozy-nest-server.vercel.app/post?name=${user.displayName}&email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setUserPosts(data.data);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cozy-nest-server.vercel.app/post/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data?.data?.deletedCount) {
                            const currentPosts = userPosts.filter(
                                (post) => post._id !== id
                            );
                            setUserPosts(currentPosts);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Post has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };
    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="max-w-[1515px] mx-auto w-11/12">
                    <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 mt-10 shadow-xl group">
                        <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-secondary rounded-b-full md:w-1/2 lg:w-1/3 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 -80 hover:-100 overflow-hidden">
                            My Posts
                        </h1>
                        <div className="overflow-x-auto mt-5 md:mt-10">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Room</th>
                                        <th className="hidden md:table-cell">
                                            Title
                                        </th>
                                        <th className="hidden md:table-cell">
                                            Preferences
                                        </th>
                                        <th className="hidden md:table-cell">
                                            Availability
                                        </th>
                                        <th className="hidden md:table-cell">
                                            Rent
                                        </th>
                                        <th className="hidden md:table-cell">
                                            Edit
                                        </th>
                                        <th className="hidden md:table-cell">
                                            Delete
                                        </th>
                                        <th className="md:hidden">
                                            Edit / Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userPosts.map((post, index) => (
                                        <MyRoom
                                            key={post._id}
                                            post={post}
                                            index={index}
                                            handleDelete={handleDelete}
                                        ></MyRoom>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyRooms;
