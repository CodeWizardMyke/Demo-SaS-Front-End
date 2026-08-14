import { api } from "services/api";

export async function updateUser(payload){
    try{
        const response = await api.put('/employee/crud/update', payload);
        
        return {
            data: response.data,
            error: null
        };

    }catch(error){
            console.log(error)
        return {
            data: null,
            error
        };

    }

}