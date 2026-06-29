import ButtonToggleSolid from 'components/buttons/toggle/ButtonToggleSolid';
import React, { useContext, useState } from 'react';
import './styles.css';
import Iframe from './Iframe';
import NoFrame from './NoFrame';
import convertYouTubeUrl from './utils/convertYouTubeUrl';
import { ProductFormContext } from 'contexts/ProductFormContext';

const Movie = () => {
    const {dispatch,formData} = useContext(ProductFormContext);
    const [showMovie,setShowMovie] = useState(false)

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
            <div className="movie-title">
                <div className='title'>
                    <h3>Vídeo do produto</h3>
                    <span className='optional'>Opicional</span>
                </div>
                <span>Adicione um vídeo para apresentar seu vídeo em ação.</span>
            </div>
            <div className="movie-controls">
                <div className="input-content">
                    <label htmlFor="movieUrl">URL do vídeo</label>
                    <input 
                        type="url" 
                        id="movieUrl" 
                        value={formData?.movie_url}
                        placeholder='Cole o link do YouTube, Vimeo ou outra plataforma.'
                        onChange={ (e) => handleURL(e.target.value) }
                    />
                </div>   
                <div className="control">
                    
                    <div className='msg'>
                        <span>Exibir vídeo</span>
                        <ButtonToggleSolid state={showMovie} click={()=> togleShowMovie()}  />
                    </div>

                </div>
            </div>
            <div className="movie-preview">
                {
                    formData?.movie_url 
                        ? <Iframe url={formData?.movie_url} /> 
                        : <NoFrame />
                }
            </div>         
        </div>
    );
}

export default Movie;
