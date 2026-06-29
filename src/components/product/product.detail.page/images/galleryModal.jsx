import React, { useEffect, useRef } from 'react';

import './galleryModal.css';
import Button from 'components/buttons/Button';

const GalleryModal = ({
    images,
    close,
    current,
    setCurrent
}) => {

    const imageRefs = useRef([]);
    const containerRef = useRef(null);

    // inicia já na imagem atual
    useEffect(() => {

        if (imageRefs.current[current]) {

            imageRefs.current[current].scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });

        }

    }, [current]);

    // scroll automático para o item mais próximo
    useEffect(() => {

        const container = containerRef.current;

        let timeout;

        const handleScroll = () => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                const itemHeight = window.innerHeight;
                const scrollPosition = container.scrollTop;

                const index = Math.round(scrollPosition / itemHeight);

                setCurrent(index);

                container.scrollTo({
                    top: index * itemHeight,
                    behavior: 'smooth'
                });

            }, 50);

        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };

    }, [setCurrent]);

    const handleSelectImage = (index) => {

        setCurrent(index);

        imageRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    };

    return (
        <div className='gallery_modal'>

            <div className="gallery_items_navigation">
                <ul className='scroll'>
                    {
                        images.map((image, i) =>
                            <li
                                key={image.preview_id + "gallery_modal" + i}
                                onClick={() => handleSelectImage(i)}
                            >
                                <img src={image.path} alt="" />
                            </li>
                        )
                    }
                </ul>
            </div>

            <div
                className="gallery_items scroll"
                ref={containerRef}
            >
                {
                    images.map((image, index) => {
                        return (
                            <div
                                className="contentItem"
                                key={index + "clis"}
                                ref={(el) => imageRefs.current[index] = el}
                            >
                                <img
                                    src={image.path}
                                    alt={image.alt || ""}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className="modal_close">
                <Button text={'x'} click={close} />
            </div>

        </div>
    );
}

export default GalleryModal;