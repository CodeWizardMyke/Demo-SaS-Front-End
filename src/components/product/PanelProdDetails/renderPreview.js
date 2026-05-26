export function renderPreview(field, dataForm){

    if(!field){
        return "Não preenchido";
    }

    const value = dataForm?.[field.name];

    if(
        value === undefined ||
        value === null ||
        value === ""
    ){
        return "Não preenchido";
    }

    switch(field.type){

        case "image-upload":
            return `${value.length} imagens`;

        case "video-upload":
            return "Vídeo adicionado";

        case "textarea":
            return String(value).slice(0, 40) + "...";

        default:
            return value;
    }

}