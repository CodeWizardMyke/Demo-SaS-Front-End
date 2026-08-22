import React, { useMemo } from 'react';
import { resolveFields } from './utils/resolveFields';

import productForm from 'configs/product'; 
import Title from 'components/titles/Title';

import "./styles.css";
import RenderFields from './RenderFields';

const Informations = () => {

    const settings = productForm.find( item => item.id === "product_information" );

    const joinFields = useMemo(()=> {
        return resolveFields(settings.fields);
    },[settings])

    return (
        <div className='md-content pb'>
            <div className='information'>
                <Title 
                    title={settings.title} 
                    svg={settings.svg}  
                    subTitle={settings.subtitle}
                />
                {
                    joinFields.map((joinStep,index)=> (

                        <div key={`ji${index}`} className='p-card' >
                            
                            <div className='title-card-step'>
                                <div className='step-row'>
                                    <h1>{joinStep.step}.</h1>
                                    <h2>{joinStep.stepLabel}</h2>
                                </div>
                                <span>{joinStep.help}</span>
                            </div>


                            <div className={joinStep.css} >
                                <RenderFields data={joinStep} />
                            </div>
                        </div>
                    ) )
                }
            </div>
            
        </div>
    );
}

export default Informations;
