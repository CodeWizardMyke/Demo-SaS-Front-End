import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

export default function PrivateRoute(){

    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }

    return (
        <AppLayout/>
    )
};