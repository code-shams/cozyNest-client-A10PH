// import React from "react";
// import { Outlet } from "react-router";
// import Navbar from "../../Components/Header/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import DashboardSidebar from "./DashboardSidebar";

// const DashboardLayout = () => {
//     return (
//         <>
//             <div className="flex max-w-[1515px] mx-auto">
//                 <div className="min-h-screen bg-base-200 w-[25%] border-r-2 border-primary">
//                     <DashboardSidebar></DashboardSidebar>
//                 </div>
//                 <div className="min-h-screen w-[75%]">
//                     <Outlet></Outlet>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DashboardLayout;

import { Outlet } from "react-router";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen pri-font">
            {/* Sidebar */}
            <div>
                <DashboardSidebar />
            </div>
            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
