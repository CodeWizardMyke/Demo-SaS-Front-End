import { ProductFormContext } from "contexts/ProductFormContext"
import { WorkspaceContext } from "contexts/WorkspaceContext";
import { useContext } from "react"
import { api } from "services/api";
import { normalizeErrors } from "utils/normalizeErrors";
import parsePrice from "../information/utils/parsePrice";

export default function useServicesProduct () {
    const {formData, dispatch} = useContext(ProductFormContext);
    const { setValidationErrors, setLoading,  setModalSucess } = useContext(WorkspaceContext);
    
    const payload = {
        ...formData,
        product_cost: parsePrice(formData.product_cost),
        selling_price: parsePrice(formData.selling_price),
    };
    
    const sendCreateProduct = async () => {
        setLoading(true);

        try {
 
            const response = await api.post('/product/crud/create', payload);

            setLoading(false);

            setModalSucess(response.data);

            //dispatch({ type:'RESET_FORM' });

            return{
                data: response.data,
                error: null
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