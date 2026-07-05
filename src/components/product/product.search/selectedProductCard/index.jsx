import React from 'react';

import { FaCheck } from 'react-icons/fa';

const SelectedProductCard = ({item,onClear}) => {

    const title = item
        ? item.title
        : "Nenhum produto selecionado";

    const description = item
        ? "Produto selecionado. Pronto para edição."
        : "Pesquise e selecione um produto.";

    return (
        <div 
            className={item ? "selected active" : "selected"}
        >
            
            <div 
                className={`selected-icon`} 
                onClick={()=> onClear(null)}
                
            >
                {
                    item && <FaCheck />
                
                }
            </div>

            <div className="selected-info"  >
                <strong>{title}</strong>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default SelectedProductCard;
