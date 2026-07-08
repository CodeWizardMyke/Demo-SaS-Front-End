import { api } from "./api";

export async function serviceProductDelete(product_id){
    if(!product_id){
        console.log('ID do produto não foi obtido, ação cancelada.');
        return{data:null,error:null};
    }

    try{

        const response = await api.delete('/product/crud/destroy', {
            headers:{product_id}
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