
export default function responseErrorHandler(props){

    let errObj = {data:null, msg:null}

    switch (props.status) {
        case 409:
            errObj.data = props.response.data.errors;
            errObj.msg = props.message;
            break;
        default:
            errObj.msg = props.message;
            break;
    }

    return errObj;
}