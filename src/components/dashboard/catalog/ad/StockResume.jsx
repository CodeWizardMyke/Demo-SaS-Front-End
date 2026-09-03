import React from 'react';

import './style.css'

const StockResume = ({ data }) => {

    function currency(value = 0) {
        return (Number(value) ).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function percentage(value = 0) {
        return Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + "%";
    }

    return (
        <div className="ds-card">
            <h2>Resumo do estoque</h2>

            <div className="ds-resume">

                <div className="ds-item">
                    <div className="ds-label">
                        <span>Custo do estoque</span>
                    </div>

                    <div className="ds-val">
                        <span>{currency(data?.inventoryCost)}</span>
                    </div>
                </div>

                <div className="ds-item">
                    <div className="ds-label">
                        <span>Valor potencial</span>
                    </div>

                    <div className="ds-val">
                        <span>{currency(data?.potentialValue)}</span>
                    </div>
                </div>

                <div>
                    <h3 className='mt-5'>Resumo do catálogo</h3>
                    <div className="ds-item">
                        <div className="ds-label">
                            <p>Margem Média</p>
                        </div>

                        <div className="ds-val">
                            <span>{percentage(data?.averageMargin)}</span>
                        </div>
                    </div>

                    <div className="ds-item">
                        <div className="ds-label">
                            <p>Preço Médio</p>
                        </div>

                        <div className="ds-val">
                            <span>{currency(data?.averagePrice)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StockResume;
