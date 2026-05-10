import { logoutService } from "../services/logoutService";

export async function logoutUser(){

    const response = await logoutService();

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    return response;
};