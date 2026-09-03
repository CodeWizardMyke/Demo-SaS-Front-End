import React from "react";

const StockState = ({ data = [] }) => {
    console.log(data)

    return (
        <div className="ds-card">

            <h2>
                {data.length
                    ? "Atenção ao estoque"
                    : "Estoque em dia"
                }
            </h2>

            <div className="ds-content">

                {data.map((item, index) => (
                    <div
                        className="stock-item"
                        key={item.product_id ?? index}
                    >

                        <div className="stock-item-info">
                            <span
                                className="stock-item-label"
                                title={item.title}
                            >
                                {item.title}
                            </span>
                        </div>

                        <div className="stock-item-value">
                            {item.stock} un.
                        </div>

                    </div>
                ))}

                {!data.length && (
                    <div className="no-data">
                        Nenhum produto com estoque baixo ou esgotado.
                    </div>
                )}

            </div>

        </div>
    );
};

export default StockState;