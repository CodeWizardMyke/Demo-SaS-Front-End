import { api } from "services/api";

export async function categoryCreateIconService(payload){
    try{
        const response = await api.post('/category', payload);

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