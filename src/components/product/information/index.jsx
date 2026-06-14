import React, { useMemo } from 'react';
import { resolveFields } from './utils/resolveFields';
import productForm from 'configs/product'; 

import Title from 'components/titles/Title';
import InformationItemsContent from './components/InformationItemsContent';

import "./styless.css";
import ButtonPrevNextStep from '../ButtonPrevNextStep';

const Informations = () => {

    const informationSettings = productForm.find( item => item.id === "product_information" );

    const joinedSettings = useMemo(()=> {
        return resolveFields(informationSettings.fields);
    },[informationSettings])

    return (
        <div className='scob-content'>
            <Title 
                title={informationSettings.title} 
                svg={informationSettings.svg}  
                subTitle={informationSettings.subtitle}
            />
            <div className='information'>
                {
                    joinedSettings.map( (element,index) => {
                        return (
                            <div 
                                className={element.cssP}
                                key={`JoinedSettings_step:${element.step}_id:${index}`}
                            >
                                <div className="card-title">
                                    <span>{ element.step }</span>
                                    <h4> {element.stepLabel} </h4>
                                </div>
                                <InformationItemsContent fields={element.fields} cssC={element.cssC} />
                            </div>
                        )
                    } )
                }
            </div>
            <ButtonPrevNextStep/>
        </div>
    );
}

export default Informations;
