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
        <footer className="bg-base-200 border-t-7 border-base-300 pri-font mx-auto p-6 pb-0 rounded-3xl rounded-b-none drop-shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left max-w-[1515px] w-11/12 mx-auto ">
                {/* Contact Details */}
                <div>
                    <div className="text-lg font-extrabold">
                        <span className="text">Cozy</span>
                        <span className="text-rose-500">N</span>
                        <span className="text">est</span>
                    </div>
                    <p className="text-sm md:text-base">
                        Email: support@cozynest.com
                    </p>
                    <p className="text-sm md:text-base">Phone: +992567-8901</p>
                </div>

                {/* Terms & Privacy */}
                <div className="flex flex-col gap-2">
                    <Link to="/about" className="hover:underline">
                        <span className="text-sm">About</span>
                    </Link>
                    <Link to="/faq" className="hover:underline">
                        <span className="text-sm">FAQ</span>
                    </Link>
                    <Link to="/terms" className="hover:underline">
                        <span className="text-sm">Terms & Conditions</span>
                    </Link>
                    <Link to="/privacy" className="hover:underline">
                        <span className="text-sm">Privacy Policy</span>
                    </Link>
                </div>

                {/* Social Media Links */}
                <div>
                    <p className="text-right mb-2">Connect with us</p>
                    <div className="flex items-center gap-4 justify-start">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="hover:text-[#FFA69E] transition"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            className="hover:text-[#FFA69E] transition"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            className="hover:text-[#FFA69E] transition"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="hover:text-[#FFA69E] transition"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-6 pb-4 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} CozyNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
