export function renderPreview(field, dataForm){

    const value = dataForm?.[field.name];


    if(value == null || value === ""){
        return "";
    }

    // se for objeto de select
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        return Object.entries(value).find(([key]) => key.endsWith("_name"))?.[1];
    }
    
    switch(field.type){

        case "image-upload":

            return `${value?.length} imagens`;
 
        case "video-upload":
            return "Vídeo adicionado";

        case "textarea":
            return String(value).slice(0, 250);

        default:
            return String(value);
    }
}