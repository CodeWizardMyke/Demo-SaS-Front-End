import Button from 'components/buttons/Button';
import React from 'react';

import './styles.css';

const CheckoutProduct = () => {

    return (
        <div className="checkoutContent">

            <div className="checkout">
                <Button text={'Adicionar ao carrinho'} />
                <Button text={'Comprar agora'} />
            </div>
        </div>
    );
};

export default CheckoutProduct;