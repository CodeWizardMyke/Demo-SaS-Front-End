import React from 'react';
import ResumeList from './ResumeList';

import ButtonPrevNextStep from '../ButtonPrevNextStep';

import './styles.css'

const AsideProduct = () => {

    return (
        <>
            <ButtonPrevNextStep css={'small-buttons bg-transparent'}/>

            <ResumeList />

        </>
    );
}

export default AsideProduct;
