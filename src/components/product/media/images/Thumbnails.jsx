import React, { useContext } from 'react';
import { ProductFormContext } from 'contexts/ProductFormContext';

import './styles.css';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import CurrentImage from '../Shared/currentImage';
import Button from 'components/buttons/Button';

const Thumbnails = () => {
    const {formData,dispatch} = useContext(ProductFormContext);

    const mediaSettings = productForm.find( settings => settings.id === "media");

    const handlerConfirm = () => {
        dispatch({ type:"NEXT_STEP" });
    }

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

            <div className="button-complete">
                <Button text={"Confirmar"} click={handlerConfirm} css={'button-confirm'} />
            </div>
        </div>
    );
}

export default Thumbnails;
