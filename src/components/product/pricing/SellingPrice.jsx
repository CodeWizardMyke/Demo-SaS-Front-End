import React from 'react';
import { ImPriceTags } from 'react-icons/im';

const SellingPrice = ({processData}) => {

    const value = processData?.sellingPrice

    return (
        <div className='p-card selling-price'>
            <div className="selling">
                <div className="icon-circle">
                    <ImPriceTags />
                </div>
                <div className="current-price">
                    <h3>Preço de venda sugerido</h3>
                    <h2>{ value || "0.00" }</h2>
                </div>
            </div>
            <span >Este é o preço ideal para alcançar sua margem de lucro desejada.</span>
        </div>
    );
}

export default SellingPrice;
