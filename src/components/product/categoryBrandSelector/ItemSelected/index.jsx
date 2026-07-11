import React from 'react';

import "./styles.css";
import { FaCheck } from 'react-icons/fa';

const ItemSelected = ({data}) => {
    const {category_name, brand_name} = data;

    const attributeName = category_name || brand_name

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
                            : "Nenhuma " 
                    }
                </strong>
                
                <span>Marca atualmente vinculada ao produto</span>
                
            </div>
        </div>
    );
}

export default ItemSelected;
