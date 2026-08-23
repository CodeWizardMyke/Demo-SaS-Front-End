import { api } from "services/api";

export async function brandCreateService(query){

    try{

        const response = await api.post('/brand',  {brand_name:query});

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