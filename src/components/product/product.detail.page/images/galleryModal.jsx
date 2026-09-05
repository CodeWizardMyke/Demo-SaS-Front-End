import React, { useCallback, useEffect, useRef } from 'react';

import './galleryModal.css';

import {
    FaChevronLeft,
    FaChevronRight,
    FaTimes
} from 'react-icons/fa';

const GalleryModal = ({
    images = [],
    close,
    current,
    setCurrent
}) => {

    const imageRefs = useRef([]);
    const containerRef = useRef(null);

    const nextImage = useCallback(() => {

        if (!images.length) return;

        setCurrent(prev =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );

    }, [images.length, setCurrent]);


    const prevImage = useCallback(() => {

        if (!images.length) return;

        setCurrent(prev =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );

        }, [images.length, setCurrent]);
        const handleSelectImage = index => {
            setCurrent(index);
    };

    useEffect(() => {

        const element = imageRefs.current[current];

        if (!element) return;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

    }, [current]);

    useEffect(() => {

        const handleKeyboard = event => {

            if (event.key === 'Escape') {
                close();
            }

            if (event.key === 'ArrowRight') {
                nextImage();
            }

            if (event.key === 'ArrowLeft') {
                prevImage();
            }

        };

        window.addEventListener('keydown', handleKeyboard);

        return () => {
            window.removeEventListener('keydown', handleKeyboard);
        };

    }, [images.length, close, nextImage, prevImage]);

    return (
        <div className="gallery-modal">

            <div
                className="gallery-modal-backdrop"
                onClick={close}
            />

            <div className="gallery-modal-layout">

                <aside className="gallery-modal-sidebar">

                    <div className="gallery-modal-sidebar-header">
                        <span>
                            Imagens
                        </span>

                        <strong>
                            {images.length}
                        </strong>
                    </div>

                    <div
                        className="gallery-modal-thumbnails scroll"
                        ref={containerRef}
                    >

                        {
                            images.map((image, index) => (

                                <button
                                    type="button"
                                    key={
                                        image?.preview_id
                                        || `modal-thumb-${index}`
                                    }
                                    ref={element => {
                                        imageRefs.current[index] = element;
                                    }}
                                    className={
                                        `gallery-modal-thumbnail ${
                                            index === current
                                                ? 'active'
                                                : ''
                                        }`
                                    }
                                    onClick={() =>
                                        handleSelectImage(index)
                                    }
                                >

                                    <img
                                        src={image?.path}
                                        alt={image?.alt || ''}
                                    />

                                    <span>
                                        {index + 1}
                                    </span>

                                </button>

                            ))
                        }

                    </div>

                </aside>

                <main className="gallery-modal-stage">

                    {
                        images[current] && (
                            <div className="gallery-modal-image-wrapper">

                                <img
                                    src={images[current]?.path}
                                    alt={images[current]?.alt || ''}
                                    className="gallery-modal-image"
                                />

                            </div>
                        )
                    }

                    {
                        images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="gallery-modal-arrow gallery-modal-arrow-left"
                                    onClick={prevImage}
                                    aria-label="Imagem anterior"
                                >
                                    <FaChevronLeft />
                                </button>

                                <button
                                    type="button"
                                    className="gallery-modal-arrow gallery-modal-arrow-right"
                                    onClick={nextImage}
                                    aria-label="Próxima imagem"
                                >
                                    <FaChevronRight />
                                </button>
                            </>
                        )
                    }

                    <div className="gallery-modal-counter">
                        {current + 1} / {images.length}
                    </div>

                </main>

                <button
                    type="button"
                    className="gallery-modal-close"
                    onClick={close}
                    aria-label="Fechar galeria"
                >
                    <FaTimes />
                </button>

            </div>

        </div>
    );
};

export default GalleryModal;