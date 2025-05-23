import React from "react";
const FAQ = () => {
    return (
        <div className="rounded-lg shadow-md p-2 pt-0 md:p-5 md:pt-0 mt-10 group overflow-clip">
            <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-extrabold pri-font bg-black text-lime-200 rounded-b-full md:w-3/4 lg:w-3/5 mx-auto group-hover:scale-105 group-hover:p-2 transition-all duration-500 opacity-80 hover:opacity-100 overflow-hidden mb-8">
                Frequently Asked Questions
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto sec-font">
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input
                            type="radio"
                            name="my-accordion-3"
                            defaultChecked
                        />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            What is CozyNest?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                CozyNest is your trusted platform for finding
                                the perfect roommate. We connect compatible
                                people looking to share living spaces and create
                                comfortable homes together.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            How do I find a roommate?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                Create your profile, set your preferences, and
                                browse through verified roommate listings. Use
                                our matching algorithm to find compatible
                                roommates based on lifestyle, budget, and
                                location.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            Is CozyNest free to use?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                Yes! Basic features including profile creation,
                                browsing listings, and messaging potential
                                roommates are completely free. No hidden fees or
                                subscription required.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            How do I post a room for rent?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                Simply create an account, click "Post a Room",
                                upload photos of your space, add details about
                                rent, location, and house rules, then publish
                                your listing to start receiving applications.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            How do you verify users?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                We verify users through email confirmation,
                                phone verification, and optional ID verification
                                for added security. Verified profiles are marked
                                with a badge for easy identification.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus shadow-sm border border-slate-200 hover:border-lime-100 transition-all duration-300 hover:shadow-xl rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-semibold text-black hover:text-lime-200 transition-colors duration-200">
                            What safety measures do you have in place?
                        </div>
                        <div className="collapse-content">
                            <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-3"></div>
                            <p className="text-gray-700 leading-relaxed">
                                We prioritize your safety with user
                                verification, secure messaging, reporting tools,
                                and safety tips. We recommend meeting potential
                                roommates in public places and trusting your
                                instincts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <p className="text-gray-600 text-base">
                    Still have questions? Feel free to reach out to our support
                    team!
                </p>
            </div>
        </div>
    );
};

export default FAQ;
