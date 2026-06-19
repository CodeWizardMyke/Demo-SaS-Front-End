import { ProductFormContext } from "contexts/ProductFormContext"
import { WorkspaceContext } from "contexts/WorkspaceContext";
import { useContext } from "react"
import { api } from "services/api";
import { normalizeErrors } from "utils/normalizeErrors";

export default function useServicesProduct () {
    const {formData, dispatch} = useContext(ProductFormContext);
    const { setValidationErrors, setLoading } = useContext(WorkspaceContext);
    
    const payload = formData;
    
    const sendCreateProduct = async () => {
        try {
            setLoading(true);
            const response = api.post('/product/crud/create', payload);

            setLoading(false);
            return{
                data:(await response).data,
                error:null
            }
            

        } catch(error) {
            const errors = normalizeErrors(error.response?.data?.errors);

            setValidationErrors(error.response?.data?.errors);

            dispatch({
                type: "SET_ERRORS",
                payload: errors
            });

            setLoading(false);

            return{
                data:null,
                error:errors
            }
        }
    }

    return {
        sendCreateProduct,
    }

}