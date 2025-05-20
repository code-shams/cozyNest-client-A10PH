import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import girlPic from "../../assets/OpenPeeps/pg1.png";
import girlPic2 from "../../assets/OpenPeeps/pg2.png";
import girlPic6 from "../../assets/OpenPeeps/pg6.png";
import boyPic1 from "../../assets/OpenPeeps/pb3.png";
import boyPic2 from "../../assets/OpenPeeps/pb4.png";
import boyPic3 from "../../assets/OpenPeeps/pb5.png";

const Banner = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                }}
                loop={true}
                grabCursor={false}
                speed={1000}
                modules={[Autoplay]}
                className="py-6 shadow-xl rounded-xl"
            >
                <SwiperSlide>
                    <div className="h-80 w-full p-5 flex items-center justify-center group">
                        <img
                            className="h-80 group-hover:scale-110 translate-y-7 transition-all duration-500"
                            src={girlPic}
                            alt=""
                        />
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-4xl font-extrabold">
                                Welcome to Your Cozy Nest
                            </h1>
                            <p className="text-lg">
                                Whether you're finding a room or offering one,
                                we've got the perfect match for your vibe.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-80 w-full p-5 flex items-center justify-center group">
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-4xl font-extrabold">
                                Find Mates, Not Just Roommates
                            </h1>
                            <p className="text-lg">
                                Because every nest feels better with the right
                                people.
                            </p>
                        </div>
                        <img
                            style={{ transform: "scaleX(-1)" }}
                            className="h-80 :scale-110 translate-y-7 group-hover:scale-110 transition-transform duration-500"
                            src={boyPic2}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-80 w-full p-5 flex items-center justify-center group">
                        <img
                            className="h-80 transition-transform duration-500 group-hover:transform group-hover:scale-110 :scale-110 translate-y-7"
                            src={girlPic2}
                            alt=""
                        />

                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-4xl font-extrabold">
                                Find Mates, Not Just Roommates
                            </h1>
                            <p className="text-lg">
                                Because every nest feels better with the right
                                people.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-80 w-full p-5 flex items-center justify-center group">
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-4xl font-extrabold">
                                Host with Heart
                            </h1>
                            <p className="text-lg">
                                Share your space, share your story. CozyNest
                                makes it easy and meaningful.
                            </p>
                        </div>
                        <img
                            style={{ transform: "scaleX(-1)" }}
                            className="h-80 :scale-110 translate-y-7 group-hover:scale-110 transition-transform duration-500"
                            src={boyPic3}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
