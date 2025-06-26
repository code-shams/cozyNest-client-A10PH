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
import UpdateRoom from "../Pages/UpdateRoom/UpdateRoom";
import Loader from "../Components/Loader/Loader";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";

const serverURL = import.meta.env.VITE_SERVER_URL;
export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch(`${serverURL}/post?availability=Available`),
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
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch(`${serverURL}/post`),
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
                path: "about",
                Component: About,
            },
            {
                path: "faq",
                Component: FAQ,
            },
            {
                path: "post-details/:id",
                hydrateFallbackElement: <Loader></Loader>,
                loader: ({ params }) =>
                    fetch(`${serverURL}/post?_id=${params.id}`),
                element: (
                    <PrivateRoute>
                        <Details></Details>
                    </PrivateRoute>
                ),
            },
            {
                path: "/post-update/:id",
                hydrateFallbackElement: <Loader></Loader>,
                loader: ({ params }) =>
                    fetch(`${serverURL}/post/?_id=${params.id}`),
                element: (
                    <PrivateRoute>
                        <UpdateRoom></UpdateRoom>
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
