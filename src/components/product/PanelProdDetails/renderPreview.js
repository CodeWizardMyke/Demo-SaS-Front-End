export function renderPreview(field, dataForm){

    const value = dataForm?.[field.name];

    if(value == null || value === ""){
        return "Não preenchido";
    }

    // se for objeto de select
    if(typeof value === "object" && !Array.isArray(value)){

        if(value.name){
            return value.name;
        }

        return JSON.stringify(value);
    }

    switch(field.type){

        case "image-upload":
            return `${value.length} imagens`;

        case "video-upload":
            return "Vídeo adicionado";

        case "textarea":
            return String(value).slice(0, 250);

        default:
            return String(value);
    }
}