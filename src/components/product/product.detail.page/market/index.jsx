import React from 'react';

import './styles.css';
import CheckoutProduct from './checkout';

const Market = ({data}) => {
    const price = data?.selling_price || null ;

    return (
        <div className='content-mk'>
            <div className="mk-describe">
                <div className="pricing">
                        {
                            price 
                                ? <h2>R$: {price}</h2>
                                : <span>Preço indisponível.</span>
                        }
                    <span className='price-off'>
                       {
                           price && <span>de R$:{price}</span>
                        }
                    </span>


                    {
                        price && <span>parecelamento em até  5x sem juros.</span>
                    }
                        
                </div>

                <div className="details">
                    <div>
                        <h3>Marca:</h3>
                        <span>
                            {data?.brand?.name}
                        </span>
                    </div>
                    
                    <div>
                        <h3>Categoria:</h3>
                        <span>
                            {data?.category?.name}
                        </span>
                    </div>


                   <div>
                        <h3>Faixa etária:</h3>
                        <span>
                            {data?.age_group}
                        </span>
                    </div>
                    
                </div>

                <CheckoutProduct data={data} />
           
            </div>
        </div>
    );
}

export default Market;
