import React from 'react';
import './styles.css'

const ButtonNavigation = (
    {
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
            className={`${css} bt-navigation`}
        >
            {svg}
            {text}
        </button>
    );
}

export default ButtonNavigation;
