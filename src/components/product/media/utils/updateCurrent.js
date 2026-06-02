import { getId } from "./getId";

export default function updateCurrent({
            data,
            current,
            id
}) {

    const currentId = getId(current);

    if(currentId === id){
        
        const last =  data[ data.length -1];

        return last || null ;
    }

    return current;
};