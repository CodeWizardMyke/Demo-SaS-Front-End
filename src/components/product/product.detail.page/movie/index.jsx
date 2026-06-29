import React from 'react';

import "./styles.css";

const ProductDetailMovie = ({url}) => {

    return (
        <div className="movie-preview">
            {
                url && 
                 <iframe
                    src={url || ""}
                    title="YouTube video player" 
                    frameborder="0" 
                    allowfullscreen
                />
            }
        </div>     
    );
}

export default ProductDetailMovie;
