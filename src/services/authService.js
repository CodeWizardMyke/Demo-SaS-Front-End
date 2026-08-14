import responseErrorHandler from "../utils/responseErrorHandler";
import { setStorageItems } from "../utils/setStorageItems";
import { api } from "./api";


export async function loginRequest (payload,keepLogged) {
    
    try {
        
        const response = await api.post('/auth/login',payload);

        if(keepLogged){
            setStorageItems(response.data,"local")
        }else{
            setStorageItems(response.data);
        }

        return {response:response, error:null};

   } catch(error) {
        const result = responseErrorHandler(error);

        return {response:null, error:result};
   }
}

export async function createAccountRequest (payload,keepLogged) {
    try {

        const response = await api.post('/auth/create',payload);

        if(keepLogged){
            setStorageItems(response.data,"local")
        }else{
            setStorageItems(response.data);
        }

        return {response:response, error:null};

    } catch(error) {


        const result = responseErrorHandler(error);

        return {response:null, error:result};
    }
}