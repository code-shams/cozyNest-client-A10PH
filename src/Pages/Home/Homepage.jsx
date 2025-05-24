import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useLoaderData } from "react-router";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import FAQ from "./FAQ";
import HowItWorks from "./HowItWorks";

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
            <section>
                <FAQ></FAQ>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Homepage;
