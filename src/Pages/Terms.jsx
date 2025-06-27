import React from "react";
import {
    FaGavel,
    FaUserCheck,
    FaShieldAlt,
    FaBan,
    FaEdit,
} from "react-icons/fa";

const Terms = () => {
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto mt-5 md:mt-10 sec-font">
            <h1 className="text-3xl font-bold mb-6 text-left text-primary pri-font">
                Terms & Conditions
            </h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaGavel className="text-indigo-600" />
                    1. Acceptance of Terms
                </h2>
                <p>
                    By accessing or using Cozynest, you agree to be bound by
                    these terms. If you do not agree, please do not use the
                    platform.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaUserCheck className="text-green-600" />
                    2. User Responsibilities
                </h2>
                <p>
                    You are responsible for the accuracy of the information you
                    post, including roommate preferences, listings, and personal
                    contact details.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaShieldAlt className="text-blue-600" />
                    3. Privacy & Safety
                </h2>
                <p>
                    We value your privacy. Contact information is only shared
                    when a listing is liked. Please report any suspicious
                    activity immediately.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaBan className="text-red-600" />
                    4. Account Termination
                </h2>
                <p>
                    We reserve the right to suspend or terminate accounts that
                    violate our guidelines or terms of use without prior notice.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaEdit className="text-yellow-600" />
                    5. Modifications
                </h2>
                <p>
                    Cozynest may update these terms at any time. Changes will be
                    posted on this page with a revised update date.
                </p>
            </section>

            <section>
                <p className="text-sm text-center text-gray-500">
                    Last updated: June 27, 2025
                </p>
            </section>
        </div>
    );
};

export default Terms;
