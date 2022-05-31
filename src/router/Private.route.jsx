import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";


const PrivateRoute = ({component: RouteComponent}) => {
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);    
    return (
        isAuthenticated ? <RouteComponent /> : <Navigate to={"/login"}/>
    );
}

export default PrivateRoute;