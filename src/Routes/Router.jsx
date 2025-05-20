import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Home/Homepage";
import Errorpage from "../Pages/Error/Errorpage";
import PrivateRoute from "./PrivateRoute";
import AddRoom from "../Pages/AddRoom/AddRoom";
import BrowseRoom from "../Pages/BrowseRoom/BrowseRoom";
import MyRooms from "../Pages/MyRooms/MyRooms";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "add-room",
                element: (
                    <PrivateRoute>
                        <AddRoom></AddRoom>
                    </PrivateRoute>
                ),
            },
            {
                path: "browse-rooms",
                element: (
                    <PrivateRoute>
                        <BrowseRoom></BrowseRoom>
                    </PrivateRoute>
                ),
            },
            {
                path: "my-rooms",
                element: (
                    <PrivateRoute>
                        <MyRooms></MyRooms>
                    </PrivateRoute>
                ),
            },
            {
                path: "/auth/sign-up",
                Component: SignUp,
            },
            {
                path: "/auth/sign-in",
                Component: SignIn,
            },
        ],
    },
]);
