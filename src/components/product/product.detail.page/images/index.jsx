import './styles.css';

import {
    FaChevronLeft,
    FaChevronRight,
    FaSearchPlus
} from 'react-icons/fa';

export default function ProductGallery({
    images = [],
    currentIndex,
    setCurrentIndex,
    currentImage,
    toggleModal
}) {

    const nextImage = () => {
        if (!images.length) return;

        setCurrentIndex(prev =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };

    const prevImage = () => {
        if (!images.length) return;

        setCurrentIndex(prev =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    };

    const selectImage = index => {
        setCurrentIndex(index);
    };

    return (
        <section className="product-gallery">

            <div className="product-gallery-main">

                {
                    currentImage ? (
                        <>
                            <img
                                src={currentImage.path}
                                alt={currentImage.alt || ''}
                                className="product-gallery-image"
                            />

                            {
                                images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            className="product-gallery-arrow product-gallery-arrow-left"
                                            onClick={prevImage}
                                            aria-label="Imagem anterior"
                                        >
                                            <FaChevronLeft />
                                        </button>

                                        <button
                                            type="button"
                                            className="product-gallery-arrow product-gallery-arrow-right"
                                            onClick={nextImage}
                                            aria-label="Próxima imagem"
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </>
                                )
                            }

                            <button
                                type="button"
                                className="product-gallery-zoom"
                                onClick={toggleModal}
                                aria-label="Abrir imagem"
                            >
                                <FaSearchPlus />
                                <span>Ampliar</span>
                            </button>

                            <span className="product-gallery-counter">
                                {currentIndex + 1} / {images.length}
                            </span>
                        </>
                    ) : (
                        <div className="product-gallery-empty">
                            Nenhuma imagem carregada
                        </div>
                    )
                }

            </div>

            {
                images.length > 1 && (
                    <div className="product-gallery-thumbnails">

                        {
                            images.map((image, index) => (
                                <button
                                    type="button"
                                    key={
                                        image?.preview_id
                                        || `thumbnail-${index}`
                                    }
                                    className={
                                        `product-gallery-thumbnail ${
                                            index === currentIndex
                                                ? 'active'
                                                : ''
                                        }`
                                    }
                                    onClick={() => selectImage(index)}
                                    aria-label={`Visualizar imagem ${index + 1}`}
                                >
                                    <img
                                        src={image.path}
                                        alt={image.alt || ''}
                                    />
                                </button>
                            ))
                        }

                    </div>
                )
            }

        </section>
    );
}