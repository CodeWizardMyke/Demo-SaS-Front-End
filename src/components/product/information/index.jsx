import React, { useMemo } from 'react';
import { resolveFields } from './utils/resolveFields';
import productForm from 'configs/product'; 

import Title from 'components/titles/Title';
import InformationItemsContent from './components/InformationItemsContent';

import "./styles.css";

const Informations = () => {

    const informationSettings = productForm.find( item => item.id === "product_information" );

    const joinedSettings = useMemo(()=> {
        return resolveFields(informationSettings.fields);
    },[informationSettings])

    return (
        <div className='scob-content'>
            <div className='information'>
            <Title 
                title={informationSettings.title} 
                svg={informationSettings.svg}  
                subTitle={informationSettings.subtitle}
            />
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
            
        </div>
    );
}

export default Informations;
