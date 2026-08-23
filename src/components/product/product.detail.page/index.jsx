
import React, { useContext, useState } from 'react';

import './styles.css';
import { ProductFormContext } from 'contexts/ProductFormContext';
import Button from 'components/buttons/Button';
import Images from './images';
import Market from './market';
import GalleryModal from './images/galleryModal';

const ProductDetailPage = () => {
    const {formData ,handlerToggleProductShow} = useContext(ProductFormContext);
    
    const [openModal,setOpenModal] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = formData?.thumbnails[currentIndex] || null ;

    function toggleModal(){
        setOpenModal(!openModal);
    }

    return (
        <div className={`pd-content scroll ${openModal ? 'active' : " "}`}>
             <div className="product_header_mobile">
                <h2>{formData?.title}</h2>
                <span className='pricing'>
                    R$:{formData?.selling_price}
                </span>
            </div>
            <div className="modal_content">
                {
                    openModal && <GalleryModal 
                        images={formData?.thumbnails} 
                        current={currentIndex}
                        setCurrent={setCurrentIndex}
                        close={toggleModal} 
                    />
                }
            </div>
            <div className="pd-main">
                <Images 
                    images={formData?.thumbnails || [] }  
                    setCurrentIndex={setCurrentIndex}
                    currentImage={currentImage}
                    currentIndex={currentIndex}
                    toggleModal={toggleModal}
                />
                <Market data={formData} />
            </div>

            <div className="pd-description">
                {
                    formData?.discribe && <h2>Descrição do produto</h2>
                }
                <div 
                    className="pd-d"
                    dangerouslySetInnerHTML={{ __html: formData.discribe }}
                ></div>
            </div>

            <div className="pd-marketing-images">
                {
                    formData?.marketing_images?.map( image => 
                            
                        <img key={image?.preview_id} src={ image?.path }  alt={image?.preview_id} /> 
                    
                    )
                }                    
            </div>

            <div className="closeDetail">
                <Button 
                text={"Fechar visualização"} 
                click={()=> handlerToggleProductShow(false)} 
                css={'button-larger'}
            />
            </div>

        </div>
    );
}

export default ProductDetailPage;
