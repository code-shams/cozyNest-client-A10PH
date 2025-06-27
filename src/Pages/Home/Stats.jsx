// import CountUp from "react-countup";

// const Stats = () => {
//     const statistics = [
//         { label: "Listings", value: 4800, suffix: "+" },
//         { label: "Subscribers", value: 10000, suffix: "+" },
//         { label: "Cities Covered", value: 60 },
//         { label: "Happy Roommates", value: 3800, suffix: "+" },
//     ];

//     return (
//         <section className="px-4 sm:px-6 lg:px-8 py-10 bg-[var(--card-bg)] rounded-2xl shadow-md">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
//                 {statistics.map((stat, index) => (
//                     <div key={index} className="space-y-1">
//                         <h3 className="text-2xl sm:text-3xl font-bold text-primary">
//                             <CountUp
//                                 end={stat.value}
//                                 duration={2}
//                                 separator=","
//                             />
//                             {stat.suffix || ""}
//                         </h3>
//                         <p className="text-sm sm:text-base sec-font text-gray-600">
//                             {stat.label}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Stats;

// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { Home, Users, MapPin, Smile } from "lucide-react";

// const Stats = () => {
//     const [ref, inView] = useInView({
//         triggerOnce: true,
//         threshold: 0.3,
//     });

//     const statistics = [
//         {
//             label: "Listings",
//             value: 4800,
//             suffix: "+",
//             icon: <Home className="w-6 h-6 text-accent" />,
//         },
//         {
//             label: "Subscribers",
//             value: 10000,
//             suffix: "+",
//             icon: <Users className="w-6 h-6 text-accent" />,
//         },
//         {
//             label: "Cities Covered",
//             value: 60,
//             suffix: "+",
//             icon: <MapPin className="w-6 h-6 text-accent" />,
//         },
//         {
//             label: "Happy Roommates",
//             value: 3800,
//             suffix: "+",
//             icon: <Smile className="w-6 h-6 text-accent" />,
//         },
//     ];

//     return (
//         <section
//             ref={ref}
//             className="px-4 sm:px-6 lg:px-8 pb-10 rounded-2xl  text-center"
//         >
//             {/* Heading */}
//             <div className="mb-10 max-w-2xl mx-auto">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-primary pri-font">
//                     Trusted by Thousands
//                 </h2>
//                 <p className="mt-3 text-gray-600 sec-font text-sm sm:text-base">
//                     Our growing community speaks for itself. Here's a quick look
//                     at what we've achieved together.
//                 </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sec-font">
//                 {statistics.map((stat, index) => (
//                     <div
//                         key={index}
//                         className="space-y-2 transition-all duration-500 hover:scale-105"
//                     >
//                         <div className="flex justify-center">{stat.icon}</div>
//                         <h3 className="text-2xl sm:text-3xl font-bold text-accent">
//                             {inView ? (
//                                 <CountUp
//                                     end={stat.value}
//                                     duration={2}
//                                     separator=","
//                                 />
//                             ) : (
//                                 "0"
//                             )}
//                             {stat.suffix || ""}
//                         </h3>
//                         <p className="text-sm sm:text-base sec-font text-gray-600">
//                             {stat.label}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Stats;
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Users, MapPin, Smile } from "lucide-react";

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const statistics = [
        {
            label: "Listings",
            value: 4800,
            suffix: "+",
            icon: <Home className="w-6 h-6" />,
        },
        {
            label: "Subscribers",
            value: 10000,
            suffix: "+",
            icon: <Users className="w-6 h-6" />,
        },
        {
            label: "Cities Covered",
            value: 60,
            suffix: "+",
            icon: <MapPin className="w-6 h-6" />,
        },
        {
            label: "Happy Roommates",
            value: 3800,
            suffix: "+",
            icon: <Smile className="w-6 h-6" />,
        },
    ];

    return (
        <section
            ref={ref}
            className="px-4 sm:px-6 lg:px-8 pb-10 text-center"
        >
            {/* Heading */}
            <div className="mb-5 md:mb-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold pri-font drop-shadow-lg">
                    Trusted by Thousands
                </h2>
                <p className="mt-3 text-gray-600 sec-font text-sm sm:text-base">
                    Our growing community speaks for itself. Here's a quick look
                    at what we've achieved together.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
                {statistics.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[var(--color-banner1)] group rounded-xl shadow-md px-4 py-6 space-y-2 transition-all duration-300 hover:scale-105"
                    >
                        <div className="flex w-max mx-auto rounded-full justify-center group-hover:text-accent group-hover:bg-primary text-black p-2 transition-all duration-300">{stat.icon}</div>
                        <h3 className="text-2xl font-bold text-black">
                            {inView ? (
                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    separator=","
                                />
                            ) : (
                                "0"
                            )}
                            {stat.suffix || ""}
                        </h3>
                        <p className="text-sm sm:text-base sec-font text-gray-600">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
