import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="bg-sky-50">
            <header className="">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-325px)]">
                <Outlet></Outlet>
            </main>
            <footer className="">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
