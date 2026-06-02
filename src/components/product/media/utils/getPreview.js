import { api } from "../../../../services/api"

 export default function getPreview(data) {
        
    const eventFile = data?.target?.files;

    if(!eventFile){
        
        const url = api.defaults.baseURL.split("/api")[0];

        return [{
            ...data,
            path: `${url}${data.path}`
        }];
    };

    const files = Array.from(eventFile);

    const filePreview = files.map(file => ({
        preview_id:crypto.randomUUID(),
        file,
        path: URL.createObjectURL(file),
    }))

    return [...filePreview];
};