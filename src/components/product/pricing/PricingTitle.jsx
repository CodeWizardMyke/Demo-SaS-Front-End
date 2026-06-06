import React from 'react';
import { RiPriceTag2Line } from 'react-icons/ri';

const PricingTitle = () => {
    return (
        <div className="pricing-title">
                    
            <RiPriceTag2Line/>

            <div className='title-content'>

                <h2>Precificação</h2>

                <span>Defina o preço e margens do produto</span>

            </div>

        </div>
    );
}

export default PricingTitle;
