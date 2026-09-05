import { ProductFormContext } from "contexts/ProductFormContext"
import { WorkspaceContext } from "contexts/WorkspaceContext";
import { useContext } from "react"
import { api } from "services/api";
import { normalizeErrors } from "utils/normalizeErrors";
import parsePrice from "../utils/parsePrice";
import { remove } from "cache/cache";

export default function useProductCreate () {
    const {formData, dispatch} = useContext(ProductFormContext);
    const { setValidationErrors, setLoading,  setModalSucess } = useContext(WorkspaceContext);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {

        if (
            key === "thumbnails" ||
            key === "marketing_images" ||
            key === "currentImage"
        ) {
            return;
        }

        if (key === "product_cost" || key === "selling_price") {
            data.append(key, parsePrice(value));
            return;
        }

        if (typeof value === "object" && value !== null) {
            data.append(key, JSON.stringify(value));
            return;
        }

        data.append(key, value);
    });

    formData.thumbnails.forEach(item => {
        data.append("thumbnails", item.file);
    });

    formData.marketing_images.forEach(item => {
        data.append("advertisings", item.file);
    });

    
    const sendCreate = async () => {
        setLoading(true);

        try {
 
            const response = await api.post('/product/crud/create', data);

            setLoading(false);

            setModalSucess(response.data);

            dispatch({ type:'RESET_FORM' });
            remove('products');

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
        sendCreate,
    }

}