import './styles.css';

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

            <button
                type="button"
                onClick={prevPage}
                disabled={page === 1}
            >
                Prev
            </button>

            <span>
                Página {page} de {totalPages}
            </span>

            <button
                type="button"
                onClick={nextPage}
                disabled={page >= totalPages}
            >
                Next
            </button>

            <select
                value={size}
                onChange={(e) => {
                    const newSize = Number(e.target.value);

                    setSize(newSize);

                    onSearch(1, newSize);
                }}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>

        </div>
    );
}

export default Pagination;