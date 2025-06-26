import React, { use, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Navbar from "../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Contexts/AuthProvider";
import Loader from "../Components/Loader/Loader";

const MainLayout = () => {
    const { loading } = use(AuthContext);
    const [showLoader, setShowLoader] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!loading) {
                setShowLoader(false);
            }
        }, 2500);

        return () => clearTimeout(timer);
    }, [loading]);

    return (
        <div className="bg-base-100">
            {loading || showLoader || navigation.state === "loading" ? (
                <Loader></Loader>
            ) : (
                <>
                    <header className="sticky top-0 z-50">
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
