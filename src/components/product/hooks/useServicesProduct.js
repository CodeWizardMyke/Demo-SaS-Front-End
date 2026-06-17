import { ProductFormContext } from "contexts/ProductFormContext"
import { useContext } from "react"
import { api } from "services/api";
import { normalizeErrors } from "utils/normalizeErrors";

export default function useServicesProduct () {
    const {formData, dispatch} = useContext(ProductFormContext);
    const payload = formData;
    
    const createProduct = async () => {
        try {
            
            const response = api.post('/product/crud/create', payload);

            return{
                data:(await response).data,
                error:null
            }
            
        } catch(error) {
            const errors = normalizeErrors(error.response?.data?.errors);

            dispatch({
                type: "SET_ERRORS",
                payload: errors
            });

            return{
                data:null,
                error:errors
            }
        }
    }


    return {
        createProduct,
    }

}