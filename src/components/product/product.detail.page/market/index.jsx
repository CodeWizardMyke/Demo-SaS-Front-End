import React from 'react';

import './styles.css';
import CheckoutProduct from './checkout';

const Market = ({data}) => {

    return (
        <div className='product_content'>
            <div className="product_header">
                <h2>{data?.title}</h2>
                <span className="pricing">
                    R$: {data?.selling_price}
                </span>
            </div>
            <div className="portable_snippet">
                <div className="product_sale_details">
                    <ul>
                        <li>
                            <span>Marca:</span>
                            <span>{data?.brand?.name}</span>
                        </li>
                        <li>
                            <span>Forma:</span>
                            <span>{data?.product_shape}</span>
                        </li>   
                        <li>
                            <span>Volume:</span>
                            <span>{data?.NET_VOLUM}</span>
                        </li>
                        <li>
                            <span>Faixa etária:</span>
                            <span>{data?.age_group}</span>
                        </li>
                    </ul>
                </div>
                <div className="product_sale_quantity">
                    
                    {
                        data?.stock > 0 
                        
                            ? <span className="stock">Em estoque</span>
                            : <span className="no-stock">Sem estoque</span>
                    }

                    
                    <div className="quantity">
                        <label>Quantidade</label>
                        <input type="number" min="1" defaultValue="1" />
                    </div>

                </div>

                <CheckoutProduct data={data} />
           
            </div>
        </div>
    );
}

export default Market;
