import React from 'react';

const ButtonConfimation = ({
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
export default ButtonConfimation;
