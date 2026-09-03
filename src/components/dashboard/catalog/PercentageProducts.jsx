import React from 'react';

import './PercentageProducts.css';

const PercentageProducts = ({products}) => {


    return (
       <div className='ds-card'>
            <h2>Status do catálogo</h2>
            <div className="ds-content">
               <div className="active-percentage">
                    <span>{products?.activePercentage || 0} %</span>
                    <small>Ativos</small>
               </div>
               <div className="ds-bottom">
                    <span>{products?.enabled} Ativos</span>
                    <span>{products?.disabled} Inativos</span>
               </div>
            </div>
        </div>
    );
}

export default PercentageProducts;
