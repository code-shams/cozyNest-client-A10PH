import React, { use, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Contexts/AuthProvider";
import Loader from "../Components/Loader/Loader";

const MainLayout = () => {
    // useEffect(() => {
    //     themeChange(false);
    // }, []);
    const { loading } = use(AuthContext);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Always show loader for at least 5 seconds
        const timer = setTimeout(() => {
            if (!loading) {
                setShowLoader(false);
            }
        }, 2500);

        if (!loading) {
            // If loading finishes early, wait for timeout to complete
            return () => clearTimeout(timer);
        }
    }, [loading]);

    return (
        <div className="bg-base-100">
            {loading || showLoader ? (
                <Loader></Loader>
            ) : (
                <>
                    <header className="">
                        <Navbar></Navbar>
                    </header>
                    <main className="min-h-[calc(100vh-325px)]">
                        <Outlet></Outlet>
                    </main>
                    <footer className="">
                        <Footer></Footer>
                    </footer>
                </>
            )}
        </div>
    );
};

export default MainLayout;
