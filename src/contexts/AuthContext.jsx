import { createContext,useState } from "react";
import { logoutUser } from "../utils/logoutUser";

export const AuthContext = createContext();

export function AuthProvider ({children}) {
    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errMsg,setErrMsg] = useState(null);

    async function logout (){
        await logoutUser()
        setUser(null);
        setToken(null);
    }

    return(

        <AuthContext.Provider
            value={{
                user,setUser,
                token,setToken,
                setErrMsg,errMsg,
                isAuthenticated: !!token,
                loading,setLoading,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

