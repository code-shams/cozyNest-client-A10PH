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
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;
