import { api } from "services/api";

export async function categoryUpdateService(payload){

    try{

        const response = await api.put('/category', payload);

        return {
            data: response.data,
            error: null
        };

    }catch(error){

        return {
            data: null,
            error
        };

    }

}