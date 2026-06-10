export const imageManager = {

    add(images, newImages) {

        return [
            ...images,
            ...newImages
        ];

    },

    remove(images, imageId) {

        const removed = images.find(
            image => image.preview_id === imageId
        );

        if (removed?.preview) {
            URL.revokeObjectURL(
                removed.preview
            );
        }

        return {
            images: images.filter(
                image => image.preview_id !== imageId
            ),
        };

    },

    clear(images) {

        images.forEach(image => {

            if (image?.preview) {

                URL.revokeObjectURL(
                    image.preview
                );

            }

        });

        return [];

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

    setCurrent(image) {
        return image;
    },

};