import React, { useContext } from 'react';

import './styles.css';
import productForm from 'configs/product';
import Title from 'components/titles/Title';
import { ProductFormContext } from 'contexts/ProductFormContext';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import Button from 'components/buttons/Button';
import Movie from '../movie';

const Marketing = () => {

    const marketingSettings = productForm.find( settings => settings.id === "marketing");

    const { formData, dispatch } = useContext(ProductFormContext) ;

    const handlerConfirm = () => {
        dispatch({ type:"NEXT_STEP" });
    }

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

            <div className="button-complete">
                <Button text={"Confirmar"} click={handlerConfirm} css={'button-confirm'} />
            </div>

        </div>
    );
}

export default Marketing;
