import React from 'react';

import './styles.css';

const Market = ({data}) => {
    const price = data?.selling_price || null ;

    return (
        <div className='content-mk'>
            <h2>{data.title}</h2>
            <div className="mk-describe">
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
                        <h3>Forma:</h3>
                        <span>
                            {data?.product_shape}
                        </span>
                    </div>
                      
                    <div>
                        <h3>Volume:</h3>
                        <span>
                            {data?.NET_VOLUM}
                        </span>
                    </div>

                   <div>
                        <h3>Nome oficial:</h3>
                        <span>
                            {data?.official_store_name}
                        </span>
                    </div>

                   <div>
                        <h3>Faixa etária:</h3>
                        <span>
                            {data?.age_group}
                        </span>
                    </div>
                    
                </div>
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
            </div>
        </div>
    );
}

export default Market;
