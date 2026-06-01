import { api } from "../../../../services/api"

 export default function getPreview({file,cloud,length}) {

    const url = api.defaults.baseURL.split("/api")[0];

    const path = cloud 
        ?   url + file.path
        :   URL.createObjectURL(file);

    const structure = {
        path,
        cloud,
        file: !cloud ? file : null,
        id: length ? length + 1 : 0
    };

    return structure;

}