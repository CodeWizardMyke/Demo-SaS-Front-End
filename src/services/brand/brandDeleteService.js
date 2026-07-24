import { api } from "services/api";

export async function brandDeleteService(id){

    try{

        const response = await api.delete('/brand', {
            headers:{ id }
        });

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