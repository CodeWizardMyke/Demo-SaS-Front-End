import React from 'react';

import './SearchField.css'

const SearchField = ({setQuery}) => {

    return (
        <div className="searchFieldContent">
            <input 
                type="search" 
                onChange={(e) => setQuery(e.target.value) }
                placeholder='Pesquise um módulo'
            />
        </div>
    );
}

export default SearchField;
