export function confirmStep(
    data,
    type,
    step,
    dispatch
){

    let value = {};
    
    let fieldName = null

    if(type === 'category'){
        fieldName = "categoryProduct";

        value = {
            category_id:data.category_id,
            category_name:data.category_name
        }
    };

    if(type === 'brand'){
        fieldName = "brandProduct";

        value  = {
            brand_id:data.brand_id,
            brand_name:data.brand_name
        }
    }

    console.log(value)
   
    dispatch({

        type: "SET_FIELD",

        field:fieldName,

        value

    });

    dispatch({
        type: "SET_FIELD",
        field: `fk_${type}_id`,
        value: value.id
    })

    dispatch({

        type:"COMPLETE_STEP",

        payload: step,

    });

    return value;

}