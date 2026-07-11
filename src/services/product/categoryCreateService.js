import { api } from "services/api";

export async function categoryCreateService(query){
    const formData = new FormData();

    formData.append('category_name',query);

    try{

        const response = await api.post('/category', formData);

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