
export function handdlerErrors(error) {
    
    let handdlerErr = '';

    switch (error?.status) {
        case 401:
            handdlerErr = error.response.data[0].msg;
            break;
       case 409:
            handdlerErr = error.response.data.msg;
            break;
       case 403:
            handdlerErr =  error.response.data.errors[0].msg;
            break;

        default:
            break;
    }

    return handdlerErr;
};