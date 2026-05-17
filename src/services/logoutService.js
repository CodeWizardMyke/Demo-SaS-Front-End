import responseErrorHandler from "../utils/responseErrorHandler";
import { api } from "./api";

export async function logoutService () {    
    try {
        const response = await api.post('/auth/logout');

        return {response:response, error:null};
        
    } catch(error) {
        const result = responseErrorHandler(error);

        return {response:null, error:result};
    }
}