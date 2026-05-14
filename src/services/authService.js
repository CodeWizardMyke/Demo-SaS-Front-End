import responseErrorHandler from "../utils/responseErrorHandler";
import { setStorageItems } from "../utils/setStorageItems";
import { api } from "./api";

export async function loginRequest (payload,saveUser) {
   try {
        
        const response = await api.post('/auth/login',payload);

        if(saveUser){
            setStorageItems(response.data,"local")
        }else{
            setStorageItems(response.data);
        }

        return {data:response, error:null};

   } catch(error) {
        const result = responseErrorHandler(error);

        return {data:null, error:result};
   }
}