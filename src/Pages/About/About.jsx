import { motion, useReducedMotion } from "framer-motion";
import { Heart, Shield, Users, Home, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import teamImage from "../../assets/OpenPeeps/peeps.png";
import storyImage from "../../assets/OpenPeeps/story.png";

const About = () => {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Mobile-friendly animation variants
    const fadeInUp = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : isMobile ? 20 : 40,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: prefersReducedMotion ? 0.01 : isMobile ? 0.4 : 0.6,
                ease: "easeOut",
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: prefersReducedMotion
                    ? 0
                    : isMobile
                    ? 0.1
                    : 0.2,
            },
        },
    };

    // Simplified floating animation for mobile
    const floatingAnimation = prefersReducedMotion
        ? {}
        : {
              y: isMobile ? [0, -8, 0] : [0, -20, 0],
              transition: {
                  duration: isMobile ? 2.5 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
              },
          };

    // Reduced value card animations for mobile
    const valueCardAnimation = (index) => {
        if (prefersReducedMotion) return {};
        return {
            y: isMobile ? [0, -3, 0] : [0, -6, 0],
            transition: {
                duration: isMobile ? 3 : 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * (isMobile ? 0.1 : 0.2),
            },
        };
    };

    const values = [
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "Safety First",
            description:
                "We prioritize user safety with secure authentication, verified profiles, and protected contact sharing.",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Community Focused",
            description:
                "Building meaningful connections between roommates who share similar lifestyles and values.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Compatibility Matters",
            description:
                "We believe great roommate relationships start with compatibility in lifestyle, budget, and preferences.",
        },
        {
            icon: <Home className="w-8 h-8 text-primary" />,
            title: "Cozy Living",
            description:
                "Everyone deserves a comfortable, welcoming space to call home with people they genuinely connect with.",
        },
    ];

    return (
        <div className="bg-base-100 pri-font max-w-[1515px] w-11/12 mx-auto">
            {/* Hero Section */}
            <motion.div
                className="flex flex-col-reverse md:flex-row-reverse gap-3 md:gap-10 pt-10 lg:pt-20 items-center"
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                viewport={{ amount: isMobile ? 0.1 : 0.3 }}
            >
                <motion.div className="text-left lg:max-w-4xl space-y-3 lg:space-y-5">
                    <motion.h1
                        className="text-xl lg:text-3xl text-primary font-bold uppercase drop-shadow-lg border-b-3 w-max"
                        variants={fadeInUp}
                    >
                        About us
                    </motion.h1>
                    <motion.p
                        className="sec-font text-base md:text-lg text-base-content/80 leading-relaxed"
                        variants={fadeInUp}
                    >
                        We're on a mission to help people find their perfect
                        roommates and create comfortable, welcoming living
                        spaces where meaningful connections flourish.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <button className="btn btn-sm lg:btn-md btn-primary text-white font-bold rounded-full border-0 hover:-translate-y-1 hover:bg-accent hover:text-black transition-all duration-300">
                            Explore More <ArrowRight />
                        </button>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    viewport={{ amount: isMobile ? 0.1 : 0.3 }}
                >
                    <img src={teamImage} alt="Team" />
                </motion.div>
            </motion.div>

            {/* Our Story Section */}
            <motion.div
                className="mt-10 md:mt-20"
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                viewport={{ amount: isMobile ? 0.1 : 0.3 }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-12 lg:gap-16 xl:gap-20">
                    <div className="flex-1">
                        <motion.h2
                            className="text-xl lg:text-3xl text-primary font-bold uppercase drop-shadow-lg border-b-3 w-max mb-3"
                            variants={fadeInUp}
                        >
                            Our Story
                        </motion.h2>
                        <motion.div
                            className="sec-font text-sm sm:text-base lg:text-lg text-pretty space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                            viewport={{ amount: isMobile ? 0.1 : 0.3 }}
                        >
                            {[
                                "Finding the right roommate shouldn't be a stressful, time-consuming process filled with uncertainty and awkward conversations. That's the belief that sparked the creation of Cozynest.",
                                "We recognized that traditional roommate-finding methods often led to mismatched living situations, uncomfortable dynamics, and wasted time. People needed a better way to connect with compatible roommates based on genuine compatibility factors.",
                                "Today, we're proud to have helped hundreds of people find their perfect roommates and create their own cozy nests together.",
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    variants={fadeInUp}
                                    className="mb-4 leading-relaxed"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div
                        className="max-w-[500px] md:max-w-[400px]"
                        animate={floatingAnimation}
                    >
                        <img src={storyImage} className="p-2" alt="Story" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Our Values Section */}
            <motion.div
                className="px-4 my-10 md:my-25"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: isMobile ? 0.1 : 0.3, once: true }}
            >
                <div className="text-center mb-4 md:mb-12">
                    <motion.h2
                        className="text-xl lg:text-3xl text-primary font-bold uppercase drop-shadow-lg border-b-3 w-max mx-auto mb-3"
                        variants={fadeInUp}
                    >
                        Our Values
                    </motion.h2>
                    <motion.p
                        className="text-sm md:text-lg"
                        variants={fadeInUp}
                    >
                        These core values guide everything we do and shape the
                        Cozynest experience.
                    </motion.p>
                </div>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: isMobile ? 0.1 : 0.3, once: true }}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="text-center group sec-font text-pretty hover:-translate-y-2 hover:scale-102 transition-all duration-500"
                            variants={fadeInUp}
                            animate={valueCardAnimation(index)}
                        >
                            <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-500">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-3">
                                {value.title}
                            </h3>
                            <p className="text-base-content/70 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="pb-5 md:pb-10 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: isMobile ? 0.1 : 0.3, once: true }}
            >
                <motion.h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-6">
                    Ready to Join Our Community?
                </motion.h2>
                <motion.p className="mb-4 md:mb-8 text-sm md:text-base max-w-2xl mx-auto">
                    Become part of the Cozynest family and start your journey to
                    finding the perfect roommate today.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mx-auto w-max"
                    variants={fadeInUp}
                >
                    <button className="btn btn-md lg:btn-lg btn-primary text-white font-bold rounded-full border-0 hover:-translate-y-1 transition-all duration-300">
                        Get Started
                    </button>
                    <button className="btn btn-md lg:btn-lg btn-outline rounded-full hover:bg-accent hover:text-black transition-all duration-300">
                        Browse Listings
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
