import { getId } from "./getId";

export default function delPreview(data, id) {

    let removeApi = false;

    const filteredData = data.filter(item => {

        const currentId = getId(item);

        const shouldRemove = currentId === id;

        return !shouldRemove;
    });

    return { removeApi, filteredData };
}