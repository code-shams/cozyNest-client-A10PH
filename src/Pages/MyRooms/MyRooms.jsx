import React, { use, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyRoom from "./MyRoom";
import Swal from "sweetalert2";
import PostCard from "../Home/FeaturedPost/PostCard";
const serverURL = import.meta.env.VITE_SERVER_URL;
const MyRooms = () => {
    const [loading, setLoading] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`${serverURL}/post?name=${user.displayName}&email=${user.email}`)
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
                fetch(`${serverURL}/post/${id}`, {
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
        <div>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="max-w-[1515px] mx-auto w-11/12">
                    <div className="rounded-lg my-5">
                        <h1 className="text-xl lg:text-2xl text-primary font-bold uppercase drop-shadow-lg text-center sm:w-max pri-font mx-auto">
                            My Posts
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                            {userPosts.map((post, index) => (
                                <PostCard
                                    key={post._id}
                                    post={post}
                                    index={index}
                                    handleDelete={handleDelete}
                                ></PostCard>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyRooms;
