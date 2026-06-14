import React from 'react';
import ResumeList from './ResumeList';

import ButtonNavigation from 'components/buttons/default/ButtonNavigation'; 
import ButtonPrevNextStep from '../ButtonPrevNextStep';

import './styles.css'

const AsideProduct = () => {

    return (
        <>
            <ButtonPrevNextStep css={'small-buttons'}/>

            <ResumeList />

            <div className="content-buttons">
                <ButtonNavigation text={'Visualizar'} css={'disabled'} />
                <ButtonNavigation text={'Cadastrar'} />
            </div>
        </>
    );
}

export default AsideProduct;
