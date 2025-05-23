import React from "react";
import { Link } from "react-router";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white pri-font w-11/12 max-w-[1515px] mx-auto p-6 pb-0 rounded-3xl rounded-b-none drop-shadow-lg mt-5 lg:mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                {/* Contact Details */}
                <div>
                    <h4 className="text-base md:text-base lg:text-lg font-bold mb-2">
                        CozyNest
                    </h4>
                    <p className="text-sm md:text-base lg:text-lg">
                        Email: support@cozynest.com
                    </p>
                    <p className="text-sm md:text-base lg:text-lg">
                        Phone: +992567-8901
                    </p>
                </div>

                {/* Terms & Privacy */}
                <div className="flex flex-col gap-2">
                    <Link to="/terms" className="hover:underline">
                        <span className="text-sm md:text-base lg:text-lg">Terms & Conditions</span>
                    </Link>
                    <Link to="/privacy" className="hover:underline">
                        <span className="text-sm md:text-base lg:text-lg">
                            Privacy Policy
                        </span>
                    </Link>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 justify-center">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className="text-black hover:text-[#FFA69E] transition"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="text-black hover:text-[#FFA69E] transition"
                    >
                        <FaInstagram size={18} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="text-black hover:text-[#FFA69E] transition"
                    >
                        <FaTwitter size={18} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-black hover:text-[#FFA69E] transition"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                </div>
            </div>

            <div className="mt-6 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} CozyNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
