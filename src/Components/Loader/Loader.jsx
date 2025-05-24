import React from "react";
import animation from "../../assets/animations/ani2.json";
import Lottie from "lottie-react";

const Loader = () => {
    return (
        <div
            className="min-h-screen w-full flex flex-col justify-center items-center transition-colors duration-300"
            data-theme={localStorage.getItem("theme")}
        >
            <Lottie
                className="h-32 my-auto"
                animationData={animation}
                loop={true}
            />
        </div>
    );
};

export default Loader;
