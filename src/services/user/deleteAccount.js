import { api } from "services/api";

export async function deleteAccount(payload){
    try{
        const response = await api.delete('/employee/crud/destroy', {
            data:payload
        });
        
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