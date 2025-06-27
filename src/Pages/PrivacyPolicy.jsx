import React from "react";
import {
    FaUserSecret,
    FaDatabase,
    FaLock,
    FaUserTimes,
    FaHistory,
} from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-[1515px] w-11/12 mx-auto mt-5 md:mt-10 sec-font">
            <h1 className="text-3xl font-bold mb-6 text-left text-primary pri-font">
                Privacy Policy
            </h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaUserSecret className="text-purple-600" />
                    1. Information Collection
                </h2>
                <p>
                    We collect personal data such as email addresses and profile
                    details during registration or listing submission to offer a
                    personalized experience on Cozynest.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaDatabase className="text-teal-600" />
                    2. Data Storage & Security
                </h2>
                <p>
                    Your data is stored securely using Firebase and MongoDB
                    technologies. We implement reasonable safeguards to prevent
                    unauthorized access or disclosure.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaLock className="text-blue-600" />
                    3. Data Sharing
                </h2>
                <p>
                    We do not sell or rent your personal data to third parties.
                    Contact information is only revealed when you like a
                    listing, with your consent.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaUserTimes className="text-red-500" />
                    4. Account & Data Deletion
                </h2>
                <p>
                    You may delete your account at any time. Upon deletion, your
                    listings and associated information will be permanently
                    removed from our servers.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <FaHistory className="text-yellow-600" />
                    5. Updates to Policy
                </h2>
                <p>
                    We may revise our privacy practices occasionally. Updates
                    will be posted on this page along with the modification
                    date.
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

export default PrivacyPolicy;
