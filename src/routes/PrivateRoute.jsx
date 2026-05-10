import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Providers } from "../app/providers";
import LayoutMain from "../layouts/LayoutMain";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(){

    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to="/" />
    }

    return (
        <Providers>
            <LayoutMain/>
        </Providers>
    )
};