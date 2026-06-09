import { api } from "services/api";

 export default function getPreview(file) {

    const eventFile =file

    if(!eventFile){
        
        const url = api.defaults.baseURL.split("/api")[0];

        return [{
            ...file,
            path: `${url}${file.path}`
        }];
    };

    const files = Array.from(eventFile);

    const filePreview = files.map( f => ({
        preview_id:crypto.randomUUID(),
        file:f,
        path: URL.createObjectURL(f),
    }))

    return [...filePreview];
};