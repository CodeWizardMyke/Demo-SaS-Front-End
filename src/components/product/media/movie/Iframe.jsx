import React from 'react';

const Iframe = ({url}) => {
    return (
         <iframe 
            src={url || ""}
            title="YouTube video player" 
            frameborder="0" 
            allowfullscreen
        >
                
        </iframe>   
    );
}

export default Iframe;
