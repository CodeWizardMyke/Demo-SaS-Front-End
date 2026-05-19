import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

import IndexApp from "../layouts/AppLayout/IndexApp";

export default function PrivateRoute(){

    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }

    return (
        <IndexApp/>
    )
};