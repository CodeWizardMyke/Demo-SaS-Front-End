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

        thumbnails_removed: [],

        pricing: {
            cost: 0,
            sell: 0
        }

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

        case "ADD_IMAGES":

            return {

                ...state,

                formData: {

                    ...state.formData,

                    thumbnails: [
                        ...state.formData.thumbnails,
                        ...action.payload
                    ]

                }

            };

        case "REMOVE_IMAGE": {

            const removed =
                state.formData.thumbnails.find(
                    image => image.preview_id === action.payload
                );

            if (removed?.preview) {

                URL.revokeObjectURL(
                    removed.preview
                );

            }

            return {

                ...state,

                formData: {

                    ...state.formData,

                    thumbnails:
                        state.formData.thumbnails.filter(
                            image =>
                                image.preview_id !== action.payload
                        ),

                    thumbnails_removed:
                        removed?.thumbnail_id
                            ? [
                                ...(Array.isArray(
                                    state.formData.thumbnails_removed
                                )
                                    ? state.formData.thumbnails_removed
                                    : []),
                                removed.thumbnail_id
                            ]
                            : (
                                Array.isArray(
                                    state.formData.thumbnails_removed
                                )
                                    ? state.formData.thumbnails_removed
                                    : []
                            )

                }

            };

        }

        case "CLEAR_IMAGES": {

            state.formData.thumbnails.forEach(
                image => {

                    if (image?.preview) {

                        URL.revokeObjectURL(
                            image.preview
                        );

                    }

                }
            );

            const removedIds =
                state.formData.thumbnails
                    .filter(
                        image => image.thumbnail_id
                    )
                    .map(
                        image => image.thumbnail_id
                    );

            return {

                ...state,

                formData: {

                    ...state.formData,

                    thumbnails: [],

                    thumbnails_removed: [

                        ...(Array.isArray(
                            state.formData.thumbnails_removed
                        )
                            ? state.formData.thumbnails_removed
                            : []),

                        ...removedIds

                    ]

                }

            };

        }

        default:
            return state;

    }

}