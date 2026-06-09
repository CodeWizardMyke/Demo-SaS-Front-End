import React from 'react';

import './styles.css';
import { MdInsertPhoto } from "react-icons/md";

const CurrentImage = ({current}) => {

    return (
        <div className='current-image'>
            {
                current 
                ?(
                    <img src={current.path} alt={current.alt} />
                )
                :(
                    <div className="insert-image">
                        <MdInsertPhoto />
                        <h3>Insira uma imagem para visualizar...</h3>
                    </div>
                )

            }
        </div>
    );
}

export default CurrentImage;
