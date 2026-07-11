import React, { useContext } from 'react';
import { ProductFormContext } from 'contexts/ProductFormContext';

import './styles.css';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import CurrentImage from '../Shared/currentImage';

const Thumbnails = () => {
    const { formData } = useContext(ProductFormContext);

    const mediaSettings = productForm.find( settings => settings.id === "media");

    return (
        <div className='md-content'>
            <div className="sub-content">

                <Title 
                    title={mediaSettings.title}
                    svg={mediaSettings.svg}
                    subTitle={mediaSettings.subtitle}
                />

                <ListImages data={formData.thumbnails} field={'thumbnails'} />

                <UploadArea svg={mediaSettings.svg}  field={'thumbnails'}  />
                
                <CurrentImage current={formData.currentImage} />

            </div>
        </div>
    );
}

export default Thumbnails;
