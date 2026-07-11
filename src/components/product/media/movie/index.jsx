import React, { useContext, useState } from 'react';
import './styles.css';
import Iframe from './Iframe';
import NoFrame from './NoFrame';
import convertYouTubeUrl from './utils/convertYouTubeUrl';
import { ProductFormContext } from 'contexts/ProductFormContext';

import BtTogleMovieManager from './btTogleMovieManager';
import MovieControls from './movieControls';

const Movie = () => {
    const {dispatch,formData} = useContext(ProductFormContext);
    const [showMovie,setShowMovie] = useState(false)
    const [showControls,setShowControls] = useState(false);
    const {movie_url} = formData;

    let movieUrl = movie_url === "null" ? "" : movie_url;

    function handleURL(value) {

        const converted =
            convertYouTubeUrl(value);

        dispatch({
            type:"SET_FIELD",
            field:"movie_url",
            value:converted
        });

    }

    function togleShowMovie () {

        setShowMovie(!showMovie);
        
        dispatch({
            type:"SET_FIELD",
            field:"use_movie",
            value: showMovie
        })

    }

    return (
        <div className='movie-content'>
            <div className="container-movies-controls">
                <BtTogleMovieManager 
                setShowControls={setShowControls} 
                showControls={showControls} 
            />

            {
                showControls 
                    && 
                <MovieControls 
                    handleURL={handleURL}
                    movieUrl={movieUrl}
                    showMovie={showMovie}
                    togleShowMovie={togleShowMovie}
                />
            }
            </div>
            
            <div className="movie-preview">
                {
                    formData?.movie_url 
                        ? <Iframe url={movieUrl} /> 
                        : <NoFrame />
                }
            </div>         
        </div>
    );
}

export default Movie;
