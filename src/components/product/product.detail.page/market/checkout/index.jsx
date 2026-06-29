import Button from 'components/buttons/Button';
import React from 'react';

import './styles.css';

const CheckoutProduct = ({data}) => {
    const stock = data?.stock  || 0

    return (
        <div className="checkoutContent">
            <div className="productInfo">
                {
                    stock > 0 
                    
                        ? <span className="stock">Em estoque</span>
                        : <span className="no-stock">Sem estoque</span>
                }
            </div>

            <div className="quantity">
                <label>Quantidade</label>
                <input type="number" min="1" defaultValue="1" />
            </div>

            <div className="checkout">
                <Button text={'Adicionar ao carrinho'} />
                <Button text={'Comprar agora'} />
            </div>
        </div>
    );
};

export default CheckoutProduct;