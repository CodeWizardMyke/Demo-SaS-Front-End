import React, { useContext } from 'react';

import { ProductFormContext } from 'contexts/ProductFormContext';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import Movie from '../movie';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';

import './styles.css';

const Marketing = () => {

    const marketingSettings = productForm.find( settings => settings.id === "marketing");

    const { formData } = useContext(ProductFormContext) ;

    return (
        <div className='scob-content'>
            <Title 
                title={marketingSettings.title}
                svg={marketingSettings.svg}
                subTitle={marketingSettings.subtitle}
            />
            
            <div className="sub-content">

                <div className="media-header">
                
                    <ListImages 
                        data={formData.marketing_images}
                        field={'marketing_images'}
                    />
                    
                </div>

                <UploadArea 
                   
                    svg={marketingSettings.svg} 
                    field={'marketing_images'}

                />

            </div>
            
            <div className="sub-content">
                <Movie />
            </div>

            <ButtonPrevNextStep/>

        </div>
    );
}

export default Marketing;
