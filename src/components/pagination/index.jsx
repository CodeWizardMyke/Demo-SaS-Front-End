import React from 'react';

import './styles.css'
const Pagination = ({
    page,
    totalPages,
    size,
    setSize,
    onSearch
}) => {

    function nextPage(){

        if(page >= totalPages) return;

        const next = page + 1;

        onSearch(next);
    }

    function prevPage(){

        if(page <= 1) return;

        const prev = page - 1;

        onSearch(prev);
    }

    return (
       <div className="pagination-content">

            <div className="pagination-control">
                <button
                    className="pagination-btn"
                    type="button"
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    ← Anterior
                </button>

                <span className="pagination-info">
                    Página {String(page)} de {String(totalPages)}
                </span>

                <button
                    className="pagination-btn pagination-btn-primary"
                    type="button"
                    onClick={nextPage}
                    disabled={page >= totalPages}
                >
                    Próxima →
                </button>

            </div>
            <select
                className="pagination-select"
                value={size}
                onChange={(e) => {
                    const newSize = Number(e.target.value);

                    setSize(newSize);

                    onSearch(1, newSize);
                }}
            >
                <option value={5}>5 por página</option>
                <option value={10}>10 por página</option>
                <option value={20}>20 por página</option>
                <option value={50}>50 por página</option>
            </select>
        </div>
    );
}

export default Pagination;
