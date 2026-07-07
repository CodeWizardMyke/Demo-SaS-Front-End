export const imageManager = {

    add(images, newImages) {

        return [
            ...images,
            ...newImages
        ];

    },

    remove(images, imageId) {

        let removeApi = null;

        const filtered = images.filter(image => {

            if (image.preview_id === imageId) {

                if (image.thumbnail_id) {
                    removeApi = image.thumbnail_id;
                }

                if (image.preview) {
                    URL.revokeObjectURL(image.preview);
                }

                return false;
            }

            return true;
        });

        return {
            images: filtered,
            removeApi
        };

    },

    clear(images) {
        const removeFromApi = [];

        images.forEach(image => {

            // Se veio da API, guarda o id para remover no backend
            if (image.thumbnail_id) {
                removeFromApi.push(image.thumbnail_id);
            }

            // Revoga apenas URLs criadas pelo navegador
            if (image.file && image.path?.startsWith("blob:")) {
                URL.revokeObjectURL(image.path);
            }

        });

        return {
            images: [],
            removeApi: removeFromApi
        };
    },

    validateCurrent(
        currentImage,
        ...collections
    ){

        if (!currentImage) {
            return null;
        }

        const exists = collections.some(
            collection =>
                collection.some(
                    image =>
                        image.preview_id ===
                        currentImage.preview_id
                )
        );

        if (exists) {
            return currentImage;
        }

        for (const collection of collections) {

            if (collection.length) {
                return collection[
                    collection.length - 1
                ];
            }

        }

        return null;
    },

    setCurrent(image,field) {
        if(field === "thumbnails"){
            return image;
        }
    },
};


