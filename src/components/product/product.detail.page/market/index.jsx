import React, { useState } from 'react';

import './styles.css';

import CheckoutProduct from './checkout';
import { formatCurrency } from './utils/formatCurrency';

import {
    FaMinus,
    FaPlus
} from 'react-icons/fa';

const Market = ({ data }) => {
   
    const [quantity, setQuantity] = useState(1);

    const stock = Number(data?.stock) || 0;

    function increaseQuantity() {
        setQuantity(prev =>
            Math.min(prev + 1, stock)
        );
    }

    function decreaseQuantity() {
        setQuantity(prev =>
            Math.max(prev - 1, 1)
        );
    }

    function changeQuantity(event) {

        const value = Number(event.target.value);

        if (!Number.isFinite(value)) {
            return;
        }

        setQuantity(
            Math.min(
                Math.max(value, 1),
                stock
            )
        );
    }

    let specifications = data?.specifications;

    if (typeof specifications === 'string') {

        try {

            specifications = JSON.parse(specifications);

        } catch {

            specifications = null;

        }

    }
    
    return (
        <aside className="product_content">

            <div className="product_header">

                <h2>
                    {data?.title || 'Produto sem título'}
                </h2>

                <span className="pricing">
                  {formatCurrency(data?.selling_price, data?.currency) || '0,00'}
                </span>

            </div>

            <div className="product_sale_quantity">

                <div className="product_stock_row">

                <div className="quantity">

                    <div className="quantity-header">

                        <label htmlFor="product-preview-quantity">
                            Quantidade
                        </label>

                        <span>
                            {stock} disponíveis
                        </span>

                    </div>

                    <div className="quantity-control">

                        <button
                            type="button"
                            className="quantity-button"
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                            aria-label="Diminuir quantidade"
                        >
                            <FaMinus />
                        </button>

                        <input
                            id="product-preview-quantity"
                            type="number"
                            min="1"
                            max={stock}
                            value={quantity}
                            onChange={changeQuantity}
                        />

                        <button
                            type="button"
                            className="quantity-button"
                            onClick={increaseQuantity}
                            disabled={quantity >= stock}
                            aria-label="Aumentar quantidade"
                        >
                            <FaPlus />
                        </button>

                    </div>

                </div>

                    <div className="inStock">

                        {
                            Number(data?.stock) > 0 ? (

                                <span className="true">
                                    Em estoque
                                </span>

                            ) : (

                                <span>
                                    Sem estoque
                                </span>

                            )
                        }

                    </div>

                </div>

                <CheckoutProduct data={data} />

            </div>

            <div className="portable_snippet">

                <div className="product_sale_details">

                    <ul>

                        {
                            data?.brandProduct?.brand_name && (
                                <li>

                                    <span>
                                        Marca
                                    </span>

                                    <span>
                                        {data.brandProduct.brand_name}
                                    </span>

                                </li>
                            )
                        }

                        {
                            data?.categoryProduct?.category_name && (
                                <li>

                                    <span>
                                        Categoria
                                    </span>

                                    <span>
                                        {data.categoryProduct.category_name}
                                    </span>

                                </li>
                            )
                        }

                        {
                            specifications &&
                            typeof specifications === 'object' &&
                            Object.entries(specifications).map(
                                ([key, value]) => (

                                    <li key={key}>

                                        <span>
                                            {key}
                                        </span>

                                        <span>
                                            {String(value)}
                                        </span>

                                    </li>

                                )
                            )
                        }

                    </ul>

                </div>

            </div>

        </aside>
    );
};

export default Market;