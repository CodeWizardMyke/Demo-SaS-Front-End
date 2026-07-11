import React from 'react';
import ButtonToggleSolid from 'components/buttons/toggle/ButtonToggleSolid';

const MovieControls = ({handleURL,togleShowMovie,showMovie,movieUrl}) => {
    return (
        <div className='movie-control-content'>
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
                        value={movieUrl}
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
        </div>
    );
}

export default MovieControls;
