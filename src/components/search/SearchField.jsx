import React from 'react';

import './SearchField.css'

const SearchField = ({setQuery}) => {

    return (
        <div className="searchFieldContent">
            <input type="search"  onChange={(e) => setQuery(e.target.value) }/>
        </div>
    );
}

export default SearchField;
