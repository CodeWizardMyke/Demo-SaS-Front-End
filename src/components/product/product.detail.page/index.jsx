import React, { useContext } from 'react';

import './styles.css';
import { ProductFormContext } from 'contexts/ProductFormContext';
import Carousel from './carousel';
import Market from './market';
import Button from 'components/buttons/Button';

const ProductDetailPage = () => {

    const {formData,viewProductDetail,setViewProductDetail} = useContext(ProductFormContext);

    return (
        <div className='pd-content'>
            <div className="pd-title">
                <h2>{formData?.title}</h2>
            </div>
            <div className="pd-main">
                <div className="pd-media">
                    <Carousel images={formData.thumbnails} />
                </div>
                <div className="pd-market">
                    <Market data={formData} />
                </div>
                <div className="pd-description">
                    <h2>Descrição do produto</h2>
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
                <Button 
                    text={viewProductDetail ? "fechar visualização" : "visualizar produto"} 
                    click={() => setViewProductDetail(!viewProductDetail)} 
                    css={'button-larger'}
                />

            </div>
        </div>
    );
}

export default ProductDetailPage;
