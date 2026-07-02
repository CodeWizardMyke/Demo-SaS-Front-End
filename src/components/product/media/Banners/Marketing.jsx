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

const Marketing = () => {
    const [ currentImage, setCurrentImage] = useState(null);
    
    const marketingSettings = productForm.find( settings => settings.id === "marketing");

    const { formData } = useContext(ProductFormContext) ;

    return (
        <div className='scob-content'>
            <div className="space-gap">

                <Title 
                    title={marketingSettings.title}
                    svg={marketingSettings.svg}
                    subTitle={marketingSettings.subtitle}
                />
                
                    
                <ListImages 
                    data={formData.marketing_images}
                    field={'marketing_images'}
                    propsCurrent={setCurrentImage}
                />

                <UploadArea 
                    propsCurrent={setCurrentImage}
                    svg={marketingSettings.svg} 
                    field={'marketing_images'}

                />

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
            
        </div>
    );
}

export default Marketing;
