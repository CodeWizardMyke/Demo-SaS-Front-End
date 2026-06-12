import ButtonToggleSolid from 'components/buttons/toggle/ButtonToggleSolid';
import React, { useState } from 'react';
import './styles.css';
import Iframe from './Iframe';
import NoFrame from './NoFrame';
import convertYouTubeUrl from './utils/convertYouTubeUrl';

const Movie = () => {
    const [url,setUrl] = useState("");
    const [showMovie,setShowMovie] = useState(false)

    function handleURL(value) {

        const converted =
            convertYouTubeUrl(value);

        setUrl(converted);

    }


    function handdlerShowMovie(){
        setShowMovie(!showMovie)
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
                        value={url}
                        placeholder='Cole o link do YouTube, Vimeo ou outra plataforma.'
                        onChange={ (e) => handleURL(e.target.value) }
                    />
                </div>   
                <div className="control">
                    
                    <div className='msg'>
                        <span>Exibir vídeo</span>
                        <ButtonToggleSolid state={showMovie} click={handdlerShowMovie}  />
                    </div>

                </div>
            </div>
            <div className="movie-preview">
                {
                    url 
                        ? <Iframe url={url} /> 
                        : <NoFrame svg={null}/>
                }
            </div>         
        </div>
    );
}

export default Movie;
