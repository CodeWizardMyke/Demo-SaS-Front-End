export function confirmStep(
    data,
    type,
    step,
    dispatch
){

    const value = {
        id: null,
        name: ""
    };

    switch (type) {

        case "category":

            value.name =
                data.category_name || data.name;

            value.id =
                data.category_id || data.id;

            break;

        case "brand":

            value.name =
                data.brand_name || data.name;

            value.id =
                data.brand_id || data.id;

            break;

        default:

            value.id = null;
            value.name = data;

            break;

    }

    dispatch({

        type: "SET_FIELD",

        field: type,

        value

    });

    dispatch({

        type:"COMPLETE_STEP",

        payload: step,

    });

    return value;

}