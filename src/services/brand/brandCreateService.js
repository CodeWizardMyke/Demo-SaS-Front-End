import { api } from "services/api";

export async function brandCreateService(payload){
    try{
        const response = await api.post('/brand', payload);

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