import React, { useContext } from 'react';
import { ProductFormContext } from 'contexts/ProductFormContext';

import './styles.css';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import CurrentImage from '../Shared/currentImage';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';

const Thumbnails = () => {
    const {formData} = useContext(ProductFormContext);

    const mediaSettings = productForm.find( settings => settings.id === "media");

    return (
        <div className='scob-content'>
            <Title 
                title={mediaSettings.title}
                svg={mediaSettings.svg}
                subTitle={mediaSettings.subtitle}
            />
            <div className="sub-content">

                <div className="media-header">
                
                    <ListImages data={formData.thumbnails} field={'thumbnails'} />
                    
                </div>

                <UploadArea svg={mediaSettings.svg}  field={'thumbnails'}  />

            </div>

            <div className="sub-content">
                <CurrentImage current={formData.currentImage} />
            </div>

            <ButtonPrevNextStep/>
            
        </div>
    );
}

export default Thumbnails;
