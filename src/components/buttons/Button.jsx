import React from 'react';

const Button = ({
        text,
        css,
        click,
        svg
    }
) => {
    
    return (
        <button 
            type='button' 
            onClick={click}
            className={`${css}`}
        >
            {svg}
            {text}
        </button>
    );
}
export default Button;
