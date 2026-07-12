import React from 'react';

import './styles.css';
import CheckoutProduct from './checkout';

const Market = ({data}) => {

    const specifications =
        typeof data?.specifications === "string"
            ? JSON.parse(data.specifications)
            : data?.specifications;


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
                        <span>{data?.brandProduct?.brand_name}</span>
                    </li>

                    <li>
                        <span>Categoria:</span>
                        <span>{data?.categoryProduct?.category_name}</span>
                    </li>

                    {specifications &&
                        Object.entries(specifications).map(([key, value]) => (
                            <li key={key}>
                                <span>{key}:</span>
                                <span>{String(value)}</span>
                            </li>
                        ))
                    }
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
