import React from "react";
import animation from "../../assets/animations/ani2.json";
import Lottie from "lottie-react";

const Loader = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <Lottie
                className="h-32 my-auto"
                animationData={animation}
                loop={true}
            />
        </div>
    );
};

export default Loader;
