import React from 'react';
import ResumeList from './ResumeList';

import ButtonNavigation from 'components/buttons/default/ButtonNavigation'; 
import ButtonPrevNextStep from '../ButtonPrevNextStep';

import './styles.css'
import useServicesProduct from '../hooks/useServicesProduct';

const AsideProduct = () => {
    const {createProduct} = useServicesProduct()
    
    const submitCreateProduct = async () => {
      await createProduct();
    }

    return (
        <>
            <ButtonPrevNextStep css={'small-buttons bg-transparent'}/>

            <ResumeList />

            <div className="content-buttons">
                <ButtonNavigation text={'Visualizar'} css={'disabled'} />
                <ButtonNavigation text={'Cadastrar'} click={submitCreateProduct } />
            </div>
        </>
    );
}

export default AsideProduct;
