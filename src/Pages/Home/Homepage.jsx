import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useLoaderData } from "react-router";
import FeaturedPost from "./FeaturedPost";

const Homepage = () => {
    const posts = useLoaderData();
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto">
            <section>
                <Banner></Banner>
            </section>
            <section>
                <FeaturedPost posts={posts}></FeaturedPost>
            </section>
        </div>
    );
};

export default Homepage;
