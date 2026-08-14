import React from 'react';

const Button = ({
        type,
        text,
        css,
        click,
        svg,
        children
    }
) => {
    
    return (
        <button 
            type={type || 'button'} 
            onClick={click}
            className={`${css}`}
        >
            {svg}
            {text}
            {children}
        </button>
    );
}
export default Button;
