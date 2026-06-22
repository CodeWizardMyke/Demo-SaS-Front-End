import {
    createContext,
    useReducer,
    useState
} from "react";
import { initialState, productFormReducer } from "../reducers/productFormReducer";

export const ProductFormContext = createContext();

export function ProductFormProvider({ children }){

    const [viewProductDetail,setViewProductDetail] = useState(false);

    const [state, dispatch] = useReducer(
        productFormReducer,
        initialState
    );

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

                viewProductDetail,setViewProductDetail,
                
                dispatch,

            }}
        >

            {children}

        </ProductFormContext.Provider>

    );

}