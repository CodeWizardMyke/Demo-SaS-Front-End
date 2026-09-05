import React, { useContext, useState } from 'react';

import './styles.css';
import './describeStyle.css';

import { ProductFormContext } from 'contexts/ProductFormContext';

import Images from './images';
import Market from './market';
import GalleryModal from './images/galleryModal';

const ProductDetailPage = () => {

    const {
        formData,
        handlerToggleProductShow
    } = useContext(ProductFormContext);

    const [openModal, setOpenModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentImage =
        formData?.thumbnails?.[currentIndex] || null;

    function toggleModal() {
        setOpenModal(prev => !prev);
    }

    return (
        <div
            className={`pd-content scroll ${openModal ? 'active' : ''}`}
        >

            <header className="pd-preview-header">

                <div className="pd-preview-heading">

                    <span className="pd-preview-label">
                        Pré-visualização
                    </span>

                    <h2>
                        Visualização do produto
                    </h2>

                </div>

                <button
                    type="button"
                    className="pd-preview-close"
                    onClick={() => handlerToggleProductShow(false)}
                >
                    Fechar
                </button>

            </header>

            {
                openModal && (
                    <GalleryModal
                        images={formData?.thumbnails || []}
                        current={currentIndex}
                        setCurrent={setCurrentIndex}
                        close={toggleModal}
                    />
                )
            }

            <div className="pd-main">

                <Images
                    images={formData?.thumbnails || []}
                    setCurrentIndex={setCurrentIndex}
                    currentImage={currentImage}
                    currentIndex={currentIndex}
                    toggleModal={toggleModal}
                />

                <Market data={formData} />

            </div>

            {
                formData?.discribe && (
                    <section className="pd-description">

                        <div className="pd-section-heading">
                            <h2>
                                Descrição do produto
                            </h2>
                        </div>

                        <div
                            className="pd-d"
                            dangerouslySetInnerHTML={{
                                __html: formData.discribe
                            }}
                        />

                    </section>
                )
            }

            {
                !!formData?.marketing_images?.length && (
                    <section className="pd-marketing-section">

                        <div className="pd-section-heading">

                            <div>
                                <h2>
                                    Conteúdo do produto
                                </h2>

                                <span>
                                    Imagens de apresentação
                                </span>
                            </div>

                        </div>

                        <div className="pd-marketing-images">

                            {
                                formData.marketing_images.map(
                                    (image, index) => (

                                        <img
                                            key={
                                                image?.preview_id
                                                || `marketing-${index}`
                                            }
                                            src={image?.path}
                                            alt={image?.alt || ''}
                                        />

                                    )
                                )
                            }

                        </div>

                    </section>
                )
            }

        </div>
    );
};

export default ProductDetailPage;