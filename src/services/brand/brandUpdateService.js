import { api } from "services/api";

export async function brandUpdateService(payload){

    try{
        const response = await api.put(
            '/brand',
            payload
        );

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