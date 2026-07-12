import React from 'react';

const Button = ({
        type,
        text,
        css,
        click,
        svg
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
        </button>
    );
}
export default Button;
