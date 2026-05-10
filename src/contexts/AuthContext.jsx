import { createContext, useEffect, useState } from "react";
import { checkStoredAuth } from "../utils/checkStoredAuth";

export const AuthContext = createContext();

export function AuthProvider ({children}) {
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    async function logout(){
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        setUser(null);
        setToken(null);
    }

    useEffect(()=>{
        const storedAuth = checkStoredAuth();

        setUser(storedAuth.user);
        setToken(storedAuth.token)

        setLoading(false);
    },[])

    return(

        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

