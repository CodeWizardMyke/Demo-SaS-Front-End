import React, { useContext, useEffect, useMemo } from 'react';

import './style.css'
import 'styles/formStyles.css';

import Overview from './Overview';
import SellingPrice from './SellingPrice';

import formConfig from 'configs/product/index';
import { modifiableFields } from './util/modifiableFields';
import { ProductFormContext } from 'contexts/ProductFormContext';
import calculateSellingPrice from './util/calculateSellingPrice';

import Title from 'components/titles/Title'; 
import RenderFieldPricing from './RenderFieldPricing';

const Pricing = () => {
    const { dispatch, formData } = useContext(ProductFormContext);
   
    const calculatedData = useMemo( () => calculateSellingPrice(formData),[formData] );
    
    const settings = formConfig.find(item => item.id === "pricing");
    
    const joinFields = useMemo( () =>{
        return modifiableFields(settings.fields)
    },[settings] )

    useEffect(() => {

        if (!calculatedData?.sellingPrice) {
            return;
        }

        if (
            formData.selling_price !==
            calculatedData.sellingPrice
        ) {
            dispatch({
                type: "SET_FIELD",
                field: "selling_price",
                value: calculatedData.sellingPrice
            });
        }

    }, [
        calculatedData?.sellingPrice,
        formData.selling_price,
        dispatch
    ]);

    return (
        <div className='md-content pb'>

            <Title 
                title={settings.title}
                svg={settings.svg}
                subTitle={settings.subtitle}
            />
        
            <Overview data={formData} processData={calculatedData} />

            {
                joinFields?.map(( joinStep,index ) =>
                    
                    <div 
                        key={`jf${index}`} 
                    
                        className={joinStep.cssLayout ? joinStep.cssLayout : "md-card"} 

                    >

                        <div className='md-title'>
                            <div className='title-row'>
                                <h1>{joinStep.step}.</h1>
                                <h2>{joinStep.stepLabel}</h2>
                            </div>
                            <span>{joinStep.help}</span>
                        </div>

                        <div className={joinStep.css} >
                            <RenderFieldPricing data={joinStep.fields} css={joinStep.cssField} />
                        </div>

                    </div>

                )
            }

            <SellingPrice processData={calculatedData}/>
            
            
        </div>
    );
}

export default Pricing;
