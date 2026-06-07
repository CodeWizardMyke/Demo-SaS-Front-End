import React, { useContext } from 'react';
import ResumeList from './ResumeList';
import { ProductFormContext } from '../../../contexts/ProductFormContext';
import ButtonNavigation from 'components/buttons/default/ButtonNavigation'; 

import './styles.css'

const AsideProduct = () => {

    const {dispatch} = useContext(ProductFormContext);

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
                <ButtonNavigation text={'Voltar'} click={prevStep} />
                <ButtonNavigation text={'Avançar'} click={nextStep} />
            </div>

            <ResumeList />

            <div className="content-buttons">
                <ButtonNavigation text={'Visualizar'} click={nextStep} css={'disabled'} />
                <ButtonNavigation text={'Cadastrar'} click={prevStep}  />
            </div>
        </>
    );
}

export default AsideProduct;
