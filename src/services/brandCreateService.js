import { api } from "./api";

export async function brandCreateService(query){

    const formData = new FormData()

    formData.append('brand_name',query)

    try{

        const response = await api.post('/brand', formData);

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