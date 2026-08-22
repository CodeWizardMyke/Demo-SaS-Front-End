import React, { useContext } from 'react';
import { ProductFormContext } from 'contexts/ProductFormContext';

import './styles.css';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import CurrentImage from '../Shared/currentImage';

const Thumbnails = () => {
    const { formData, dispatch } = useContext(ProductFormContext);

    const mediaSettings = productForm.find( settings => settings.id === "media");

    function handlerToggle() {
        dispatch({
            type:"SET_FIELD",
            field:'currentImage',
            value:null
        })
    }

    return (
        <div className='md-content pb'>
            <div className="sub-content">

                <Title 
                    title={mediaSettings.title}
                    svg={mediaSettings.svg}
                    subTitle={mediaSettings.subtitle}
                />

                <ListImages data={formData.thumbnails} field={'thumbnails'} />

                <UploadArea svg={mediaSettings.svg}  field={'thumbnails'}  />
                
                <CurrentImage
                     current={formData.currentImage}
                     toggle={handlerToggle}
                />

            </div>
        </div>
    );
}

export default Thumbnails;
