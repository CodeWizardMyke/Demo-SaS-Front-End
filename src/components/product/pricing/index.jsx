import React, { useContext, useEffect, useMemo } from 'react';

import './style.css'
import 'styles/formStyles.css'

import Overview from './Overview';
import PricingField from './PricingField';
import SellingPrice from './SellingPrice';

import formConfig from 'configs/product/index';
import { modifiableFields } from './util/modifiableFields';
import { ProductFormContext } from 'contexts/ProductFormContext';
import calculateSellingPrice from './util/calculateSellingPrice';
import Title from 'components/titles/Title'; 

const Pricing = ({toggleSideBar}) => {
    const { dispatch, formData } = useContext(ProductFormContext);
    const calculatedData = useMemo( () => calculateSellingPrice(formData),[formData] );
    const pricingSettings = formConfig.find(item => item.id === "pricing");
    
    const joinedData = useMemo( () =>{
        return modifiableFields(pricingSettings.fields)
    },[pricingSettings] )



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

    function prevStepAction() {

        if (!calculatedData?.sellingPrice) {
            window.alert('insira um valor para o produto');
            return;
        }

        dispatch({ type: "NEXT_STEP" });
        toggleSideBar(true);
    }

    return (
        <div className='scob-content'>

            <Title 
                title={pricingSettings.title}
                svg={pricingSettings.svg}
                subTitle={pricingSettings.subtitle}
            />
            <div className="space-gap">
            
                <Overview data={formData} processData={calculatedData} />

                {
                    joinedData?.map(( item,index ) => {

                        return (
                            <div className={item.cssP} key={item.stepLabel + index} >
                                <div className="circle-tag">
                                    <div>{item.step}</div>
                                    <h4>{item.stepLabel}</h4>
                                </div>

                                {
                                    !!item.cssJoined ? (
                                        <div className={item.cssJoined} >
                                            {
                                                item.fields.map((field,jIndex) =>  {
                                                    return (
                                                        <div key={`fieldPricForm${field.name}_id:${jIndex}`}>
                                                            <PricingField field={field} className={item.cssC} />
                                                        </div>
                                                    )
                                                } )
                                            }
                                        </div>
                                    )
                                    : 
                                    (
                                        item.fields.map((field,yIndex) =>  {
                                            return (
                                                <div key={`fieldPricForm${field.name}_id:${yIndex+index}`}>
                                                    <PricingField field={field} className={item.cssC} />
                                                </div>
                                            )
                                        } )
                                    )
                                }
                                
                                <span>{item.help}</span>
                            </div>
                        )
                    })
                }

                <SellingPrice processData={calculatedData}/>
                
            </div>
            
             <button 
                className='button-confirm'
                onClick={prevStepAction}
                type='button'
            >
                {
                    calculatedData?.sellingPrice ? "confirmar" : "Informar valor do produto"
                }
            </button>
        </div>
    );
}

export default Pricing;
