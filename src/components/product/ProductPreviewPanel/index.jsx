import React from 'react';
import './styles.css'
import Elements from './Elements';

const ProductPreviewPanel = () => {
    return (
        <div className='aside-elements'>
            <div className="buttons-content">
                <button
                    type='button'
                >voltar</button>
                <button
                    type='button'
                >avançar</button>
            </div>

            <Elements/>

            <div className="buttons-content">
                <button>Visualizar produto</button>
                <button>Validar cadastro</button>
            </div>
        </div>
    );
}

export default ProductPreviewPanel;
