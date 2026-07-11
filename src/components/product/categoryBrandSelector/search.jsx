import React from 'react';
    
const InputSearch = ({query, setQuery, placeholder, svg}) => {

    return (
       <div className="div-input-content">
            {svg}
            <input type="search" value={query} onChange={ e =>  setQuery(e.target.value) } placeholder={placeholder + "..."} />
       </div>
    );
}

export default InputSearch;
