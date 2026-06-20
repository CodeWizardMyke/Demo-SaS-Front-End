import React from 'react';

import { MdOutlinePriceChange } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import { ImPriceTag } from 'react-icons/im';

const Overview = ({data,processData}) => {
    return (
        <div className='p-card'>
            
            <div className="p-card-content">

                <div className="p-tab">
                   <div className="p-tab-text">
                        <span>Preço de custo.</span>
                        <strong>{`R$: ${data.product_cost? data.product_cost : "0.00"}`}</strong>
                   </div>
                   <MdOutlinePriceChange className='p-tab-svg'/>
                </div>

                 <div className="p-tab">
                    <div className="p-tab-text">
                        <span>Margem de lucro.</span>
                        <strong>{`${data.profit_margin? data.profit_margin : "0"} %`}</strong>
                    </div>
                    <FaPercentage className='p-tab-svg'/>
                </div>

                <div className="p-tab">
                    <div className="p-tab-text">
                        <span>Desconto totais.</span>
                        <strong>{`${processData.totalDiscounts} %`}</strong>
                    </div>
                    <ImPriceTag className='p-tab-svg'/>
                </div>
            </div>

        </div>
    );
}

export default Overview;
