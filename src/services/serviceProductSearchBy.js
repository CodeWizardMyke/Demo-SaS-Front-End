import { api } from "./api";

export async function serviceProductSearchBy(query, page=1,size=10, type='id'){

    try{

        const response = await api.get(`product/search/${type}`, {
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