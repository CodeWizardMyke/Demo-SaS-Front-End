import React from 'react';

const Input = (
    {
        query,
        setQuery,
        placeholder,
        svg,
        css,
        name,
        type,
        
    }
) => {

    const changed = (e) => {
        if (type !== "number") {
            setQuery?.(e.target.value);
            return;
        }

        const value = Number(e.target.value);

        if (e.target.value === "") {
            setQuery("");
            return;
        }

        setQuery(Math.max(0, `${value}`));
    };
    
    return (
        <div className={css}>
            <input 
                type={type || "text"} 
                name={name}
                id={name}
                value={query}
                placeholder={placeholder}
                onChange={changed}
                onWheel={(e) => e.target.blur()}
                
            />
            {svg}
        </div>
    );
}

export default Input;
