import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import Lottie from "lottie-react";
import ani1 from "../../assets/signUp.json";

const SignUp = () => {
    const { createUser, updateUser, setLoading, googleSignIn } =
        useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const passCheck = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Welcome!");
                navigate("/");
            })
            .catch((error) => toast.error(error.message))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!passCheck.test(password))
            return toast.error(
                <span>
                    Password must be at least 6 characters long and include at
                    least one uppercase and one lowercase letter.
                </span>
            );
        const photo = form.photo.value;

        createUser(email, password)
            .then(() => updateUser(name, photo))
            .then(() => navigate("/"))
            .then(() => toast.success("Greetings!"))
            .catch((error) => toast.error(error.message))
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="my-5 w-11/12 max-w-[1550px] mx-auto shadow-lg bg-base-200 rounded-xl">
            <title>SignUp</title>
            <div className="rounded-lg p-2 md:py-3 md:px-4 sm:p-5 pri-font flex flex-col-reverse md:flex-row gap-5 md:gap-20">
                <div className="md:w-1/2 space-y-3">
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
                        Sign Up
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 md:space-y-6"
                    >
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block">
                                Photo URL
                            </label>
                            <input
                                required
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="relative space-y-1 text-sm">
                            <label htmlFor="password" className="block">
                                Password
                            </label>
                            <input
                                required
                                type={showPass ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                            {showPass || (
                                <button
                                    onClick={handleShowPass}
                                    className="absolute top-9 right-2"
                                >
                                    <FaEye size={24}></FaEye>
                                </button>
                            )}

                            {showPass && (
                                <button
                                    onClick={handleShowPass}
                                    className="absolute top-9 right-2"
                                >
                                    <FaEyeSlash size={24}></FaEyeSlash>
                                </button>
                            )}
                        </div>
                        <button className="block cursor-pointer w-full p-1 sm:p-3 text-center relative overflow-hidden font-medium text-gray-600 bg-gray-100 border border-slate-300 rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                Sign Up
                            </span>
                        </button>
                    </form>
                    <div className="flex items-center md:pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className=" sm:px-3 text-sm">
                            Sign Up with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="block w-full sm:py-2 focus:ring-2 focus:ring-offset-1 cursor-pointer p-1 sm:p-3 text-center relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-slate-300 rounded-lg shadow-inner group"
                        >
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                <div className="flex items-center justify-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="w-5 h-5 group-hover:fill-white transition-all duration-500"
                                    >
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>

                                    <span>Sign Up with Google</span>
                                </div>
                            </span>
                        </button>
                    </div>
                    <p className="text-sm text-center sm:px-6">
                        Already have an account?
                        <Link to="/auth/sign-in" className="underline ml-1">
                            Sign In
                        </Link>
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold pri-font p-1 mx-auto">
                        Welcome to CozyNest
                    </h1>
                    <Lottie
                        className="w-3/4 md:full mx-auto"
                        animationData={ani1}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
