import React, { useContext, useState } from 'react';

import { ProductFormContext } from 'contexts/ProductFormContext';

import productForm from 'configs/product';
import Title from 'components/titles/Title';
import ListImages from '../Shared/ListImages/ListImages';
import UploadArea from '../Shared/upload/UploadArea';
import Movie from '../movie';

import './styles.css';
import CurrentImage from '../Shared/currentImage';
import Button from 'components/buttons/Button';
import ButtonPrevNextStep from 'components/product/ButtonPrevNextStep';

const Marketing = () => {
    const [ currentImage, setCurrentImage] = useState(null);
    
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
                        propsCurrent={setCurrentImage}
                    />
                    
                </div>

                <UploadArea 
                    propsCurrent={setCurrentImage}
                    svg={marketingSettings.svg} 
                    field={'marketing_images'}

                />
    
            </div>
            
            <div className="sub-content">
                {
                    currentImage 
                        
                        ? <>
                            <Button 
                                text={'fechar visualização'} 
                                css={'button-flow-close'} 
                                click={()=> setCurrentImage(null)} 
                            />
                            <CurrentImage current={currentImage} />
                        </>

                        : <Movie />

                }
            </div>
            
            <ButtonPrevNextStep/>

        </div>
    );
}

export default Marketing;
