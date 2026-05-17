import { logoutService } from "../services/logoutService";

export async function logoutUser(){

    const {response, error} = await logoutService();

    if(error){
        return {response ,error};
    }

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    return {response, error:null};
};