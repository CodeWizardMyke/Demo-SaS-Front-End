import React, { useContext, useMemo } from 'react';
import { ProductFormContext } from 'contexts/ProductFormContext'; 
import { resolveFields } from './utils/resolveFields';
import productForm from 'configs/product'; 

import Title from 'components/titles/Title';
import InformationItemsContent from './components/InformationItemsContent';

import "./styless.css";

const Informations = ({toggleSideBar}) => {
    const { dispatch } = useContext(ProductFormContext);

    const informationSettings = productForm.find( item => item.id === "product_information" );

    const joinedSettings = useMemo(()=> {
        return resolveFields(informationSettings.fields);
    },[informationSettings])

    function prevStepAction(){
        dispatch({ type:"NEXT_STEP" });
        toggleSideBar(true);
    };

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
                                <div className="circle-tag">
                                    <div>{ element.step }</div>
                                    <h4> {element.stepLabel} </h4>
                                </div>
                                <InformationItemsContent fields={element.fields} cssC={element.cssC} />
                            </div>
                        )
                    } )
                }
            </div>
            <button 
                className='button-confirm'
                type='button'
                onClick={prevStepAction}
            >
                confirmar
            </button>
        </div>
    );
}

export default Informations;
