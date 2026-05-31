import React, { useContext } from 'react';

import productForm from '../../../configs/product/index';

import SetedFields from '../../fields';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

import "./styless.css";

const Informations = ({toggleSideBar}) => {
    const { dispatch } = useContext(ProductFormContext);

    const DataConfigured = productForm.find( item => item.id === "product_information" );

    function prevStepAction(){
        dispatch({ type:"NEXT_STEP" });
        toggleSideBar(true);
    };

    return (
        <div className='scob-content'>
            <div className="informations">
                <h2>{DataConfigured?.title}</h2>
                <div className="fields-content">
                    {
                        DataConfigured?.fields?.map( (item,index)=> {

                            return (

                              <div 
                                className={` fields-col-${item.col}`}
                                key={`${item.id}_${index}`}
                              >
                                    <label htmlFor={item.id}>
                                        {item.label}
                                    </label>

                                    <div className="input-content">
                                        <SetedFields data={item} />
                                    </div>

                                    <div className="errors"></div>
                              </div>

                           )
                        } )
                    }
                </div>
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
