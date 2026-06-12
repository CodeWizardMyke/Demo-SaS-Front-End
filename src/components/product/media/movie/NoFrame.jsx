import React from 'react';
import { MdMovieCreation } from "react-icons/md";

const NoFrame = () => {
    return (
        <div className='no-frameSet'>
            <MdMovieCreation/>
            <h2>Prévia do vídeo</h2>
            <h5>Cole o link acima para visualizar uma préviado vídeo aqui.</h5>
            <span>Suportamos apenas link do YouTube, ou outras plataformas populares.</span>
        </div>
    );
}

export default NoFrame;
