import {
    createContext,
    useReducer
} from "react";
import { initialState, productFormReducer } from "../reducers/productFormReducer";

export const ProductFormContext = createContext();

export function ProductFormProvider({ children }){

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

                formData:
                    state.formData,

                dispatch

            }}
        >

            {children}

        </ProductFormContext.Provider>

    );

}