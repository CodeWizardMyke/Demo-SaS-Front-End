import React from 'react';

import { FaCheck } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

const ProductInList = ({data = [], click, selected}) => {

    return (
        <div className='content-check'>
            <div className='check-hr'>
                <div>
                    <span>Resultados encontrados: <strong>{data?.length}</strong> </span>
                </div>
            </div>

            <div className="contentList">
                
                <ul className='scroll'>
                    {
                        data.map( (item) => {

                            
                            const smallTitle = item?.title?.slice(0,100);

                            return(
                                <li 
                                    key={`ps${item.product_id}`}
                                    
                                    className={`check-item ${ selected?.product_id === item.product_id  && "active" }`}    

                                    onClick={()=> click(item) }
                                >
                                    <div className="check-icon">
                                        {selected?.product_id === item.product_id && <FaCheck />}
                                    </div>
                                    
                                    <span>{`${smallTitle} ${item.title?.length > 100 ? "..." : ""}`}</span>
                                
                                    <IoIosArrowForward />
                                </li>
                            )
                        })  
                    }    
                </ul>
   
            </div>

        </div>
    );
}

export default ProductInList;
