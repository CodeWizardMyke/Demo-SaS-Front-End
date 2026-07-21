
export function handdlerErrors(error) {

    const typeErr = error?.status ? error.status : error?.code;

    if(!typeErr){
        return null;
    }

    if( Number(typeErr) ){

        return statusError(error);

    }else{

        return codeError(error);

    }

};

function codeError(error){
    switch (error.code) {
        case "ERR_NETWORK":
            return "Erro de conexão com a aplicação de back-end"
    
        default:
            return error.message
    }

}

function statusError(error){
    
    switch (error?.status) {

        case 401:
            return error.response.data[0].msg;

        case 409:
            const {data} = error.response

            return data?.msg || data ;

        case 403:
            return error.response.data.errors[0].msg;

        default:
            return 'Erro inesperado.'
    }

}
