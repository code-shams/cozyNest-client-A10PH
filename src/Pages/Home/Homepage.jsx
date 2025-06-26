import React from "react";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useLoaderData } from "react-router";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
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
            {/* Stats */}
            <section>
                {/* <div className="bg-gradient-to-r from-primary to-secondary py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our Impact
                        </h2>
                        <p className="text-xl text-white/90">
                            Numbers that tell our story
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-white/80 text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            </section>
            {/* <section>
                <FAQ></FAQ>
            </section> */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Homepage;
