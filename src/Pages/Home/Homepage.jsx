import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const Homepage = () => {
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto">
            <Banner></Banner>
        </div>
    );
};

export default Homepage;
