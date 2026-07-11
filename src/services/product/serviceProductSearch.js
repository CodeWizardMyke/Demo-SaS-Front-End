import { api } from "services/api";

export async function serviceProductSearch(query, page=1,size=10){

    try{
        const response = await api.get('/product/search/', {
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