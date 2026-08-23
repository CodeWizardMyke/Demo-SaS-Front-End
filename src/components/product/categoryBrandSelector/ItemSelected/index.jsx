import React from 'react';

import "./styles.css";
import { FaCheck } from 'react-icons/fa';

const ItemSelected = ({data}) => {

    const attributeName = data?.category_name || data?.brand_name || ""

    return (
        <div 
            className={
                `
                    selected 
                    ${attributeName && "active"}
                
                `
            } 
        >
            
            <div className={`selected-icon`} >
                {
                    attributeName && <FaCheck />
                }
            </div>

            <div className="selected-info"  >
                
                <strong>
                    { 
                        attributeName 
                            ? attributeName 
                            : "Nenhum " 
                    }
                </strong>
                <span>Valor selecionado</span>
                
                
            </div>
        </div>
    );
}

export default ItemSelected;
