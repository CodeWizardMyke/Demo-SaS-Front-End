import { api } from "./api";

export async function logoutService () {    
    
    const response = await api.post('/auth/logout');

    return response.data;
}