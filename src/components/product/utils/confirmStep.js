export function confirmStep(
    data,
    type,
    step,
    dispatch
){

    let value = data;
    
    let fieldName = type === 'brand' ? 'brandProduct' : 'categoryProduct'

    dispatch({

        type: "SET_FIELD",

        field:fieldName,

        value

    });

    dispatch({
        type: "SET_FIELD",
        field: `fk_${type}_id`,
        value:  data[`${type}_id`]
    })

    dispatch({

        type:"COMPLETE_STEP",

        payload: step,

    });

    return value;

}