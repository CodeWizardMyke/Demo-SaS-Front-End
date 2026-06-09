import { getId } from "./getId";

export default function thumbnailFilter(data, id) {

    const filteredData = data.filter(item => {

        const currentId = getId(item);

        const shouldRemove = currentId === id;

        return !shouldRemove;
    });

    return filteredData; 
}