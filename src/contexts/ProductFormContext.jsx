import {
    createContext,
    useReducer,
    useState
} from "react";
import { initialState, productFormReducer } from "../reducers/productFormReducer";
import { api } from "services/api";

export const ProductFormContext = createContext();

export function ProductFormProvider({ children,initialData = null }){

    const [viewProductDetail,setViewProductDetail] = useState(false);

    let baseUrl = api.defaults.baseURL.split("/api")[0];

    const thumbnails = [];
    const marketing_images = [];

    (initialData?.thumbnails || []).forEach(image => {

        const formattedImage = {
            ...image,
            preview_id: image.thumbnail_id ,
            path: baseUrl + image.path,
            file: null,
        };

        if (image.type === 0) {
            thumbnails.push(formattedImage);
        } else {
            marketing_images.push(formattedImage);
        }
    });

    const mergedInitialState = {
        ...initialState,

        formData: {
            ...initialState.formData,
            ...initialData,
            thumbnails,
            marketing_images
        }
    };

    const [state, dispatch] = useReducer(
        productFormReducer,
        mergedInitialState
    );

    function handlerToggleProductShow(value){
        setViewProductDetail(value || !viewProductDetail)
    }

    return(

        <ProductFormContext.Provider
            value={{

                step: state.step,

                completedSteps:
                    state.completedSteps,

                totalSteps:
                    state.totalSteps,

                formData:
                    state.formData,

                errors: state.errors,

                handlerToggleProductShow,
                viewProductDetail,
                
                dispatch,

            }}
        >

            {children}

        </ProductFormContext.Provider>

    );

}