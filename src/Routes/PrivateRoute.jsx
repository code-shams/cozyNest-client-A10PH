import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loader from "../Components/Loader/Loader";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { loading, user } = use(AuthContext);
    if (loading) return <Loader></Loader>;
    if (user?.email) return children;
    return <Navigate to="/auth/sign-in"></Navigate>;
};

export default PrivateRoute;
