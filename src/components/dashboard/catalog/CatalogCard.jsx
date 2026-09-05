import React from 'react';

import './catalogCategory.css';

const CatalogCardCategory = ({
    data = []
}) => {

    const total = data.reduce(
        (acc, item) => acc + item.value,
        0
    );

    return (
        <div className='ds-card'>
            <h2>Distribuição por categorias</h2>
            <div className="ds-content">
                {
                    data.map((item,index) => {
                        const percentage = total === 0  
                            ? 0
                            : Math.round((item.value / total) * 100);

                        return (
                            <div 
                                className="ds-item"
                                key={index + 'ds'}
                            >
                                
                                <div className="ds-label">
                                    <span>
                                        {item.label}
                                    </span>
                                </div>

                                <div className="ds-progress">
                                    <div 
                                        className="ds-bar"
                                        style={{width: `${percentage}%`}}
                                    />
                                </div>

                                <div className="ds-val">
                                    <span>
                                        {
                                            item.value
                                        }.un
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    !data.length && (
                        <div className="no-data">
                            Sem registros de categorias adicionadas ao sistema!.
                        </div>
                    )
                }
            </div>
        </div>
            
    );
}



export default CatalogCardCategory;
