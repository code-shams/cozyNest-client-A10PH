import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import girlPic from "../../assets/OpenPeeps/pg1.png";
import girlPic2 from "../../assets/OpenPeeps/pg2.png";
// import girlPic6 from "../../assets/OpenPeeps/pg6.png";
// import boyPic1 from "../../assets/OpenPeeps/pb3.png";
import boyPic2 from "../../assets/OpenPeeps/pb4.png";
import boyPic3 from "../../assets/OpenPeeps/pb5.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="rounded-xl mt-5">
            <Swiper
                // spaceBetween={30}
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
                    <div className="w-full p-2 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-teal-50">
                        <img
                            className="h-41 md:h-80 group-hover:scale-110 md:translate-y-16 md:group-hover:translate-y-12 transition-all duration-500"
                            src={girlPic}
                            alt=""
                        />
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
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
                            <p className="text-sm sm:text-base md:text-lg">
                                Whether you're finding a room or offering one,
                                we've got the perfect match for your vibe.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-green-50">
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Find
                                <Typewriter
                                    words={[" the Right Roomie"]}
                                    loop={0}
                                    // cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg">
                                Because every nest feels better with the right
                                people.
                            </p>
                        </div>
                        <img
                            style={{ transform: "scaleX(-1)" }}
                            className="h-46 md:h-80 :scale-110 md:translate-y-16 md:group-hover:translate-y-12 group-hover:scale-110 transition-transform duration-500"
                            src={boyPic2}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-red-50">
                        <img
                            className="h-46 md:h-80 transition-transform duration-500 group-hover:transform group-hover:scale-110 :scale-110 md:translate-y-16 md:group-hover:translate-y-12"
                            src={girlPic2}
                            alt=""
                        />

                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
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
                            <p className="text-sm sm:text-base md:text-lg">
                                Your cozy living experience starts in just a few
                                clicks.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full p-2 md:p-5 flex flex-col md:flex-row items-center justify-between md:justify-center group bg-emerald-50">
                        <div className="sec-font text-center group-hover:scale-105 transition-all duration-500">
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                                Host
                                <Typewriter
                                    words={[" with Heart"]}
                                    loop={0}
                                    // cursorStyle="_"
                                    typeSpeed={50}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg">
                                Share your space, share your story. CozyNest
                                makes it easy and meaningful.
                            </p>
                        </div>
                        <img
                            style={{ transform: "scaleX(-1)" }}
                            className="h-46 md:h-80 :scale-110 md:translate-y-16 md:group-hover:translate-y-12 group-hover:scale-110 transition-transform duration-500"
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
