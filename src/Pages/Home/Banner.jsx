import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import girlPic from "../../assets/OpenPeeps/pg1.png";
import girlPic2 from "../../assets/OpenPeeps/pg2.png";
import boyPic2 from "../../assets/OpenPeeps/pb4.png";
import boyPic3 from "../../assets/OpenPeeps/pb5.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="rounded-xl mt-5">
            <Swiper
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
                    <div className="w-full p-2 h-60 md:h-96 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-teal-50">
                        <div className="w-32 h-32 mx-5 md:w-80 md:h-80 flex items-center justify-center flex-shrink-0">
                            <img
                                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 bg-emerald-100 rounded-full"
                                src={girlPic}
                                alt=""
                            />
                        </div>
                        <div className="sec-font text-black text-center group-hover:scale-105 transition-all duration-500 flex-1 md:ml-4">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Welcome
                                <Typewriter
                                    words={[" to Cozy Nest"]}
                                    loop={0}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:w-6/12 lg:mx-auto mt-2">
                                Whether you're finding a room or offering one,
                                we've got the perfect match for your vibe.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 h-60 md:h-96 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-green-50">
                        <div className="sec-font text-black text-center group-hover:scale-105 transition-all duration-500 flex-1 md:mr-4 order-2 md:order-1">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Find
                                <Typewriter
                                    words={[" the Right Roomie"]}
                                    loop={0}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-2">
                                Because every nest feels better with the right
                                people.
                            </p>
                        </div>
                        <div className="w-32 h-32 mx-5 md:w-80 md:h-80 flex items-center justify-center flex-shrink-0 order-1 md:order-2">
                            <img
                                style={{ transform: "scaleX(-1)" }}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-green-100 rounded-full"
                                src={boyPic2}
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 h-60 md:h-96 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-red-50">
                        <div className="w-32 h-32 mx-5 md:w-80 md:h-80 flex items-center justify-center flex-shrink-0">
                            <img
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-red-100 rounded-full"
                                src={girlPic2}
                                alt=""
                            />
                        </div>
                        <div className="sec-font text-black text-center group-hover:scale-105 transition-all duration-500 flex-1 md:ml-4">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Find.
                                <Typewriter
                                    words={[" Match. Settle."]}
                                    loop={0}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-2">
                                Your cozy living experience starts in just a few
                                clicks.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 h-60 md:h-96 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-emerald-50">
                        <div className="sec-font text-black text-center group-hover:scale-105 transition-all duration-500 flex-1 md:mr-4 order-2 md:order-1">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Host
                                <Typewriter
                                    words={[" with Heart"]}
                                    loop={0}
                                    typeSpeed={50}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mt-2">
                                Share your space, share your story. CozyNest
                                makes it easy and meaningful.
                            </p>
                        </div>
                        <div className="w-32 h-32 mx-5 md:w-80 md:h-80 flex items-center justify-center flex-shrink-0 order-1 md:order-2">
                            <img
                                style={{ transform: "scaleX(-1)" }}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-teal-100 rounded-full"
                                src={boyPic3}
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;