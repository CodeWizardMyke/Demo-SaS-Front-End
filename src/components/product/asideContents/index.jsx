import React, { useContext } from 'react';
import ResumeList from './ResumeList';

import ButtonPrevNextStep from '../ButtonPrevNextStep';

import './styles.css'
import Button from 'components/buttons/Button';
import { ProductFormContext } from 'contexts/ProductFormContext';

const AsideProduct = () => {

    const {viewProductDetail,setViewProductDetail} = useContext(ProductFormContext);

    return (
        <>
            <ButtonPrevNextStep css={'small-buttons bg-transparent'}/>

            <ResumeList />
            <Button text={viewProductDetail ? "fechar visualização" : "visualizar produto"} click={() => setViewProductDetail(!viewProductDetail)} />
            
        </>
    );
}

export default AsideProduct;
