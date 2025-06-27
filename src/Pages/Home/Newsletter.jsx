import { useState, useEffect } from "react";
import {
    Mail,
    Send,
    CheckCircle,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(""); // 'loading', 'success', 'error'
    const [message, setMessage] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            text: "Best housing newsletter I've subscribed to!",
            author: "Sarah M.",
            rating: 5,
        },
        {
            text: "Found my perfect roommate through their listings!",
            author: "Mike D.",
            rating: 5,
        },
        {
            text: "The market insights are incredibly valuable.",
            author: "Jessica L.",
            rating: 5,
        },
        {
            text: "Love the weekly tips and exclusive deals.",
            author: "David R.",
            rating: 5,
        },
        {
            text: "Professional service with great customer support.",
            author: "Emma K.",
            rating: 5,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("error");
            setMessage("Please enter a valid email address");
            return;
        }

        setStatus("loading");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            setMessage(
                "Welcome to our community! Check your inbox for confirmation."
            );
            setEmail("");
            setTimeout(() => {
                setStatus("");
                setMessage("");
            }, 5000);
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="px-4 sm:px-6 lg:px-8 my-10">
            <div className="text-center mb-7 px-2">
                <div className="flex flex-col items-center justify-center gap-1 md:gap-5 mb-3">
                    <div className="bg-accent rounded-full p-3">
                        <Mail className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold pri-font drop-shadow-lg">
                        Stay in the Loop
                    </h2>
                </div>
                <p className="text-base sm:text-lg sec-font text-pretty md:max-w-2xl mx-auto">
                    Get the latest room listings, housing market insights, and
                    exclusive tips delivered straight to your inbox. Join
                    thousands of renters and hosts in our community.
                </p>
            </div>

            <div className="sec-font bg-[var(--card-bg)] rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        <h3 className="text-2xl font-semibold mb-6">
                            What you'll get
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    iconColor: "text-green-600",
                                    bg: "bg-green-100",
                                    title: "New Listings First",
                                    desc: "Be the first to know about premium rooms in your preferred locations",
                                },
                                {
                                    iconColor: "text-blue-600",
                                    bg: "bg-blue-100",
                                    title: "Market Insights",
                                    desc: "Weekly reports on rental trends and pricing in major cities",
                                },
                                {
                                    iconColor: "text-purple-600",
                                    bg: "bg-purple-100",
                                    title: "Expert Tips",
                                    desc: "Roommate compatibility advice and housing search strategies",
                                },
                                {
                                    iconColor: "text-orange-600",
                                    bg: "bg-orange-100",
                                    title: "Exclusive Deals",
                                    desc: "Special offers and discounts from our partner services",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start space-x-3"
                                >
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 ${item.bg} rounded-full flex items-center justify-center mt-0.5`}
                                    >
                                        <CheckCircle
                                            className={`w-4 h-4 ${item.iconColor}`}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 order-1 md:order-2">
                        <div className="shadow bg-[var(--color-banner1)] rounded-xl p-4 sm:p-6">
                            <h3 className="text-base md:text-xl text-center text-black font-semibold mb-4">
                                Join 10,000+ subscribers
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email address"
                                        className="w-full p-2 md:px-4 md:py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>
                                {/* <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    onClick={handleSubmit}
                                    className="w-full text-white btn btn-primary font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105  disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                            <span>Subscribing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Subscribe Now</span>
                                        </>
                                    )}
                                </button> */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    onClick={handleSubmit}
                                    className={`w-full text-white bg-primary font-medium py-2 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                                        status === "loading"
                                            ? "pointer-events-none"
                                            : ""
                                    }`}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                            <span>Subscribing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Subscribe Now</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {status && (
                                <div
                                    className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
                                        status === "success"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {status === "success" ? (
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    )}
                                    <span className="text-sm">{message}</span>
                                </div>
                            )}

                            <p className="text-sm text-black mt-3">
                                We respect your privacy. Unsubscribe at any
                                time.
                            </p>
                        </div>

                        <div className="relative shadow bg-accent rounded-xl p-4 sm:p-6">
                            <div className="text-center mb-4">
                                <div className="flex items-center justify-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="relative overflow-hidden h-16 sm:h-12">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(-${
                                                currentSlide * 100
                                            }%)`,
                                        }}
                                    >
                                        {reviews.map((review, index) => (
                                            <div
                                                key={index}
                                                className="w-full flex-shrink-0 text-center"
                                            >
                                                <p className="text-sm text-black mb-1">
                                                    "{review.text}"
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    - {review.author}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    onClick={prevSlide}
                                    className="p-1 rounded-full bg-primary transition-colors"
                                    aria-label="Previous review"
                                >
                                    <ChevronLeft className="w-4 h-4 text-white" />
                                </button>
                                <div className="flex space-x-1">
                                    {reviews.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentSlide(index)
                                            }
                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                index === currentSlide
                                                    ? "bg-white"
                                                    : "bg-primary"
                                            }`}
                                            aria-label={`Go to review ${
                                                index + 1
                                            }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={nextSlide}
                                    className="p-1 rounded-full bg-primary transition-colors"
                                    aria-label="Next review"
                                >
                                    <ChevronRight className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
