import { api } from "services/api";

export async function categoryDeleteService(payload){

    try{

        const response = await api.delete('/category', {
            headers:{ id:payload.category_id },
            data:payload
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