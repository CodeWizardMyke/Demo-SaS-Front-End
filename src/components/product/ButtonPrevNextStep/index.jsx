import React, { useContext } from 'react';

import './styles.css';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductFormContext } from 'contexts/ProductFormContext';

import Button from 'components/buttons/Button';
import useServicesProduct from '../hooks/useServicesProduct';

const ButtonPrevNextStep = ({css}) => {
    const {step, totalSteps, dispatch } = useContext(ProductFormContext);

    const {sendCreateProduct} = useServicesProduct();

    const handlerPrev =() =>{
        if(step > 1){
            dispatch({type:"PREV_STEP"});
        }
    }

    const handlerNext =() =>{
        if(step < totalSteps){
            dispatch({type:"NEXT_STEP"});
        }
    }

    
    return (
        <div className={`content-button-pvn ${css}` }>
            <button 
                type="button"
                onClick={handlerPrev}
                disabled={ step === 1 }
            >
                <FaArrowLeftLong/>
                <span>Voltar</span>
            </button>

            {
                step === totalSteps 
                    
                    ?<>
                        <Button text={'Cadastrar'} click={sendCreateProduct} />
                    </>

                    :<>
                        <Button text={'Avançar'} click={handlerNext} svg={ <FaArrowRightLong/> } />
                    </>
            }
        
        </div>
    );
}

export default ButtonPrevNextStep;
