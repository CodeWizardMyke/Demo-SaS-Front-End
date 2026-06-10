import { imageManager } from "./utils/imagesManager";

export const initialState = {

    step: 1,

    completedSteps: [],

    totalSteps: 5,

    formData: {

        brand: null,

        category: null,

        title: "",

        description: "",

        thumbnails: [],

        marketing_images: [],

        currentImage: null,

        thumbnails_removed: [],

        selling_price: ""

    }

};

export function productFormReducer(state, action) {

    switch (action.type) {

        case "NEXT_STEP":
            return {
                ...state,
                step: state.step + 1
            };

        case "PREV_STEP":
            return {
                ...state,
                step: state.step - 1
            };

        case "SET_STEP":
            return {
                ...state,
                step: action.payload
            };
        
        case "COMPLETE_STEP":

            if (
                state.completedSteps.includes(
                    action.payload
                )
            ) {
                return state;
            }

            return {
                ...state,
                completedSteps: [
                    ...state.completedSteps,
                    action.payload
                ]
            };

        case "SET_FIELD":

            return {

                ...state,

                formData: {

                    ...state.formData,

                    [action.field]: action.value

                }

            };

        case "ADD_IMAGES": {
            return {
                ...state,
                formData:{
                    ...state.formData,
                    [action.field]: imageManager.add(
                        state.formData[action.field],
                        action.payload
                    ),
                    currentImage: imageManager.setCurrent(action.payload[0],action.field)
                }
            }
        }

        case "SET_CURRENT_IMAGE":

            return {
                ...state,
                formData: {
                    ...state.formData,
                    currentImage: imageManager.setCurrent(action.payload, action.field)
                }
            };

       case "REMOVE_IMAGE": {

            const {
                images,
               // removed 
            } = imageManager.remove(
                state.formData[action.field],
                action.payload
            );

            const newCurrentImage =
                imageManager.validateCurrent(
                    state.formData.currentImage,
                    images
            );

            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: images,
                    currentImage:newCurrentImage
                }
            };
        }

        case "CLEAR_IMAGES": {

           return{
                ...state,
                formData:{
                    ...state.formData,
                    [action.field]: imageManager.clear(
                        state.formData[action.field]
                    ),
                    currentImage:null
                }
           }

        }

        default:
            return state;

    }

}