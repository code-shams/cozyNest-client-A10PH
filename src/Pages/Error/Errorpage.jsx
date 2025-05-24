import React from "react";
import animation from "../../assets/animations/ani6.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const Errorpage = () => {
    return (
        <div
            className="min-h-screen space-y-3 flex flex-col items-center"
            data-theme={localStorage.getItem("theme")}
        >
            <Lottie className="h-80" animationData={animation} loop={true} />
            <h1 className="text-5xl font-bold pri-font text-center">Oh No!</h1>
            <p className="text-base font-medium text-center w-11/12">
                We searched everywhere but couldn’t find what you’re looking
                for. Let’s find a better place for you to go.
            </p>
            <div className="flex justify-center">
                <Link className="cursor-pointer flex items-center gap-1 btn btn-outline hover:bg-black hover:text-white">
                    <FaHome></FaHome>
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;
