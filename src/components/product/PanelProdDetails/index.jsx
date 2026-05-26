import React from 'react';
import FieldsProdDetails from './FieldsProdDetails';

const PanelProdDetails = () => {
    return (
        <>
            <div className="content-buttons">
                <button type='button'>Voltar</button>
                <button type='button'>Avançar</button>
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
