import { api } from "./api";

export async function searchBrands(query){

    try{

        const response = await api.get('/brand', {
            headers:{
                query
            }
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