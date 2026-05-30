import { api } from "./api";

export async function searchCategories(query, page = 1, size = 10){

    try{

        const response = await api.get('/category', {
            headers:{
                query,
                page,
                size
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