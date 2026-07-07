import React from 'react';

import "./styles.css";
import { FaCheck } from 'react-icons/fa';

const ItemSelected = ({attributeName}) => {
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
