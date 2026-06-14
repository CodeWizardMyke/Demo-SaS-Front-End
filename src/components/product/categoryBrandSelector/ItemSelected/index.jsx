import React from 'react';

import "./styles.css";
import { FaCheck } from 'react-icons/fa';

const ItemSelected = ({item}) => {
    return (
        <div 
            className={
                `
                    selected 
                    ${item && "active"}
                
                `
            } 
        >
            
            <div className={`selected-icon`} >
                {
                    item && <FaCheck />
                
                }
            </div>

            <div className="selected-info"  >
                
                <strong>
                    { 
                        item 
                            ? item.name 
                            : "Nenhuma " 
                    }
                </strong>
                
                <span>Marca atualmente vinculada ao produto</span>
                
            </div>
        </div>
    );
}

export default ItemSelected;
