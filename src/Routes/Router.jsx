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
import Details from "../Pages/DetailsPage/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                loader: () => fetch("/dummydata.json"),
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
                element: <BrowseRoom></BrowseRoom>,
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
                path: "post-details/:id",
                loader: ({ params }) => fetch("/dummmydata.json"),
                element: (
                    <PrivateRoute>
                        <Details></Details>
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
