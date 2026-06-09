export function getId(item) {

    if (!item) return null;

    return item.preview_id || item.thumbnail_id;
}