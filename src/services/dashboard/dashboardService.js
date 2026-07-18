import { api } from "services/api";

export async function dashboardService(){

    try{

        const response = await api.get('/dashboard');

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