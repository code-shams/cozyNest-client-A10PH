import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useLoaderData } from "react-router";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import HowItWorks from "./HowItWorks";
import Newsletter from "./Newsletter";
import Stats from "./Stats";

const Homepage = () => {
    const { data } = useLoaderData();
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto lg:space-y-12">
            <section>
                <Banner></Banner>
            </section>
            <section>
                <FeaturedPost posts={data}></FeaturedPost>
            </section>
            {/* Stats */}
            <section>
                <Stats></Stats>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <Newsletter></Newsletter>
            </section>
        </div>
    );
};

export default Homepage;
