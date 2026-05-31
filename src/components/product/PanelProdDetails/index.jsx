import React, { useContext } from 'react';
import FieldsProdDetails from './FieldsProdDetails';
import { ProductFormContext } from '../../../contexts/ProductFormContext';

const PanelProdDetails = () => {

    const {step, dispatch, totalSteps} = useContext(ProductFormContext);

    function prevStep(){
        dispatch({
            type:"PREV_STEP"
        })
    }

    function nextStep(){
        dispatch({
            type:"NEXT_STEP"
        })
    }
    
    return (
        <>
            <div className="content-buttons">
                
                {
                    step > 1 && (
                        <button type='button' onClick={prevStep}>
                            Voltar
                        </button>
                    )
                }

                {
                    step < totalSteps && (
                        <button type='button' onClick={nextStep}>
                            Avançar
                        </button>
                    )
                }

            </div>

            <FieldsProdDetails />

            <div className="content-buttons">
                <button type='button'>Visualizar produto</button>
                <button type='button'>Validar cadastro</button>
            </div>
        </>
    );
}

export default PanelProdDetails;
