import { api } from "./api";

export async function searchCategories(query){

    try{

        const response = await api.get('/category', {
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