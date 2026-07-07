import { imageManager } from "./utils/imagesManager";

export const initialState = {

    step: 1,

    completedSteps: [],

    totalSteps: 6,
    
    errors:{},

    formData: {

        brandProduct:{
            brand_id:null,
            brand_name:null
        },

        categoryProduct:{
            category_id:null,
            category_name:null
        },

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
        
        case "SET_ERRORS":

            return {
                ...state,
                errors: action.payload
            };

        case "CLEAR_ERRORS":

            return {
                ...state,
                errors: {}
            };

        case "CLEAR_FIELD_ERROR": {

            const errors = {
                ...state.errors
            };

            delete errors[action.field];

            return {
                ...state,
                errors
            };

        }

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

        case "SET_FIELD": {

            const errors = {
                ...state.errors
            };

            delete errors[action.field];

            return {

                ...state,

                errors,

                formData: {

                    ...state.formData,

                    [action.field]: action.value

                }

            };

        }
        case "ADD_IMAGES": {
            
            const errors = {
                ...state.errors
            };

            delete errors[action.field];

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
                removeApi,

            } = imageManager.remove(
                state.formData[action.field],
                action.payload
            );

            const thumbnails_removed = removeApi
                ? [...state.formData.thumbnails_removed, removeApi]
                : state.formData.thumbnails_removed;

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
                    currentImage:newCurrentImage,
                    thumbnails_removed
                }
            };
        }

        case "CLEAR_IMAGES": {

            const {
                images,
                removeApi

            } = imageManager.clear(state.formData[action.field])

            console.log('removeApi',removeApi)

            let currentRemoved = [
                ...state.formData.thumbnails_removed,
                ...removeApi
            ]

            return{
                ...state,
                formData:{
                    ...state.formData,
                    [action.field]: images,
                    currentImage:null,
                    thumbnails_removed: currentRemoved
                }
            }

        }
        case "RESET_FORM":

            return {
                ...initialState
            };
        default:
            return state;

    }

}